# Deployment Guide — Folklor Kawah Putih

## Prerequisites

1. Vercel account (free tier works)
2. GitHub repository connected to Vercel

## Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository: `ArifSanPinim09/folklor-kawah-putih-`
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
4. Click "Deploy"
5. Wait for deployment to complete
6. Copy the deployment URL (e.g., `https://folklor-kawah-putih.vercel.app`)

### Option 2: Via Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Generate QR Code

After deployment, generate a QR code:

```bash
# Install dependencies (if not already)
npm install

# Generate QR code
node scripts/generate-qr.js https://folklor-kawah-putih.vercel.app
```

The QR code will be saved to `public/qr-code.png`.

## Post-Deployment Checklist

- [ ] Website loads correctly on mobile
- [ ] All pages are accessible via navigation
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] QR code points to correct URL
- [ ] Test on actual mobile device via QR code

## Custom Domain (Optional)

To use a custom domain:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `folklor-kawahputih.id`)
3. Follow DNS configuration instructions
4. Update QR code with new domain

## Troubleshooting

### Build Fails
- Check TypeScript errors: `npm run build`
- Ensure all dependencies are installed: `npm install`

### Images Not Loading
- Verify images exist in `public/images/`
- Check image paths in `lib/image-mapping.ts`

### Animations Not Working
- Ensure `framer-motion` is installed
- Check browser console for errors
- Verify `prefers-reduced-motion` settings

## Performance Tips

1. Images are already optimized with `next/image`
2. Fonts are loaded with `font-display: swap`
3. Animations respect `prefers-reduced-motion`
4. Static pages are pre-rendered for fast loading
