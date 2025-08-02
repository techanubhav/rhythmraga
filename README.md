# Rhythm Raga Academy - Website & CMS

A comprehensive website and content management system for Rhythm Raga Music & Dance Academy, built with Next.js, Sanity CMS, and deployed on Vercel.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Vanilla CSS with responsive design
- **CMS**: Sanity CMS for content management
- **Hosting**: Vercel with global CDN
- **Forms**: Google Sheets API integration
- **Domain**: Custom domain mapping via Vercel

## 📋 Features

### Website Pages
- **Home Page**: Hero section, featured programs, academy overview
- **About Us**: Academy story, mission, instructors, facilities
- **Offerings**: Detailed program information (Indian Vocal, Bollywood Dance, Tabla, Guitar, Wedding Choreography)
- **Student Registration**: Google Sheets integration for form submissions
- **Contact Us**: Contact form, location, FAQ

### Content Management
- **Dynamic Content**: All page content managed through Sanity CMS
- **Program Management**: Add/edit programs with pricing, descriptions, images
- **Instructor Profiles**: Manage instructor information and photos
- **Gallery**: Photo management with categorization
- **Testimonials**: Student testimonial management

### Technical Features
- **Responsive Design**: Mobile-first design approach
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Optimized images, efficient loading
- **Form Integration**: Google Sheets for lead capture
- **TypeScript**: Full type safety
- **Social Media Ready**: Rich sharing cards for all platforms

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git
- Google Account (for Sheets API)
- Sanity account

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd rhythm-raga-academy
npm install
```

### 2. Environment Setup

Copy the environment template:
```bash
cp env.example.txt .env.local
```

Fill in your environment variables (see detailed setup below).

### 3. Set Up Sanity CMS

#### Create Sanity Project
1. Sign up at [sanity.io](https://sanity.io)
2. Create a new project
3. Choose "Clean project with no predefined schemas"
4. Note your **Project ID** and **Dataset** (usually "production")

#### Generate API Token
1. Go to your Sanity project dashboard
2. Navigate to "Settings" → "API"
3. Add new token with "Write" permissions
4. Copy the token

#### Update Environment Variables
```bash
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Set Up Google Sheets Integration

#### Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API

#### Create Service Account
1. Go to "IAM & Admin" → "Service Accounts"
2. Click "Create Service Account"
3. Fill in details and create
4. Click on your service account
5. Go to "Keys" tab → "Add Key" → "Create new key"
6. Choose JSON format and download

#### Create Google Sheet
1. Create a new Google Sheet
2. Rename it to "Rhythm Raga - Registrations"
3. Create two worksheets: "Registrations" and "Contact"

#### Set Up Sheet Headers

**Registrations Sheet (A1:O1):**
```
Timestamp | First Name | Last Name | Email | Phone | Age | Program | Experience | Preferred Schedule | Emergency Contact | Emergency Phone | Medical Conditions | Hear About Us | Additional Notes | Status
```

**Contact Sheet (A1:G1):**
```
Timestamp | Name | Email | Phone | Subject | Message | Status
```

#### Share Sheet with Service Account
1. Copy the service account email from your JSON file
2. Share your Google Sheet with this email (Editor permissions)
3. Copy the Sheet ID from the URL
4. Update environment variables:

```bash
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id_from_url
```

### 5. Run Development Environment

Start the Next.js development server:
```bash
npm run dev
```

Start the Sanity Studio (in a new terminal):
```bash
npm run sanity:dev
```

Visit:
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3333

## 📝 Content Creation Guide

### Setting Up Initial Content

1. **Access Sanity Studio**
   - Open http://localhost:3333
   - Sign in with your Sanity account

2. **Create Home Page Content**
   - Click "Home Page" in the sidebar
   - Add hero title and subtitle
   - Upload hero background image
   - Fill in about preview section
   - Save the document

