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
- **Run Command:** `npx vite preview --host 0.0.0.0 --port 5000`

## Recent Changes
- **2025-10-01:** Initial project import from GitHub to Replit
  - Installed Node.js dependencies
  - Configured workflow for development
  - Set up deployment for production
  - Verified application runs successfully
  - Adjusted home page statistics cards for better positioning and smaller size
  - Created comprehensive UserTypes page showcasing 6 user roles:
    * GauSakhi (Field Executive)
    * BiogasSangh (Cluster Manager)
    * ShuddhiDoot (Purification Unit)
    * UrjaVyapar (Sales & Inventory)
    * Admin Portal
    * Transporter
  - Added navigation link for User Types in header
  - Integrated stock images for each user type with gradient backgrounds
  - Removed "Our Journey" timeline section from About page for cleaner focus
  - Fixed z-index layering on About page to ensure footer visibility
  - Verified footer displays correctly on all pages (Home, How It Works, Benefits, User Types, About, Contact)

## Key Features
- Farmer registration and onboarding
- IoT-verified weighment system
- Same-day payment processing
- Local CBG (Compressed Biogas) production
- Success stories and testimonials
- Multi-language support (English/Hindi)
