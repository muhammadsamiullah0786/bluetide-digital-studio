# BlueTide Digital Studio - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design**
- Premium minimal aesthetic with light warm cream background
- Smooth animations and transitions
- Fully responsive for all devices
- Accessibility-first approach

📱 **Sections**
- Hero section with typewriter effect
- About me with profile card and stats
- Technical proficiency skills with animated bars
- Professional resume with timeline
- Services showcase with 6 service cards
- Call-to-action banner
- Portfolio section with filter tabs and modal details
- Contact form with validation and toast notifications
- Footer with multiple columns

🎨 **Components**
- Reusable UI components (Button, Icon, Modal, Toast, etc.)
- Custom hooks for patterns
- Service cards with hover effects
- Portfolio cards with lightbox modal
- Timeline components for resume

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (optional)
- **Icons**: Custom SVG icon system
- **Form**: React hooks with validation

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone or extract the project
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Services.tsx
│   │   ├── CTA.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Icon.tsx
│       ├── Modal.tsx
│       ├── Toast.tsx
│       ├── SkillBar.tsx
│       ├── ServiceCard.tsx
│       ├── PortfolioCard.tsx
│       ├── SocialIcons.tsx
│       ├── TimelineItem.tsx
│       └── Container.tsx
├── data/
│   └── site.ts            # All content and metadata
├── public/
│   ├── hero.jpg
│   ├── avatar.jpg
│   └── portfolio/          # Portfolio project images
└── [config files]

```

## Content Management

All content is managed in `data/site.ts`. Edit this file to update:
- Site metadata and SEO
- Hero content
- Navigation links
- About information
- Skills
- Resume entries
- Services
- Portfolio projects
- Contact information
- Footer content
- Social media links

## Customization

### Colors
Edit the theme in `tailwind.config.ts`:
- Primary color (accent): `#ff4d5a`
- Background: `#f6f1ea`
- Dark text: `#1a1a1a`

### Images
Replace placeholder images in `/public`:
- `hero.jpg` - Hero section background
- `avatar.jpg` - Profile avatar
- `portfolio/*.jpg` - Portfolio project images

### Icons
Add or modify icons in `components/ui/Icon.tsx`

## Build & Deploy

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- GitHub Pages
- Self-hosted servers with Node.js

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting with App Router
- ✅ CSS minification with Tailwind
- ✅ Fast refresh during development
- ✅ Automatic sitemap generation (add with next-sitemap)

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states on buttons and links
- ✅ Form validation messages
- ✅ Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SEO

- Open Graph meta tags
- Twitter card metadata
- Canonical URLs
- Meta descriptions
- Structured data ready

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please refer to the component documentation in the code or the Next.js documentation.

---

**Happy coding! 🚀**
