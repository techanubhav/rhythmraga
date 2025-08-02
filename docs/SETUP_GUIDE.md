# Quick Setup Guide

This is a condensed version of the setup instructions for getting Rhythm Raga Academy website up and running quickly.

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Google Account (for Sheets)
- [ ] Sanity.io account
- [ ] Vercel account (for deployment)

## Step-by-Step Setup

### 1. Project Setup (5 minutes)

```bash
# Clone and install
git clone <your-repo>
cd rhythm-raga-academy
npm install

# Copy environment template
cp env.example.txt .env.local
```

### 2. Sanity CMS Setup (15 minutes)

1. **Create Sanity Project**
   - Go to [sanity.io](https://sanity.io)
   - Create new project → "Clean project"
   - Note Project ID and Dataset

2. **Generate API Token**
   - Project Settings → API → Add Token
   - Select "Write" permissions
   - Copy token

3. **Update .env.local**
   ```bash
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### 3. Google Sheets Setup (20 minutes)

1. **Create Google Cloud Project**
   - [Google Cloud Console](https://console.cloud.google.com/)
   - New Project → Enable Sheets API

2. **Service Account**
   - IAM & Admin → Service Accounts → Create
   - Generate JSON key
   - Copy client_email and private_key

3. **Create Google Sheet**
   - New sheet: "Rhythm Raga - Registrations"
   - Two tabs: "Registrations" and "Contact"
   - Add headers (see main README)
   - Share with service account email

4. **Update .env.local**
   ```bash
   GOOGLE_SHEETS_CLIENT_EMAIL=service@project.iam.gserviceaccount.com
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=sheet_id_from_url
   ```

### 4. Run Development (2 minutes)

```bash
# Terminal 1: Next.js
npm run dev

# Terminal 2: Sanity Studio
npm run sanity:dev
```

**Access:**
- Website: http://localhost:3000
- Sanity Studio: http://localhost:3333

### 5. Add Initial Content (30 minutes)

In Sanity Studio:

1. **Home Page** → Add hero content
2. **Instructors** → Create instructor profiles
3. **Programs** → Add all 6 programs
4. **About Page** → Fill story and mission

### 6. Deploy to Vercel (10 minutes)

```bash
# Push to GitHub
git add .
git commit -m "Initial setup"
git push origin main

# Deploy Studio
npm run sanity:deploy
```

1. Connect GitHub repo to Vercel
2. Add environment variables
3. Deploy

## Common Issues

- **Build errors**: Check all environment variables are set
- **Forms not working**: Verify Google Sheets permissions
- **Content not loading**: Confirm Sanity API token has write access

## Quick Test Checklist

- [ ] Website loads at localhost:3000
- [ ] Sanity Studio accessible at localhost:3333
- [ ] Can create content in Sanity
- [ ] Registration form submits to Google Sheets
- [ ] Contact form submits to Google Sheets
- [ ] All pages render without errors

## Next Steps

1. Add real content to Sanity CMS
2. Upload actual photos
3. Configure custom domain
4. Set up analytics (optional)

For detailed instructions, see the main README.md file.