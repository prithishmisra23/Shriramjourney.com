# Deployment & Performance Guide

This guide covers deploying Shriram Journey and optimizing performance for global scale.

## Deployment Platforms

### Netlify (Recommended)

Shriram Journey is optimized for Netlify deployment with automatic GitHub integration.

#### Setup
1. **Connect GitHub**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select repository
   - Authorize Netlify

2. **Configure Build Settings**
   ```
   Build command: pnpm build
   Publish directory: dist
   ```

3. **Environment Variables**
   - `VITE_API_URL`: (optional, for API calls)
   - Add AdSense account ID if needed

4. **Deploy**
   - Automatic deployment on `main` branch pushes
   - Preview deployments for pull requests
   - Rollback to previous deployments anytime

#### Netlify Functions (Serverless)
- Express API automatically wrapped
- `server/index.ts` deployed as Netlify Function
- Environment variables managed in Netlify UI
- No server maintenance required

#### Benefits
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Edge functions
- ✅ Form handling
- ✅ Analytics

### Alternative: Vercel

Vercel is also excellent for React apps:

```bash
npm install -g vercel
vercel
```

### Alternative: Self-Hosted

For on-premise deployment:

```bash
# Build
pnpm build

# Start production server
pnpm start

# Or with Docker
docker build -t shriram-journey .
docker run -p 3000:3000 shriram-journey
```

## Performance Optimization

### Image Optimization

#### Current Status
- Images served in WebP format via CDN
- Optimized sizes for different screens

#### Implementation Checklist
- [ ] Compress all images (use TinyPNG, ImageOptim)
- [ ] Convert to WebP format
- [ ] Generate AVIF versions for modern browsers
- [ ] Implement `srcset` for responsive images
- [ ] Add lazy loading with `loading="lazy"`

#### Example - Responsive Images

```jsx
// Current
<img src="/temple.jpg" alt="Temple" />

// Optimized
<picture>
  <source srcSet="/temple.avif" type="image/avif" />
  <source srcSet="/temple.webp" type="image/webp" />
  <img 
    src="/temple.jpg" 
    alt="Temple"
    loading="lazy"
    srcSet="
      /temple-small.webp 480w,
      /temple-medium.webp 800w,
      /temple-large.webp 1200w
    "
    sizes="(max-width: 600px) 480px,
           (max-width: 1000px) 800px,
           1200px"
  />
</picture>
```

### Code Splitting

React Router 6 enables automatic code splitting:

```jsx
// Lazy load page components
const Map = lazy(() => import("./pages/Map"));
const Timeline = lazy(() => import("./pages/Timeline"));

// Wrap with Suspense
<Suspense fallback={<Loading />}>
  <Route path="/map" element={<Map />} />
</Suspense>
```

### Bundle Optimization

```bash
# Analyze bundle size
npm install --save-dev @vite/plugin-visualizer
```

Add to `vite.config.ts`:
```typescript
import visualizer from "rollup-plugin-visualizer";

export default {
  plugins: [
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
};
```

### Caching Strategy

#### Static Assets (Long Cache)
```nginx
# .netlify/edge-functions or netlify.toml
Cache-Control: public, max-age=31536000, immutable
```

#### HTML (Short Cache)
```nginx
Cache-Control: public, max-age=3600
```

#### API Responses (Vary)
```
Cache-Control: public, max-age=300
Vary: Accept-Encoding
```

#### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/api/*"
  [headers.values]
    Cache-Control = "public, max-age=300"

[[redirects]]
  from = "/sitemap.xml"
  to = "/.netlify/redirects"
  status = 200
