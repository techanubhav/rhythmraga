# Deployment Guide

Complete guide for deploying Rhythm Raga Academy to production.

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Content added to Sanity CMS
- [ ] Google Sheets integration tested
- [ ] Forms tested locally
- [ ] All pages reviewed
- [ ] Images optimized
- [ ] Code committed to GitHub

## Vercel Deployment

### 1. Initial Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Keep default settings for Next.js

### 2. Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

**Sanity Variables:**
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_write_token
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Google Sheets Variables:**
```
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id
```

⚠️ **Important**: Make sure to include the quotes and newlines in the private key exactly as shown.

### 3. Deploy

1. Click "Deploy" in Vercel
2. Monitor deployment progress
3. Test the live site

### 4. Deploy Sanity Studio

```bash
npm run sanity:deploy
```

Choose a unique hostname (e.g., `rhythm-raga-cms`)

Your studio will be available at: `https://rhythm-raga-cms.sanity.studio`

## Custom Domain Setup

### 1. Add Domain in Vercel

1. Project Settings → Domains
2. Add your domain (e.g., `rhythmraga.com`)
3. Note the CNAME target

### 2. Configure DNS

**For most domain providers:**

1. Add CNAME record:
   - Name: `@` (or leave blank for root domain)
   - Value: `cname.vercel-dns.com`

2. Add CNAME for www:
   - Name: `www`
   - Value: `cname.vercel-dns.com`

**Popular providers:**
- **GoDaddy**: DNS Management → Add CNAME
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Cloudflare**: DNS → Add record

### 3. SSL Certificate

Vercel automatically provisions SSL certificates. Wait 24-48 hours for full propagation.

## Post-Deployment Testing

### 1. Functionality Tests

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display properly
- [ ] Forms submit successfully
- [ ] Mobile responsiveness
- [ ] Load speed (should be under 3 seconds)

### 2. Form Testing

1. **Registration Form**
   - Fill out completely
   - Submit form
   - Check Google Sheet for new row
   - Verify all data transferred correctly

2. **Contact Form**
   - Test with different subject options
   - Check Google Sheet for submission
   - Verify email formatting

### 3. CMS Testing

1. **Access Sanity Studio**
   - Visit your deployed studio URL
   - Log in successfully
   - Make a content change
   - Verify change appears on website

2. **Content Updates**
   - Edit home page content
   - Add new instructor
   - Modify program information
   - Check live site updates

## Performance Optimization

### 1. Image Optimization

Sanity automatically optimizes images, but ensure:
- Images are properly sized
- Alt text is provided
- WebP format when possible

### 2. Monitoring

Set up monitoring for:
- **Vercel Analytics**: Automatic performance monitoring
- **Google Analytics**: User behavior tracking
- **Uptime monitoring**: Service like UptimeRobot

### 3. SEO

- [ ] Meta tags configured
- [ ] Sitemap generated
- [ ] Google Search Console setup
- [ ] Schema markup for business info

## Maintenance

### Regular Tasks

1. **Monthly**
   - Check form submissions in Google Sheets
   - Review website performance
   - Update content as needed
   - Check for security updates

2. **Quarterly**
   - Update dependencies
   - Review and optimize images
   - Backup Sanity content
   - Test all functionality

### Content Updates

1. **Through Sanity Studio**
   - Text content updates
   - Image uploads
   - New program additions
   - Instructor profile updates

2. **Code Changes**
   - New features
   - Design updates
   - Bug fixes
   - Performance improvements

## Troubleshooting

### Common Deployment Issues

1. **Build Fails**
   ```
   Error: Environment variable not found
   ```
   **Solution**: Check all required environment variables are set in Vercel

2. **Forms Not Working**
   ```
   Error: 403 Forbidden (Google Sheets)
   ```
   **Solution**: Verify service account has access to the sheet

3. **Images Not Loading**
   ```
   Error: Invalid image URL
   ```
   **Solution**: Check Sanity CDN configuration and project ID

4. **Studio Not Accessible**
   ```
   Error: Project not found
   ```
   **Solution**: Verify Sanity project ID and deploy studio again

### Emergency Rollback

If issues occur after deployment:

1. **Vercel Rollback**
   - Go to Deployments tab
   - Click "..." on previous working deployment
   - Select "Promote to Production"

2. **Code Rollback**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Security

### Best Practices

1. **Environment Variables**
   - Never commit secrets to Git
   - Use strong API tokens
   - Regularly rotate credentials

2. **Access Control**
   - Limit Sanity studio access
   - Use read-only tokens where possible
   - Monitor access logs

3. **Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Regular vulnerability scans

## Backup Strategy

### Content Backup

1. **Sanity Content**
   ```bash
   # Export Sanity data
   sanity dataset export production backup.tar.gz
   ```

2. **Google Sheets**
   - Download sheets as CSV monthly
   - Store in secure location

### Code Backup

- Primary: GitHub repository
- Secondary: Local development backups
- Deployment: Vercel maintains deployment history

---

## Support Contacts

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Sanity Support**: [sanity.io/help](https://sanity.io/help)
- **Google Cloud Support**: [cloud.google.com/support](https://cloud.google.com/support)

For technical issues with this deployment, consult the main README.md troubleshooting section.