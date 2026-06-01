import { useEffect, useRef } from 'react';

const VERT = `
attribute vec2 a_pos;
void main(){
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2 u_res;
uniform float u_morphSpeed;
uniform vec3 u_color1;
uniform vec3 u_color2;

mat2 rot(float a){
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float sdSphere(vec3 p, float s){
  return length(p) - s;
}

float scene(vec3 p){
  float d = 1e10;
  vec3 q = p;
  float t = u_time * u_morphSpeed;
  float offset = sin(t * 0.3) * 0.4;
  q.xz *= rot(t * 0.2);
  float scale = 1.0;
  int iters = 6;
  for(int i = 0; i < 10; i++){
    if(i >= iters) break;
    q = abs(q);
    float threshold = 1.0;
    if(q.x < threshold) q.x = 2.0 * threshold - q.x;
    if(q.y < threshold) q.y = 2.0 * threshold - q.y;
    if(q.z < threshold) q.z = 2.0 * threshold - q.z;
    float r2 = dot(q, q);
    if(r2 > 4.0) break;
    float r = sqrt(r2);
    float theta = atan(q.y, q.x) + offset;
    float phi = acos(clamp(q.z / r, -1.0, 1.0));
    float r_pow = pow(r, -2.0);
    float st = sin(theta * 2.0), ct = cos(theta * 2.0);
    float sp = sin(phi * 2.0), cp = cos(phi * 2.0);
    q = vec3(r_pow * sp * ct, r_pow * sp * st, r_pow * cp);
    q *= 1.5;
    scale = scale * abs(-2.0) * r_pow + 1.0;
  }
  float dist = length(q) / abs(scale);
  return min(d, dist * 0.5);
}

vec3 calcNormal(vec3 p){
  vec2 e = vec2(0.001, 0.0);
  return normalize(vec3(
    scene(p + e.xyy) - scene(p - e.xyy),
    scene(p + e.yxy) - scene(p - e.yxy),
    scene(p + e.yyx) - scene(p - e.yyx)
  ));
}

float depthFade(float t){
  return smoothstep(0.0, 0.65, t);
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res.xy) / u_res.y;
  float t = u_time * u_morphSpeed;
  vec3 ro = vec3(0.0, 0.0, 2.5);
  vec3 rd = normalize(vec3(uv, -1.0));
  rd.xy *= rot(t * 0.1);
  rd.xz *= rot(t * 0.07);
  float travel = 0.0;
  vec3 col = vec3(0.0);
  for(int i = 0; i < 80; i++){
    vec3 p = ro + rd * travel;
    float dist = scene(p);
    if(dist < 0.002){
      vec3 n = calcNormal(p);
      float diff = max(dot(n, normalize(vec3(0.5, 0.8, 0.6))), 0.0);
      float fresnel = pow(1.0 - max(dot(-rd, n), 0.0), 3.0);
      vec3 surfaceCol = mix(u_color1, u_color2, diff + fresnel * 0.4);
      float fade = depthFade(travel / 3.0);
      col = surfaceCol * fade;
      col += u_color2 * fresnel * 0.3 * fade;
      break;
    }
    travel += dist;
    if(travel > 12.0) break;
  }
  col += u_color2 * exp(-travel * travel * 0.15) * 0.6;
  col = col / (1.0 + col);
  col = pow(col, vec3(0.9));
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function RadianceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const glRef = useRef<WebGLRenderingContext | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;
    glRef.current = gl;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERT);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.bindAttribLocation(program, 0, 'a_pos');
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uMorphSpeed = gl.getUniformLocation(program, 'u_morphSpeed');
    const uColor1 = gl.getUniformLocation(program, 'u_color1');
    const uColor2 = gl.getUniformLocation(program, 'u_color2');

    gl.uniform1f(uMorphSpeed, 0.3);
    gl.uniform3f(uColor1, 0.61, 0.41, 0.63);
    gl.uniform3f(uColor2, 0.61, 0.26, 0.43);

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
    }

    resize();
    window.addEventListener('resize', resize);

    let startTime = performance.now();
    let isActive = true;

    function render() {
      if (!isActive) return;
      const elapsed = (performance.now() - startTime) * 0.001;
      gl!.uniform1f(uTime, elapsed);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      isActive = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
