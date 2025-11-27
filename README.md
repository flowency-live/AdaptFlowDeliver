# Adapt Flow Deliver Consultancy Ltd - Website

Professional consultancy website for Adapt Flow Deliver, a delivery transformation consultancy founded by Rebecca Forrest.

## Brand Colors

- **Primary Turquoise:** `#0891b2` (trustworthy, professional)
- **Secondary Blue:** `#0c4a6e` (authority, depth)
- **Accent Turquoise:** `#67e8f9` (highlights, CTAs)

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **TypeScript:** Yes
- **Deployment:** AWS Amplify

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

## Deployment to AWS Amplify

### Option 1: Deploy from GitHub (Recommended)

1. Push this repository to GitHub
2. Log in to AWS Amplify Console
3. Click "New app" > "Host web app"
4. Connect your GitHub repository
5. Amplify will auto-detect Next.js and configure build settings
6. Click "Save and deploy"

**Build Settings (auto-detected):**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Option 2: Deploy via Amplify CLI

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify project
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Configure Custom Domain (GoDaddy)

1. In Amplify Console, go to "Domain management"
2. Add your domain
3. Copy the CNAME records provided by Amplify
4. In GoDaddy DNS settings, add the CNAME records
5. Wait for DNS propagation (can take up to 48 hours)

## TODO Before Launch

- [ ] Add Rebecca's Cal.com booking link to contact section
- [ ] Upload company logo (replace "AFD" text in nav)
- [ ] Configure contact form submission (currently opens mailto)
- [ ] Add any testimonials or case studies
- [ ] Connect custom domain via GoDaddy
- [ ] Set up SSL certificate (automatic in Amplify)
- [ ] Add Google Analytics or tracking (if needed)

## Contact Form Setup

The contact form currently uses a `mailto:` link as a fallback. For production, you have two options:

1. **Keep mailto:** Simple, no backend needed, opens user's email client
2. **Use form service:** Integrate with Formspree, Netlify Forms, or AWS SES for proper form handling

## Project Structure

```
AFDWebsite/
├── app/
│   ├── page.tsx          # Main homepage (single-page site)
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles & Tailwind
├── Spec/
│   └── PROJECT_SPEC.md   # Project specification
├── tailwind.config.ts    # Tailwind config with brand colors
└── package.json
```

## Sections

1. **Hero** - Brand name and tagline
2. **About Us** - Company mission and beliefs
3. **Services** - 6 service offerings in grid layout
4. **About Rebecca** - Founder bio and expertise
5. **Contact** - Form and calendar booking
6. **Footer** - Copyright info

## License

Copyright 2025 Adapt Flow Deliver Consultancy Ltd. All rights reserved.
