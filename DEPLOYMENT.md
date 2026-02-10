# Deployment Guide - Project Aatmanirbhar

This guide covers different deployment options for the Project Aatmanirbhar website.

## Quick Start - Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Production Build

Before deploying, test the production build locally:

```bash
# Create production build
npm run build

# Start production server
npm start

# Visit http://localhost:3000
```

## Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and offers seamless deployment.

**Steps:**

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**
   ```bash
   vercel
   ```

4. **Or deploy via GitHub**
   - Push code to GitHub
   - Import repository on Vercel dashboard
   - Click Deploy

**Features:**
- Automatic deployments on git push
- Preview deployments for branches
- Edge network CDN
- Built-in analytics
- Free SSL certificates

### 2. Netlify

**Steps:**

1. **Create `netlify.toml` in project root:**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Or via GitHub:**
   - Connect your repository
   - Configure build settings
   - Deploy

### 3. AWS Amplify

**Steps:**

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify:**
   ```bash
   amplify init
   ```

3. **Add hosting:**
   ```bash
   amplify add hosting
   ```

4. **Publish:**
   ```bash
   amplify publish
   ```

### 4. Docker Deployment

**Create `Dockerfile`:**

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

**Build and run:**
```bash
docker build -t aatmanirbhar-website .
docker run -p 3000:3000 aatmanirbhar-website
```

### 5. Traditional VPS (Ubuntu/Debian)

**Prerequisites:**
- VPS with Ubuntu 20.04+
- Node.js 18+ installed
- Nginx installed

**Steps:**

1. **Clone/Upload project to server**

2. **Install dependencies:**
   ```bash
   npm install
   npm run build
   ```

3. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "aatmanirbhar" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Environment Variables

If you add environment variables (e.g., for API keys), create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
EMAIL_SERVICE_API_KEY=your_api_key_here
```

**Important:** Never commit `.env.local` to version control!

For production deployments, add these variables in your hosting platform's dashboard.

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### General DNS Configuration
Add these records to your domain:

```
Type  Name  Value
A     @     [Your server IP]
CNAME www   [Your deployment URL]
```

## Performance Optimization

Before deploying to production:

1. **Optimize Images:**
   - Use Next.js Image component
   - Compress images
   - Use WebP format

2. **Enable Caching:**
   ```javascript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/:all*(svg|jpg|png)',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ];
     },
   };
   ```

3. **Add Analytics:**
   - Google Analytics
   - Vercel Analytics
   - Plausible (privacy-friendly)

4. **Monitor Performance:**
   - Use Lighthouse
   - Monitor Core Web Vitals
   - Set up error tracking (Sentry)

## Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Set security headers
- [ ] Sanitize form inputs
- [ ] Rate limit API endpoints
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Enable CORS properly
- [ ] Implement CSP headers

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Deployment Issues
- Check build logs
- Verify environment variables
- Ensure all dependencies are in package.json
- Test production build locally first

## Monitoring

Set up monitoring for:
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry, LogRocket)
- Analytics (Google Analytics, Plausible)
- Performance (Lighthouse CI, Web Vitals)

## Backup Strategy

1. **Code:** Use Git with remote repository
2. **Database:** If added later, set up automated backups
3. **Deployment:** Keep previous deployment versions

## Cost Estimates

### Free Tier Options
- **Vercel:** Free for personal projects, generous limits
- **Netlify:** 100GB bandwidth/month free
- **GitHub Pages:** Free (static hosting only)

### Paid Options
- **Vercel Pro:** $20/month (starts)
- **AWS:** Pay as you go (~$5-20/month for small sites)
- **DigitalOcean:** $5/month for basic VPS

## Support

For deployment help:
- Check official Next.js deployment docs
- Platform-specific documentation
- Community forums

---

Choose the deployment method that best fits your needs and expertise level. For most users, **Vercel** offers the easiest and most reliable deployment experience.
