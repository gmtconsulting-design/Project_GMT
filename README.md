# GMT Consulting Website

A professional corporate website for **GrowMore Technocrats Consulting LLP (GMT)** - a leading technology consulting firm specializing in ERP advisory, CRM solutions, HRMS implementation, and business transformation.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

The website will be available at `http://localhost:3000`

## Tech Stack

- **Framework**: Next.js 15.5.14
- **Language**: TypeScript
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 4.2.0
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

### Key Dependencies

- **UI/UX**: next-themes, embla-carousel-react, react-day-picker, recharts
- **Forms**: react-hook-form, zod, @hookform/resolvers, sonner (notifications)
- **Email**: nodemailer
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Project Structure

```
GMT/
├── app/                          # Next.js App Router (pages)
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── contact/
│   │   ├── page.tsx             # Contact page (server component)
│   │   └── contact-form.tsx     # Contact form (client component)
│   ├── industries/
│   │   └── page.tsx             # Industries page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── solutions/
│   │   └── page.tsx             # Solutions page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint
│   ├── layout.tsx               # Root layout with fonts & analytics
│   └── page.tsx                # Home page
├── components/                   # Reusable components
│   ├── navbar.tsx              # Navigation bar with mobile menu
│   ├── hero.tsx                # Hero section with call-to-action
│   ├── features.tsx            # Features/Services grid
│   ├── how-it-works.tsx        # Process section
│   ├── testimonials.tsx        # Client testimonials
│   ├── cta.tsx                # Call-to-action section
│   ├── footer.tsx              # Footer
│   ├── theme-provider.tsx      # Theme context wrapper
│   ├── mega-menu.tsx           # Solutions mega menu
│   ├── industries-mega-menu.tsx
│   ├── solutions-mega-menu.tsx
│   └── ui/                    # shadcn/ui components (Radix UI)
├── hooks/                       # Custom React hooks
│   ├── use-toast.ts           # Toast hook
│   └── use-mobile.ts           # Mobile detection hook
├── lib/
│   ├── utils.ts               # Utility functions (cn, etc.)
│   ├── validate-email.ts      # Email validation
│   ├── validate-phone.ts      # Phone validation
│   └── validate-message-length.ts
├── styles/
│   └── globals.css            # Global styles & CSS variables
├── public/                     # Static assets
│   ├── logo.svg
│   ├── GMT_Logo1.jpeg
│   ├── hero-illustration.svg
│   ├── consulting-illustration.svg
│   ├── team-collaboration.svg
│   ├── apple-icon.png
│   └── icons (favicon, etc.)
├── package.json
├── tsconfig.json
├── next.config.mjs
├── amplify.yml                # AWS Amplify deployment config
└── .gitignore
```

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, features, testimonials |
| `/about` | About Us | Company info, mission, vision, values |
| `/services` | Services | ERP, CRM, HRMS, Business Consulting services |
| `/solutions` | Solutions | Detailed solutions with benefits & features |
| `/industries` | Industries | Manufacturing, Retail, Healthcare, Finance, etc. |
| `/contact` | Contact | Contact form with validation, contact info |

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme support (`next-themes`)
- ✅ SEO optimized with metadata
- ✅ Contact form with client-side validation
- ✅ Contact form API endpoint (`/api/contact`) with nodemailer
- ✅ Professional corporate design
- ✅ Optimized loading with dynamic imports
- ✅ CTA buttons on all pages
- ✅ Custom logo integration
- ✅ Form validation (email, phone, message length)

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Contact form submission handler |

### Environment Variables (for Contact API)

Create a `.env.local` file with the following:

```bash
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
SMTP_FROM=your-email@example.com
CONTACT_RECEIVER_EMAIL=receiver@example.com
```

## For Beginners - Understanding This Project

This project uses a modern web development stack:

- **Next.js** - React framework with file-based routing. Each folder in `app/` creates a route (e.g., `app/about/page.tsx` → `/about`)
- **TypeScript** - Adds type safety to JavaScript, catching errors before runtime
- **Tailwind CSS** - Utility-first CSS framework where styles are applied directly in HTML using classes like `flex`, `bg-blue-500`, `text-center`
- **shadcn/ui** - Pre-built accessible components (buttons, cards, forms) built on Radix UI primitives

**Key Concepts:**
- **Server Components** (default) - Run on the server, can't use hooks like `useState`
- **Client Components** - Need `"use client"` at the top, run in the browser with interactivity
- **Dynamic Imports** - Load components only when needed for better performance
- **Custom Hooks** - Reusable logic in `hooks/` (e.g., `use-toast.ts`, `use-mobile.ts`)

## Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Services Offered

1. **ERP Advisory** - Enterprise Resource Planning selection, implementation, and optimization
2. **CRM Solutions** - Customer relationship management for enhanced engagement
3. **HRMS Implementation** - Human resource management systems automation
4. **Business Consulting** - Strategic transformation and process optimization
5. **Cloud Solutions** - Cloud migration and infrastructure
6. **IT Support** - 24/7 technical support and maintenance

## Design System

### Colors
- Primary: `#03499e` (Corporate Blue)
- Background: White/light/dark mode variants
- Text: Dark gray (`#1a1a1a`) on light, light on dark

### Typography
- Headings: Space Grotesk
- Body: Inter

## License

Copyright © 2026 GrowMore Technocrats Consulting LLP. All rights reserved.

## Contact

- **Email**: head.gmtconsulting@gmail.com
- **Phone**: +91 93720 80019
- **Location**: Mumbai, Maharashtra, India

---

Built with Next.js + Tailwind CSS + shadcn/ui