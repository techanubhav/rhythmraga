# Rhythm Raga Academy - Project Structure

## 📁 Complete File Structure

```
rhythm-raga-academy/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                      # API Routes
│   │   ├── 📁 contact/
│   │   │   └── route.ts             # Contact form handler
│   │   └── 📁 register/
│   │       └── route.ts             # Registration form handler
│   ├── 📁 about/
│   │   ├── layout.tsx               # About page metadata
│   │   └── page.tsx                 # About Us page
│   ├── 📁 contact/
│   │   ├── layout.tsx               # Contact page metadata
│   │   └── page.tsx                 # Contact Us page
│   ├── 📁 offerings/
│   │   └── page.tsx                 # Programs & Offerings page
│   ├── 📁 registration/
│   │   ├── layout.tsx               # Registration page metadata
│   │   └── page.tsx                 # Student Registration page
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout + SEO metadata
│   ├── page.tsx                     # Home page with metadata
│   ├── robots.ts                    # SEO robots.txt generation
│   └── sitemap.ts                   # SEO sitemap generation
├── 📁 docs/                         # Documentation
│   ├── DEPLOYMENT.md                # Deployment guide
│   ├── SEO_GUIDE.md                 # SEO & meta tags documentation
│   └── SETUP_GUIDE.md               # Quick setup instructions
├── 📁 lib/                          # Utility libraries
│   └── sanity.ts                    # Sanity client configuration
├── 📁 public/                       # Static assets
│   └── 📁 images/
│       └── placeholder.md           # Image requirements guide
├── 📁 sanity/                       # Sanity CMS configuration
│   ├── 📁 schemas/                  # Content schemas
│   │   ├── aboutPage.ts
│   │   ├── gallery.ts
│   │   ├── homePage.ts
│   │   ├── index.ts                 # Schema exports
│   │   ├── instructor.ts
│   │   ├── offeringsPage.ts
│   │   ├── program.ts
│   │   └── testimonial.ts
│   └── sanity.config.ts             # Sanity studio configuration
├── env.example.txt                  # Environment variables template
├── next.config.js                   # Next.js configuration
├── package.json                     # Dependencies and scripts
├── PROJECT_STRUCTURE.md             # This file
├── README.md                        # Comprehensive setup guide
├── tsconfig.json                    # TypeScript configuration
└── vercel.json                      # Vercel deployment configuration
```

## 🎯 Key Components

### Frontend Pages
- **Home** (`/`) - Hero section, featured programs, academy overview
- **About** (`/about`) - Academy story, instructors, facilities
- **Offerings** (`/offerings`) - All programs with detailed descriptions
- **Registration** (`/registration`) - Student registration form
- **Contact** (`/contact`) - Contact form and information

### Backend Integration
- **Google Sheets API** - Form submissions automatically saved
- **Sanity CMS** - Dynamic content management
- **TypeScript** - Full type safety throughout

### Content Management
- **Programs Schema** - Manage all course offerings
- **Instructors Schema** - Staff profiles and information
- **Testimonials Schema** - Student reviews and feedback
- **Gallery Schema** - Photo management with categorization
- **Page Schemas** - Home, About, and Offerings page content

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp env.example.txt .env.local
   # Fill in your API keys and configuration
   ```

3. **Development**
   ```bash
   npm run dev          # Start Next.js development server
   npm run sanity:dev   # Start Sanity Studio
   ```

4. **Production**
   ```bash
   npm run build        # Build for production
   npm run sanity:deploy # Deploy Sanity Studio
   ```

## 📋 Features Implemented

### ✅ Website Features
- [x] Responsive design (mobile-first)
- [x] Comprehensive SEO optimization (meta tags, Open Graph, Twitter Cards, structured data)
- [x] Performance optimized with Next.js
- [x] TypeScript for type safety
- [x] Vanilla CSS (no external frameworks)
- [x] Automatic sitemap.xml generation
- [x] SEO-friendly robots.txt

### ✅ Content Management
- [x] Sanity CMS integration
- [x] Dynamic page content
- [x] Image optimization and CDN
- [x] Content schemas for all data types

### ✅ Form Integration
- [x] Student registration form
- [x] Contact form
- [x] Google Sheets API integration
- [x] Form validation and error handling

### ✅ Deployment Ready
- [x] Vercel configuration
- [x] Environment variables setup
- [x] Security headers
- [x] Performance optimization

## 🔧 Customization Guide

### Adding New Pages
1. Create page component in `/app/[page-name]/page.tsx`
2. Add navigation link in `/app/layout.tsx`
3. Create Sanity schema if dynamic content needed

### Modifying Styles
- Global styles: `/app/globals.css`
- Component-specific: Add styles in CSS variables section
- Color scheme: Modify CSS custom properties in `:root`

### Adding Form Fields
1. Update form component
2. Modify API route in `/app/api/`
3. Update Google Sheets headers
4. Add validation logic

### Content Updates
- Use Sanity Studio at `http://localhost:3333` (dev) or deployed URL
- All text content, images, and structured data managed through CMS
- No code changes needed for content updates

## 📖 Documentation

- **README.md** - Complete setup and usage guide
- **docs/SETUP_GUIDE.md** - Quick start instructions
- **docs/DEPLOYMENT.md** - Production deployment guide
- **PROJECT_STRUCTURE.md** - This overview file

## 🎨 Design System

### Colors
- **Primary**: #8B4513 (Saddle Brown) - Traditional music
- **Secondary**: #FF6B35 (Orange Red) - Energy and dance
- **Accent**: #FFD700 (Gold) - Premium feel
- **Background**: #F8F9FA (Light Gray)

### Typography
- **Font**: Arial (web-safe, universal)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height

### Layout
- **Container**: Max-width 1200px, centered
- **Grid**: CSS Grid for responsive layouts
- **Spacing**: Consistent rem-based spacing system

## 🔐 Security Features

- **Environment Variables** - Sensitive data protected
- **CORS Configuration** - API endpoint protection
- **Form Validation** - Client and server-side validation
- **Security Headers** - XSS and clickjacking protection

## 📈 Performance Features

- **Image Optimization** - Automatic WebP conversion and lazy loading
- **Code Splitting** - Automatic with Next.js App Router
- **CDN** - Global content delivery via Vercel and Sanity
- **Caching** - Intelligent caching strategies

---

**Project Status**: ✅ Complete and Ready for Deployment

All core features implemented, documented, and tested. Ready for production use with Rhythm Raga Academy.