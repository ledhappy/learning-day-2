# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

Учебный проект "Day 2" — практика Tailwind v4 и shadcn/ui на Next.js 16 App Router. Контент главной — лендинг бренда Geberich (нутрицевтики, маркетплейсы РФ). Деплой: Vercel из `main` репо `ledhappy/learning-day-2`.

## Commands

- `npm run dev` — dev server (Turbopack) на `http://localhost:3000`
- `npm run build` — production build с TS-проверкой
- `npm run lint` — ESLint (`eslint-config-next` core-web-vitals + typescript)
- Тестов нет — `test` script не определён, фреймворк не настроен

## Stack

- Next.js **16.2.4** (App Router, Turbopack по умолчанию)
- React 19.2
- Tailwind CSS **v4** через `@tailwindcss/postcss` — без `tailwind.config.*`, токены живут в CSS
- shadcn/ui style `radix-nova`, base color `neutral`, иконки `lucide-react`
- TypeScript strict, alias `@/*` → корень

## Architecture

- `app/` — App Router: `layout.tsx` (Geist + metadata), `page.tsx` (главная), `globals.css` (тема)
- `components/` — секционные компоненты страницы (`site-header`, `hero`, `feature-cards`, `site-footer`)
- `components/ui/` — shadcn-примитивы; добавлять через `npx shadcn@latest add <name>`
- `lib/utils.ts` — `cn()` для классов
- `components.json` — конфиг shadcn, руками не править

## Theming

- Без `tailwind.config.*`. Tailwind v4 читает токены из `app/globals.css`:
  - CSS-переменные определены в `:root` и `.dark` (цвета в oklch)
  - Внутри `@theme inline { ... }` они мапятся в Tailwind-токены (`--color-foo: var(--foo)`)
- Чтобы добавить новый цвет: сначала переменная в `:root`/`.dark`, затем строка в `@theme inline`.

## Quirks worth knowing

- `Button` `size="lg"` в этой версии shadcn визуально почти равен `default` (`h-9` vs `h-8`). Для крупных CTA добавляй кастомные классы: `className="h-12 px-6 text-base"`.
- `Card` использует `ring-1 ring-foreground/10` вместо `border`. Не накидывай `border` сверху без причины.
- `app/layout.tsx` ставит `min-h-full flex flex-col` на `<body>` → структура страницы должна быть `<Header />` + `<main className="flex-1">` + `<Footer />`, иначе footer не прижмётся к низу.

## When in doubt about Next 16 APIs

В `node_modules/next/dist/docs/` лежит локальная копия документации этой ровно установленной версии Next. Это точнее, чем общие воспоминания об API — особенно для async APIs, кэширования, конфига. Лезь туда при сомнениях.

## Commits

Conventional Commits: `<type>: <description>` (feat/fix/chore/docs/refactor/style/test). Пример: `feat: replace default page with Geberich landing`.

## Note on AGENTS.md

В корне лежит `AGENTS.md` с предупреждением "this is NOT the Next.js you know". Стек — обычный Next 16.2.4, фраза оставлена как шаблонная заглушка. Полезное зерно из неё — действительно сверяться с локальными доками в `node_modules/next/dist/docs/` для незнакомых API.
