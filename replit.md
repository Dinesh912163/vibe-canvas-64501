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
- **2025-10-01:** Fresh GitHub import to Replit (latest setup)
  - Installed Node.js v20 runtime
  - Installed all npm dependencies (381 packages)
  - Verified Vite configuration for Replit environment:
    * Host: 0.0.0.0 (required for Replit proxy)
    * Port: 5000 (frontend)
    * allowedHosts: true (required for iframe preview)
    * HMR clientPort: 443 (for hot module replacement)
  - Confirmed .gitignore includes node_modules
  - Configured workflow: "Start application" running `npm run dev`
  - Set up autoscale deployment with build and preview commands
  - Tested application successfully - Vite server running on port 5000
  - All LSP diagnostics resolved - no TypeScript errors
  - Fixed footer visibility across all pages by adjusting z-index layers:
    * Added z-20 to Footer component for proper stacking
    * Updated fixed background layers on all pages to use -z-10 and pointer-events-none
    * Footer now displays correctly on Home, About, Benefits, How It Works, Contact, and User Types pages
  - Enhanced Home page design:
    * Changed background to green biogas/renewable energy themed image
    * Made statistics cards smaller and more compact (reduced padding and font sizes)
    * Renamed "User Types" section to "Platform Users" with appropriate icon (UserCog)
    * Changed layout to 4-column grid including: For Farmers, How It Works, Platform Users, Get Started
    * All cards now have consistent styling with hover effects
  
- **Previous work (imported from GitHub):**
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
