<!--
GitHub Repository Description (≤150 chars):
🎓 Portfolio MIT modern untuk riset AI, CS, data, dan rekayasa software dengan tampilan akademik profesional.
-->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:8A1538,50:111827,100:0EA5E9&text=MIT%20University%20Portfolio&fontColor=FFFFFF&fontSize=42&fontAlignY=38&desc=Academic%20Research%20Portfolio%20%7C%20AI%20%7C%20Computer%20Science%20%7C%20Data%20Systems&descAlignY=58&animation=fadeIn" alt="MIT University Portfolio Header" />

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#tech-stack)
[![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=node.js&logoColor=white)](#tech-stack)
[![pnpm](https://img.shields.io/badge/pnpm-workspace-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](#run-locally)
[![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](#license)

</div>

---

## Overview

**MIT University Portfolio** is a modern academic portfolio website concept designed to present research readiness, technical documentation, and applied software engineering work in a clean, professional, and dynamic format. The repository is structured as a TypeScript workspace with a dedicated portfolio area, API server, shared libraries, and documentation-friendly assets.

This project is suitable for showcasing academic goals, AI/data research interests, software engineering capabilities, and structured portfolio evidence for admissions, scholarship preparation, or professional review.

> **Note:** This is an independent portfolio project. It is not an official MIT website and is not affiliated with Massachusetts Institute of Technology.

---

## Key Features

- **Modern academic landing page**
  - Clean hero section for academic identity and research direction.
  - Professional layout suitable for portfolio, admissions, and reviewer navigation.
  - Responsive structure for desktop, tablet, and mobile screens.

- **Research and project showcase**
  - Sections for AI, computer science, data systems, and software engineering projects.
  - Space for technical reports, project summaries, screenshots, and downloadable documents.
  - Organized presentation for reviewer-friendly academic evaluation.

- **Workspace-based architecture**
  - `artifacts/mit-portfolio` for the portfolio application.
  - `artifacts/api-server` for backend/API support.
  - `lib/` packages for shared API, database, validation, and generated client utilities.
  - `scripts/` for automation and build-related helpers.

- **Professional README structure**
  - Clear run commands.
  - Repository map.
  - Suggested topics.
  - Safe public/private document guidance.

---

## Tech Stack

| Area | Technology |
|---|---|
| Language | TypeScript |
| Runtime | Node.js 24 |
| Package Manager | pnpm workspace |
| Backend | Express 5 |
| Database Layer | PostgreSQL + Drizzle ORM |
| Validation | Zod / drizzle-zod |
| API Tooling | OpenAPI + Orval |
| Build Tools | TypeScript, esbuild |
| Formatting | Prettier |

---

## Project Structure

```txt
mit-university/
├── artifacts/
│   ├── api-server/
│   ├── mit-portfolio/
│   └── mockup-sandbox/
├── attached_assets/
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
├── scripts/
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── replit.md
```

---

## Run Locally

```bash
pnpm install
pnpm run typecheck
pnpm run build
```

Run the portfolio app:

```bash
pnpm --filter @workspace/mit-portfolio run dev
```

Run the API server:

```bash
pnpm --filter @workspace/api-server run dev
```

---

## Environment Variables

Create a `.env` file only when backend/database features are used.

```env
DATABASE_URL=your_postgres_connection_string
```

Do not commit real credentials, private IDs, passport data, transcript data, or recruiter-only files into a public repository.

---

## Preview

Add screenshots or demo assets inside `attached_assets/` or a dedicated `docs/preview/` folder.

```txt
preview/
├── desktop-home.png
├── mobile-home.png
├── research-section.png
└── document-center.png
```

Recommended README preview section:

```md
![Desktop Preview](./attached_assets/desktop-home.png)
![Mobile Preview](./attached_assets/mobile-home.png)
```

---

## Suggested GitHub Topics

```txt
portfolio
academic-portfolio
mit
computer-science
artificial-intelligence
data-systems
typescript
nodejs
pnpm
research-portfolio
```

---

## Roadmap

- [ ] Add final desktop and mobile screenshots.
- [ ] Add live demo link after deployment.
- [ ] Add project cards for AI, CS, data, and software engineering work.
- [ ] Add public-safe documentation downloads.
- [ ] Add accessibility review for images, headings, contrast, and keyboard navigation.

---

## License

This repository uses the MIT License unless another license file is added later.

---

<div align="center">

**Built as a clean, modern, and professional academic portfolio project.**

</div>
