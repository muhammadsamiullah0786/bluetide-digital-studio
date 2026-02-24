# BlueTide Digital Studio - Complete Documentation

## 📖 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Content Management](#content-management)
4. [Customization Guide](#customization-guide)
5. [Component Guide](#component-guide)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm (comes with Node.js)

### Getting Started

```bash
# Navigate to project directory
cd "BlueTide Digital Studio"

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Available Scripts

```bash
npm run dev      # Development server with hot reload (http://localhost:3000)
npm run build    # Build optimized production version
npm start        # Start production server
npm run lint     # Check code quality with ESLint
```

---

## 📁 Project Structure

### Key Directories

```
📦 components/
├── 📂 sections/          # Full-page sections
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Resume.tsx        # Experience timeline
│   ├── Services.tsx      # Services grid
│   ├── CTA.tsx           # Call-to-action banner
│   ├── Portfolio.tsx     # Portfolio grid + modal
│   ├── Contact.tsx       # Contact form + info
│   └── Footer.tsx        # Footer
└── 📂 ui/               # Reusable UI components
    ├── Button.tsx       # Button (4 variants)
    ├── Icon.tsx         # SVG icon system
    ├── Modal.tsx        # Modal dialog
    ├── Toast.tsx        # Notifications
    ├── SkillBar.tsx     # Animated progress bar
    ├── ServiceCard.tsx  # Service card
    ├── PortfolioCard.tsx # Portfolio card
    ├── SocialIcons.tsx  # Social links
    ├── TimelineItem.tsx # Timeline item
    └── Container.tsx    # Layout wrapper

📦 data/
└── site.ts              # ALL CONTENT HERE (edit this!)

📦 public/
├── hero.jpg             # Hero image
├── avatar.jpg           # Profile avatar
└── 📂 portfolio/         # Portfolio project images
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    ├── project-4.jpg
    ├── project-5.jpg
    └── project-6.jpg

📦 app/
├── page.tsx             # Homepage
├── layout.tsx           # Root layout
└── globals.css          # Global styles
```

---

## ✏️ Content Management

### MAIN: Edit All Content in `data/site.ts`

This single file contains ALL text, links, and structured content. No need to edit individual components.

#### Example Content Structure

```typescript
export const siteData = {
  // Hero section
  hero: {
    title: 'BlueTide Digital Studio',
    subtitle: 'I\'m a Creative Product Designer & Frontend Developer',
  },

  // About section
  about: {
    title: 'Transforming Ideas Into Digital Reality',
    description: 'Your about text here...',
    stats: [
      { label: 'Projects', value: '50+' },
      { label: 'Experience', value: '7 Years' },
      { label: 'Clients', value: '30+' },
    ],
  },

  // Skills
  skills: [
    { name: 'React/Next.js', percentage: 95 },
    { name: 'Tailwind CSS', percentage: 92 },
  ],

  // Contact
  contact: {
    items: [
      { label: 'Email', value: 'hello@bluetide.com', icon: 'mail' },
    ]
  }
  // ... more sections
}
```

### What to Edit

| Section | File | What Changes |
|---------|------|-----|
| All Text | `data/site.ts` | Titles, descriptions, content |
| Images | `public/` | Background, avatar, portfolio |
| Colors | `tailwind.config.ts` | Theme colors |
| Fonts | `tailwind.config.ts` | Typography |
| Navigation | `data/site.ts` | Menu links |

---

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `data/site.ts`:

```typescript
const siteData = {
  metadata: {
    title: 'Your Name - Portfolio',
    description: 'Your description here',
  },
  hero: {
    title: 'Your Name',
    subtitle: 'Your profession / tagline',
  },
  about: {
    info: [
      { label: 'Name', value: 'Your Name' },
      { label: 'Email', value: 'your@email.com' },
      { label: 'Location', value: 'Your City' },
    ]
  }
}
```

### 2. Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  cream: '#f6f1ea',        // Background
  accent: '#ff4d5a',       // Primary color (currently coral)
  dark: '#1a1a1a',         // Text color
}
```

**Color Examples:**
- Blue accent: `#3b82f6`
- Green accent: `#10b981`
- Purple accent: `#a855f7`
- Orange accent: `#f97316`

### 3. Add/Edit Skills

Edit `data/site.ts`:

```typescript
skills: [
  { name: 'React/Next.js', percentage: 95 },
  { name: 'TypeScript', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 92 },
]
```

### 4. Add/Edit Experience

Edit `data/site.ts`:

```typescript
resume: {
  professional: [
    {
      year: '2024 – Present',
      title: 'Your Job Title',
      company: 'Company Name',
      location: 'City, State',
      description: 'Job description...',
    }
  ]
}
```

### 5. Add/Edit Services

Edit `data/site.ts`:

```typescript
services: [
  {
    id: 1,
    title: 'Service Name',
    description: 'Service description',
    icon: 'code', // see Icon.tsx for all icon names
  }
]
```

### 6. Add/Edit Portfolio Items

Edit `data/site.ts`:

```typescript
portfolio: {
  items: [
    {
      id: 1,
      title: 'Project Name',
      category: 'UI/UX', // or 'Branding', 'Development', etc
      image: '/portfolio/project-1.jpg',
      description: 'Project description',
      tags: ['React', 'Tailwind', 'Design'],
      links: {
        live: 'https://project-url.com',
        github: 'https://github.com/...',
      },
    }
  ]
}
```

### 7. Replace Images

1. **Hero Image** (`/public/hero.jpg`)
   - Recommended size: 1200x600px
   - Used: Hero section background

2. **Avatar Image** (`/public/avatar.jpg`)
   - Recommended size: 400x400px (square)
   - Used: About section profile

3. **Portfolio Images** (`/public/portfolio/project-*.jpg`)
   - Recommended size: 600x400px
   - Count: 6 default (can add more)
   - Used: Portfolio gallery

### 8. Update Social Links

Edit `data/site.ts`:

```typescript
socials: [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/yourprofile' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/yourprofile' },
]
```

**Supported social icons:**
- github, linkedin, twitter, dribbble, youtube

### 9. Update Footer Links

Edit `data/site.ts`:

```typescript
footer: {
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
  ]
}
```

---

## 🧩 Component Guide

### Using Existing Components

#### Button Component

```tsx
import Button from '@/components/ui/Button';

// Primary button
<Button>Click Me</Button>

// Secondary variant
<Button variant="secondary">Cancel</Button>

// Outline variant
<Button variant="outline">Learn More</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icon
<Button>
  <span>Icon</span>
  <Icon name="arrowRight" size={20} />
</Button>
```

#### Icon Component

```tsx
import Icon from '@/components/ui/Icon';

// Size
<Icon name="github" size={24} />

// All available icons
github, linkedin, twitter, dribbble, youtube,
user, mail, phone, location, book, check,
code, palette, layout, smartphone, trending,
chart, chevronDown, external, menu, x,
arrowRight, eye
```

#### Toast Notifications

```tsx
'use client';
import { useToast } from '@/components/ui/Toast';

export default function MyComponent() {
  const { addToast } = useToast();

  const handleSuccess = () => {
    addToast('Success!', 'success');
  };

  const handleError = () => {
    addToast('Error occurred', 'error');
  };

  return (
    <button onClick={handleSuccess}>Show Toast</button>
  );
}
```

#### Modal

```tsx
'use client';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Modal content here
      </Modal>
    </>
  );
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-detects Next.js
5. Click Deploy

**Cost:** Free tier available

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import from Git
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

### Deploy to Self-Hosted Server

```bash
# Build
npm run build

# Start
npm start
```

Server must have Node.js 18+ installed.

### Build Production

```bash
npm run build
```

Creates optimized build in `.next/` directory.

---

## 🔧 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Clear Cache and Rebuild

```bash
rm -r .next
npm run build
```

### Dependencies Issues

```bash
npm install --legacy-peer-deps
```

### TypeScript Errors

```bash
# Rebuild TypeScript
npm run build
```

### Image Not Loading

1. Check path is correct: `/public/image.jpg`
2. Restart dev server
3. Clear browser cache

### Form Not Working

1. Check email validation: `foo@bar.com` format
2. Toast notifications require `<ToastProvider>` in layout
3. Form data is logged to console (demo mode)

### Navigation Not Scrolling

1. Ensure links use hash: `<a href="#about">`
2. Check section has `id="about"`
3. Ensure section is below viewport

### Styling Not Applied

1. Restart dev server: `npm run dev`
2. Clear `.next/` folder
3. Check Tailwind config is present

---

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## ✅ Pre-Deployment Checklist

- [ ] All content updated in `data/site.ts`
- [ ] Images replaced with your own
- [ ] Navigation links working
- [ ] Contact form tested
- [ ] Social links updated
- [ ] Colors customized (if desired)
- [ ] All pages responsive on mobile
- [ ] No console errors
- [ ] Build completes: `npm run build`
- [ ] Production build tested: `npm start`

---

## 🎉 Ready to Deploy!

Your portfolio is **100% production-ready**. Choose a deployment platform and share your work with the world!

**Questions?** Refer to component documentation in the code or the resources above.

**Happy coding!** 🚀
