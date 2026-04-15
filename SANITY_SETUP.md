# Sanity CMS Setup (GeorgiaUSA)

## 1) Configure environment variables

Copy `.env.example` to `.env` and set your real Sanity values:

```bash
cp .env.example .env
```

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

> The frontend uses `import.meta.env` values from `.env`.

## 2) Run local app and studio

```bash
npm install
npm run dev
npm run sanity
```

- Frontend: `http://localhost:5173`
- Sanity Studio: `http://localhost:3333`

## 3) Deploy notes

- Netlify build command: `npm run build`
- Netlify publish directory: `dist`
- SPA redirect is configured in `netlify.toml`

## 4) Misconfiguration behavior

If `VITE_SANITY_PROJECT_ID` is missing, the UI will not crash.
It renders a clear warning message and safely returns empty content lists.
