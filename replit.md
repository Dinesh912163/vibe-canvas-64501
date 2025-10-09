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
  - **Latest Updates - Complete UI Redesign (October 2025):**
    * **Home Page:**
      - Changed hero background to green biogas renewable energy facility image
      - Replaced icon-based cards in "Empowering Rural India" section with realistic images
      - Added images for: For Farmers (Indian farmers community), How It Works (biogas process), Platform Users (diverse users), Get Started (startup launch)
      - Removed icons from hero CTA buttons for cleaner design
    * **Benefits Page:**
      - Changed background to happy Indian farmers image (different from Contact page)
      - Maintained all testimonials and rupee notes visuals
    * **Contact Page:**
      - Replaced "How Can We Help" section icons with 4 realistic customer service images
      - Changed from icon-based cards to image-header cards with overlays
    * **Users Page (formerly User Types):**
      - Renamed page from "User Types" to "Users" throughout application
      - Added technology platform background image with dark overlay
      - Updated all 6 user role names to match official specification:
        * GauSakhi — Gau-sewa Executive (Field App)
        * BiogasSangh — Cluster Manager App
        * ShuddhiDoot — Purification Unit App
        * UrjaVyapar — Corporate Sales & Inventory App
        * Admin Portal (SAUBHAGYA Admin)
        * Transporter (Mobile App)
      - Updated features and descriptions to match specification document
      - Restored Hindi subtitles for all roles
    * **About Page:**
      - Replaced all 3 leadership team images with professional Indian business leaders
      - Maintained all core values and mission/vision sections
    * **Header Component:**
      - Replaced Saubhagya leaf icon logo with beautiful Indian cow image
      - Logo now displays as circular cow portrait
      - Updated navigation label from "User Types" to "Users"
    * All changes maintain responsive design, accessibility, and no TypeScript/LSP errors
  - **October 08, 2025 - Visual Improvements & Image Updates:**
    * **Home Page - About Section:**
      - Improved text brightness for better readability
      - Changed subtitle and all paragraph text from muted to brighter colors (text-foreground/90 and text-foreground/95)
      - Enhanced visual clarity while maintaining professional design
    * **Users Page:**
      - Replaced GauSakhi (Field App) image with appropriate Indian farmer working with smartphone
      - Replaced ShuddhiDoot (Purification Unit) image with Indian industrial worker at facility
      - All images now reflect authentic Indian context
    * **Contact Page:**
      - Updated "Call Us" image to feature Indian woman customer service representative
      - Better represents local support team and cultural context
    * Cleaned up unused old image files for better project organization
  
  - **October 09, 2025 - UI Cleanup & Content Organization:**
    * **All Page Modules:**
      - Removed all background images from hero sections across all 6 modules (Home, About, Benefits, HowItWorks, UserTypes, Contact)
      - Replaced with clean gradient backgrounds (from-primary/10 to-white) for modern, distraction-free design
      - Updated all text colors from white to foreground/muted-foreground for better readability on light backgrounds
      - Added introductory highlight sections at the beginning of each module with consistent styling:
        * Home: "Platform Highlights"
        * About: "About Saubhagya - At a Glance"
        * Benefits: "Key Benefits at a Glance"
        * HowItWorks: "Process Overview"
        * UserTypes: "Platform Highlights"
        * Contact: "Quick Contact Guide"
      - Each highlight section uses border-l-4 border-primary styling with gradient background
      - All sections contain relevant descriptive content instead of generic headings
    * **About Page:**
      - Removed entire leadership team section including images and code
      - Cleaned up all unused imports and variables
    * **Code Quality:**
      - Removed all unused background image imports from all modules
      - Passed architect review with no blocking issues
      - All remaining imports are actively used in the JSX
    * All changes maintain responsive design, accessibility, and no TypeScript/LSP errors
  
  - **October 09, 2025 - Enhanced Visibility & Indian Context Updates:**
    * **Users Page:**
      - Updated GauSakhi image to ant farming/vermiculture related image for better contextual relevance
    * **About Page - Core Values Section:**
      - Enhanced visibility with white background (bg-white/95) and better contrast
      - Updated subtitle to use primary color (text-primary) with semibold weight for better visibility
      - Changed all 4 core value icons to more realistic representations:
        * Community First: Users icon (replacing Heart)
        * Transparency: Eye icon (replacing Target)
        * Quality Assurance: ShieldCheck icon (replacing Award)
        * Sustainability: Sprout icon (replacing Globe)
      - Increased icon size and added vibrant gradient backgrounds (blue, green, purple, orange)
      - Enhanced card styling with border, gradient backgrounds, and larger text
    * **Benefits Page - Additional Advantages:**
      - Changed section background to white (bg-white/95) for better visibility
      - Updated subtitle to use primary color (text-primary) with semibold weight
      - Enhanced card styling with larger images, stronger borders, and gradient backgrounds
      - Replaced Quality Rewards image with Indian farmer receiving payment in rupees
      - Updated Guaranteed Payments image to show authentic Indian rupee currency notes
      - Increased font sizes and improved text contrast throughout section
    * **Benefits Page - Success Stories:**
      - Replaced all 3 testimonial images with unique authentic Indian farmer portraits
      - Raman Singh, Kamala Devi, and Suresh Kumar each have distinct clear images
      - All images now properly reflect Indian agricultural context
    * **Contact Page - Background Pattern:**
      - Applied About page background pattern: image only visible in hero section
      - Background image visible only for "Contact Us" hero section
      - All content sections (Get In Touch, How Can We Help, FAQs) now have white background (bg-white/95)
      - Updated text colors from white to dark (text-foreground/text-muted-foreground) for better readability on white sections
      - Maintains consistent professional design pattern across About and Contact pages
    * All changes maintain responsive design and accessibility standards
  
  - **October 09, 2025 - Additional Image Updates:**
    * **Benefits Page - Success Stories:**
      - Updated testimonial images for Raman Singh, Kamala Devi, and Suresh Kumar
      - Replaced with authentic Indian farmer portrait images for better representation
      - Further refined with happy smiling Indian male farmer portraits for more authentic representation
      - Removed all non-Indian imagery to ensure cultural authenticity
    * **How It Works Page - Additional Benefits:**
      - Updated Secure Payments image to show Indian rupee currency/payment context
      - Better reflects local payment methods and Indian financial context
  
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