```

## Web Vitals & Monitoring

### Core Web Vitals

Monitor in Google Search Console:

1. **Largest Contentful Paint (LCP)** - Load performance
   - Target: < 2.5s
   - Optimize: Images, fonts, critical CSS

2. **First Input Delay (FID)** - Interactivity
   - Target: < 100ms
   - Optimize: JavaScript execution, main thread

3. **Cumulative Layout Shift (CLS)** - Visual stability
   - Target: < 0.1
   - Optimize: Image sizing, font loading

### Testing Tools
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [GTmetrix](https://gtmetrix.com)

### Local Testing
```bash
npm install -g lighthouse
lighthouse https://shriramjourney.com --view
```

## Environment Variables

### Production (.env.production)
```
VITE_API_URL=https://shriramjourney.com/api
VITE_GA_ID=G-XXXXXXXXXX
```

### Development (.env.development)
```
VITE_API_URL=http://localhost:5173/api
VITE_GA_ID=local
```

### Server (.env)
```
NODE_ENV=production
PORT=3000
```

## Monitoring & Analytics

### Google Analytics
- Already configured in `index.html`
- Track: pageviews, events, conversions
- Monitor: user behavior, traffic sources

### Error Tracking (Recommended)
Use [Sentry](https://sentry.io) for error monitoring:

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://YOUR_KEY@sentry.io/PROJECT_ID",
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

### Database Monitoring
- Use Netlify Analytics
- Monitor API response times
- Track serverless function duration
- Alert on errors

## Security Headers

Netlify automatically sets:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

Additional headers in `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-XSS-Protection = "1; mode=block"
    Content-Security-Policy = "default-src 'self' https:"
```

## Database Setup (Optional)

For future database-backed features:

### Supabase (Recommended)
```javascript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://YOUR_PROJECT.supabase.co",
  "YOUR_ANON_KEY"
);
```

### Neon (PostgreSQL)
```javascript
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
```

## CI/CD Pipeline

### GitHub Actions Setup

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "pnpm"
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run tests
        run: pnpm test
      
      - name: Type check
        run: pnpm typecheck
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: "./dist"
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
          enable-pull-request-comment: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Rollback & Recovery

### Quick Rollback
1. Go to Netlify Dashboard
2. Select "Deploys"
3. Find previous working deployment
4. Click "Restore this deployment"

### Branching Strategy
- `main` - Production (stable)
- `develop` - Staging (testing)
- `feature/*` - Feature branches (under development)

## Monitoring Checklist

### Daily
- [ ] Check error tracking (Sentry)
- [ ] Review page analytics
- [ ] Check uptime monitoring

### Weekly
- [ ] Review Core Web Vitals
- [ ] Check 404 errors
- [ ] Monitor API performance

### Monthly
- [ ] Full Lighthouse audit
- [ ] Performance report
- [ ] Traffic analysis
- [ ] Content performance

## Scaling & Growth Plan

### Phase 1 (0-100K users)
- ✅ Current setup adequate
- Static site generation works well
- CDN handles traffic

### Phase 2 (100K-1M users)
- Add caching layer (Redis)
- Database optimization
- Regional CDN deployment
- API rate limiting

### Phase 3 (1M+ users)
- Microservices architecture
- Database sharding
- Multi-region deployment
- Advanced caching strategies

## Cost Optimization

### Netlify
- Free tier: ~50K API calls/month
- Pro: $19/month for more
- Bandwidth: Unlimited

### Storage & Database (Future)
- Supabase: Pay as you grow ($5-50/month)
- AWS S3: $0.023 per GB
- CDN: Included in Netlify

### Estimated Monthly Cost
- Current (free tier): $0
- Phase 2: $50-100
- Phase 3: $500-2000

## Documentation

For detailed information:
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Web Vitals](https://web.dev/vitals)

## Troubleshooting

### Common Issues

**Build fails:**
```bash
# Clear cache and rebuild
rm -rf node_modules .next
pnpm install
pnpm build
```

**Slow performance:**
- Run Lighthouse audit
- Check image sizes
- Review bundle analysis
- Check for slow API calls

**Deploy not updating:**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check deployment logs
- Verify correct branch deployed

## Questions?

- 📖 Check Netlify documentation
- 💬 GitHub Discussions
- 📧 deploy@shriramjourney.com

---

**Last Updated**: January 2024  
**Next Review**: April 2024
