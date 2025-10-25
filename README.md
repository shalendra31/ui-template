# ui-template (TypeScript, Company UI enforced)

Production-ready starter to check in to Git:

- Server: Express + TypeScript with mock endpoints
- Client: React + Vite + TypeScript
- **Company UI enforcement** via `company-ui` adapter that re-exports symbols from your internal package
- Local CSS only (no CDNs). Tables show borders by default.
- Pages: Dashboard, Service Inventory, Alerts, Tickets, Topology (each with list + detail)
- Monorepo using npm workspaces

## Prerequisites
- Node 18+ and npm

## Install & Run
```bash
npm install
npm --workspace server install
npm --workspace client install
npm run dev
# UI: http://localhost:5173
# API: http://localhost:4000/api/health
```

## Company UI adapter
All UI components must be imported from:
```ts
import { Button, Table, Badge, Card, Header, Sidebar, Footer, LayoutShell } from 'company-ui'
```
The adapter at `client/src/company-ui/index.ts` re-exports from your internal package.
Update the dependency name and version in `client/package.json` if needed (defaults to `@yourco/ui-kit`).

## Git init (optional)
```bash
git init
git add .
git commit -m "chore: seed ui-template (ts + company ui)"
```

## Build
```bash
npm run build
npm start  # starts API only; serve UI from client/dist with any static server
```

## Notes
- Vite dev server proxies `/api/*` to `http://localhost:4000`.
- No external CSS frameworks or fonts used.
