# Gaurav Joshi — Portfolio

Senior Software Developer portfolio, built with **Next.js 16, React 19, Tailwind CSS v4, and Motion**.

Canonical site: [https://gaurav-joshi.vercel.app/](https://gaurav-joshi.vercel.app/)

> Engineer who builds products, not just interfaces.

## Runtime and stack

Next.js 16 requires Node.js **20.9.0 or newer**. Use Node.js 24 for local development, matching CI and `.nvmrc`.

| Package | Lockfile version |
| --- | ---: |
| Next.js | 16.4.3 |
| React / React DOM | 19.3.0 |
| Tailwind CSS / Turbopack | 4.3.3 |
| Motion | 14.6.0 |
| lucide-react | 1.61.0 |
| react-icons | 5.7.0 |
| TypeScript | 5.9.3 |
| Node.js CI target | 24 |

## Run locally

```bash
npm ci
npm run dev      # http://localhost:3000 (Turbopack)
```

## Project notes

- Profile details and the official role are maintained in `src/data/profile.ts`; the experience timeline is in `src/data/experience.ts`.
- The résumé PDF is served from `public/Gaurav_Joshi_Resume.pdf`.
- Project previews use abstract `BrowserFrame` visuals rather than screenshots that imply unverified product UI.
- Project entries and their descriptions are maintained in `src/data/projects.ts`.
