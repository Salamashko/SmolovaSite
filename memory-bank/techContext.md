# Tech Context
React 19 + TypeScript (Vite), Tailwind CSS v3 + shadcn/ui (Radix), GSAP, Three.js, Lenis, react-router v7. Команды из папки `app/`: `npm run dev`, `npm run build` (typecheck + сборка), `npm run lint`, `npm run preview`.
Известный шум: ошибки линтера в стандартных файлах `src/components/ui/`. Хостинг — Vercel (`vercel.json`: `installCommand: cd app && npm install`, `buildCommand: cd app && npm run build`, `outputDirectory: app/dist`).

## Команды на сервере (проверенные; писать владелице блоком `# 1. …`, см. CLAUDE.md п. 7)

Сервер: root@8314715-nw871204 (Timeweb). Здесь фиксируем реальные пути репозитория, имя службы, пользователя, логи и команды деплоя/диагностики этого проекта. Вносить только то, что подтверждено успешным выводом или взято из `deploy/`; на каждый новый путь или команду, которые оказались верными, — сразу запись сюда. Секреты не записывать.

Этот репозиторий на сервер не выкладывается: сайт собирается и хостится на Vercel (`vercel.json`: сборка `cd app && npm run build`, выдача `app/dist`). Команд для сервера пока нет. Как только появится деплой или служба — сразу записать сюда блоком в формате:

```bash
# 1. Забрать код
cd /opt/<репозиторий> && git pull
# 2. Перезапуск и проверка
systemctl restart <служба>
systemctl status <служба> --no-pager
journalctl -u <служба> -n 50 --no-pager
```

(имена в `<…>` подставить реальными при первой записи; в ответах владелице плейсхолдеры не оставлять).
