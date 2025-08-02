# Image Assets Directory

This directory contains placeholder references for all the images used in the Rhythm Raga Academy website. Replace these placeholders with actual images when setting up the site.

## Required Images

### SEO & Social Media Images
- `og-image.jpg` (1200x630px) - Main Open Graph image for social sharing
- `home-og.jpg` (1200x630px) - Home page specific Open Graph image
- `about-og.jpg` (1200x630px) - About page specific Open Graph image
- `offerings-og.jpg` (1200x630px) - Offerings page specific Open Graph image
- `registration-og.jpg` (1200x630px) - Registration page specific Open Graph image
- `contact-og.jpg` (1200x630px) - Contact page specific Open Graph image
- `logo.png` (512x512px) - Academy logo for structured data
- `academy-hero.jpg` (1200x600px) - Main hero image for structured data

### Home Page
- `academy-interior.jpg` (800x300px) - Interior shot of the academy

### About Page
- `founder-priya-sharma.jpg` (400x400px) - Photo of the founder
- `instructor-priya.jpg` (150x150px) - Instructor profile photo
- `instructor-arjun.jpg` (150x150px) - Instructor profile photo
- `instructor-neha.jpg` (150x150px) - Instructor profile photo
- `instructor-raj.jpg` (150x150px) - Instructor profile photo
- `instructor-kavya.jpg` (150x150px) - Instructor profile photo
- `instructor-maya.jpg` (150x150px) - Instructor profile photo

### Offerings Page
- `indian-vocal-class.jpg` (400x400px) - Indian vocal music class
- `bollywood-dance-adults.jpg` (400x400px) - Adult Bollywood dance class
- `bollywood-dance-kids.jpg` (400x400px) - Kids Bollywood dance class
- `tabla-class.jpg` (400x400px) - Tabla learning session
- `guitar-lesson.jpg` (400x400px) - Guitar learning session
- `wedding-choreography.jpg` (400x400px) - Wedding dance choreography

## Image Guidelines

### Size Requirements
- **Hero/Banner images**: 1200x600px minimum
- **Program cards**: 400x400px
- **Instructor photos**: 150x150px (square, will be cropped to circle)
- **Gallery images**: 800x600px minimum

### Format Requirements
- **Format**: JPG or WebP preferred
- **Quality**: High quality, but optimized for web
- **File size**: Under 500KB per image

### Content Guidelines
- **Professional quality**: Well-lit, clear photos
- **Diverse representation**: Show students of different ages and backgrounds
- **Action shots**: Capture students actively learning and performing
- **Facility photos**: Clean, well-organized spaces

## Where to Add Images

1. **Replace placeholders**: Replace the placeholder image references in the code
2. **Sanity CMS**: Upload images through the Sanity Studio for dynamic content
3. **Static assets**: Place in this `/public/images/` directory for static references

## Image Optimization

All images will be automatically optimized by:
- **Next.js Image component**: Automatic WebP conversion and lazy loading
- **Sanity CDN**: Automatic image optimization and resizing
- **Vercel**: Edge caching for fast global delivery

Remember to update the `alt` text for all images to improve accessibility and SEO.