3. **Add Instructors**
   - Click "Instructors" in the sidebar
   - Click "Create new Instructor"
   - Fill in all details:
     - Name and professional title
     - Biography (short and long)
     - Profile photo
     - Specialties and experience
     - Education and achievements
   - Mark as "Active" and "Featured" if desired
   - Publish the instructor

4. **Create Programs**
   - Click "Programs" in the sidebar
   - Create each program:
     - **Indian Vocal Music**
     - **Bollywood Dance - Adults**
     - **Bollywood Dance - Kids**
     - **Tabla**
     - **Guitar**
     - **Wedding Choreography**
   - For each program:
     - Add name and description
     - Generate URL slug
     - Upload program image
     - Set category (Music/Dance/Special)
     - Add age groups and skill levels
     - List learning outcomes
     - Add pricing options
     - Assign primary instructor
     - Mark as active and featured if desired

5. **Configure About Page**
   - Click "About Page"
   - Fill in our story section
   - Add mission and vision statements
   - Select featured instructors
   - Add achievements
   - Configure facilities information

6. **Set Up Offerings Page**
   - Click "Offerings Page"
   - Arrange programs in desired order
   - Add additional information cards
   - Configure call-to-action section

### Adding New Content

#### Adding a New Program
1. Go to Programs in Sanity Studio
2. Click "Create new Program"
3. Fill in all required fields
4. Add pricing tiers if applicable
5. Assign an instructor
6. Upload a relevant image
7. Publish the program

#### Adding Testimonials
1. Go to Testimonials
2. Click "Create new Testimonial"
3. Add student/parent information
4. Link to relevant program
5. Set rating (1-5 stars)
6. Mark as featured if desired

#### Managing Gallery
1. Go to Gallery
2. Upload new photos/videos
3. Categorize appropriately
4. Add tags for easy searching
5. Link to relevant programs

## 🚀 Deployment Guide

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables in Vercel dashboard
   - Deploy

3. **Environment Variables in Vercel**
   Go to your Vercel project dashboard → Settings → Environment Variables
   
   Add all variables from your `.env.local` file:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`

4. **Deploy Sanity Studio**
   ```bash
   npm run sanity:deploy
   ```
   
   Choose a studio hostname (e.g., `rhythm-raga-studio`)
   Your studio will be available at: `https://rhythm-raga-studio.sanity.studio`

### Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to your project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Configure DNS**
   - Add CNAME record pointing to your Vercel deployment
   - Wait for propagation (may take up to 24 hours)

## 🔧 Maintenance & Updates

### Regular Tasks

1. **Content Updates**
   - Update program information seasonally
   - Add new instructor profiles
   - Upload recent photos to gallery
   - Collect and add new testimonials

2. **Technical Maintenance**
   - Keep dependencies updated
   - Monitor Google Sheets for new submissions
   - Review and respond to contact form submissions
   - Backup important content from Sanity

### Adding New Features

1. **New Page**
   - Create new schema in `/sanity/schemas/`
   - Add to schema index
   - Create page component in `/app/`
   - Update navigation if needed

2. **New Form Field**
   - Update API route in `/app/api/`
   - Modify form component
   - Update Google Sheet headers
   - Test submission flow

## 📞 Support & Troubleshooting

### Common Issues

1. **Forms Not Submitting**
   - Check Google Sheets API credentials
   - Verify sheet permissions
   - Check browser console for errors

2. **Content Not Updating**
   - Verify Sanity API token permissions
   - Check environment variables
   - Clear browser cache

3. **Images Not Loading**
   - Verify Sanity CDN configuration
   - Check image optimization settings
   - Ensure proper image formats

### Getting Help

- **Sanity Documentation**: [sanity.io/docs](https://sanity.io/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)

## 📄 License

This project is proprietary software for Rhythm Raga Academy. All rights reserved.

---

**Built with ❤️ for Rhythm Raga Academy**

For technical support or questions, please contact the development team.
