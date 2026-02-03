# Deployment Guide - Hạt Xanh Website

## Prerequisites

- Node.js 18+ installed
- Git repository connected
- Vercel/Netlify account (recommended)

## Environment Variables

Create `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://hatxanh.vn
NEXT_PUBLIC_SITE_NAME=Hạt Xanh

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (Optional - for Newsletter)
EMAIL_SERVICE_API_KEY=your_api_key_here
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Production Deploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Self-Hosted (VPS/Cloud)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Use PM2 for process management:**
   ```bash
   npm i -g pm2
   pm2 start npm --name "hatxanh" -- start
   pm2 save
   pm2 startup
   ```

## Pre-Deployment Checklist

- [ ] Update environment variables
- [ ] Test build locally: `npm run build`
- [ ] Run linter: `npm run lint`
- [ ] Run tests: `npm test`
- [ ] Check all images are optimized
- [ ] Verify SEO metadata on all pages
- [ ] Test on mobile devices
- [ ] Update sitemap.ts with production URL
- [ ] Configure custom domain (if applicable)

## Post-Deployment

1. **Verify deployment:**
   - Check all pages load correctly
   - Test navigation
   - Verify images display
   - Test contact form
   - Check mobile responsiveness

2. **Setup monitoring:**
   - Google Analytics
   - Google Search Console
   - Vercel Analytics (if using Vercel)

3. **Performance:**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Optimize if needed

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

## Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Images Not Loading

- Verify image paths are correct
- Check Next.js Image configuration in `next.config.ts`
- Ensure images are in `public/` directory

### Environment Variables Not Working

- Prefix with `NEXT_PUBLIC_` for client-side access
- Restart dev server after changes
- Check `.env.local` is not committed to git

## Support

For deployment issues, contact: [email@hatxanh.vn](mailto:email@hatxanh.vn)
