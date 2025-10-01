# Saubhagya - Biogas Platform

## Project Overview
Saubhagya is a web platform connecting farmers with biogas facilities, promoting sustainable agriculture and clean energy. The platform enables farmers to sell cow dung for biogas production while earning fair payments.

**Technology Stack:**
- React 18 with TypeScript
- Vite (build tool)
- shadcn-ui (component library)
- Tailwind CSS (styling)
- React Router (navigation)

## Project Structure
```
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/        # shadcn-ui components
│   ├── pages/         # Route pages
│   ├── assets/        # Images and static assets
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── public/            # Static public assets
└── package.json       # Dependencies
```

## Development Setup
- **Runtime:** Node.js v20
- **Package Manager:** npm
- **Dev Server:** Vite on port 5000
- **Host Configuration:** 0.0.0.0 with allowedHosts enabled for Replit proxy

## Workflow Configuration
- **Workflow Name:** Start application
- **Command:** `npm run dev`
- **Port:** 5000 (frontend)
- **Output Type:** webview

## Deployment Configuration
- **Target:** autoscale (stateless frontend)
- **Build Command:** `npm run build`
- **Run Command:** `npx vite preview --host 0.0.0.0 --port`

## Recent Changes
- **2025-10-01:** Initial project import from GitHub to Replit
  - Installed Node.js dependencies
  - Configured workflow for development
  - Set up deployment for production
  - Verified application runs successfully

## Key Features
- Farmer registration and onboarding
- IoT-verified weighment system
- Same-day payment processing
- Local CBG (Compressed Biogas) production
- Success stories and testimonials
- Multi-language support (English/Hindi)
