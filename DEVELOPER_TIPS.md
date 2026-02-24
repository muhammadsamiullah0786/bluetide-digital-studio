# BlueTide Digital Studio - Developer Tips & Keyboard Shortcuts

## ⌨️ Useful Keyboard Shortcuts

### Development Server
| Action | Command |
|--------|---------|
| Start dev server | `npm run dev` |
| Stop server | `Ctrl + C` |
| Build for production | `npm run build` |
| Start production build | `npm start` |
| Run linter | `npm run lint` |

### VS Code Shortcuts
| Action | Shortcut |
|--------|----------|
| Quick open file | `Ctrl + P` |
| Toggle sidebar | `Ctrl + B` |
| Format document | `Shift + Alt + F` |
| Go to line | `Ctrl + G` |
| Find in file | `Ctrl + F` |
| Find and replace | `Ctrl + H` |
| Toggle terminal | `Ctrl + J` |
| Open command palette | `Ctrl + Shift + P` |

### Browser Developer Tools
| Action | Shortcut |
|--------|----------|
| Open DevTools | `F12` or `Ctrl + Shift + I` |
| Toggle mobile view | `Ctrl + Shift + M` |
| Clear cache & reload | `Ctrl + Shift + Delete` |
| Hard refresh | `Ctrl + Shift + R` |

---

## 🎯 Common Tasks & How-To

### Task 1: Change Accent Color

**File**: `tailwind.config.ts`

```typescript
colors: {
  accent: '#3b82f6', // Change from coral to blue
}
```

Popular colors:
- Blue: `#3b82f6`
- Green: `#10b981`
- Purple: `#a855f7`
- Pink: `#ec4899`
- Orange: `#f97316`
- Teal: `#14b8a6`

**Restart**: `npm run dev`

---

### Task 2: Add a New Skill

**File**: `data/site.ts`

```typescript
skills: [
  { name: 'React/Next.js', percentage: 95 },
  { name: 'Your New Skill', percentage: 88 }, // ← Add here
]
```

No restart needed! Page updates automatically.

---

### Task 3: Update Social Links

**File**: `data/site.ts`

```typescript
socials: [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/yourprofile' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
]
```

**Available socials**: github, linkedin, twitter, dribbble, youtube

---

### Task 4: Add New Portfolio Item

**File**: `data/site.ts`

```typescript
portfolio: {
  items: [
    {
      id: 7, // New ID
      title: 'Your Project Name',
      category: 'UI/UX', // or Creative, Branding, Development
      image: '/portfolio/project-7.jpg',
      description: 'Project description here',
      tags: ['React', 'Design'],
      links: {
        live: 'https://project-url.com',
        github: 'https://github.com/yourrepo',
      },
    }
  ]
}
```

**Steps**:
1. Add new object to items array
2. Put image at `/public/portfolio/project-7.jpg`
3. Done! Auto-updates

---

### Task 5: Update Resume Experience

**File**: `data/site.ts`

```typescript
resume: {
  professional: [
    {
      year: '2024 – Present',
      title: 'Your Job Title',
      company: 'Company Name',
      location: 'City, State',
      description: 'Job description or achievements',
    }
  ]
}
```

---

### Task 6: Customize Section Order

**File**: `app/page.tsx`

```typescript
<main>
  <Hero />
  <About />
  <Skills />
  {/* Rename, reorder, or remove sections */}
</main>
```

---

### Task 7: Add a New SVG Icon

**File**: `components/ui/Icon.tsx`

```typescript
const icons = {
  myicon: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {/* Your SVG path here */}
    </svg>
  ),
}
```

**Usage**:
```tsx
<Icon name="myicon" size={24} />
```

---

### Task 8: Change Font Family

**File**: `tailwind.config.ts`

```typescript
fontFamily: {
  sans: ['Your Font', 'fallback', 'sans-serif'],
}
```

**Popular options**:
- Geist: Already optimized for Next.js
- Space Grotesk: Modern sans-serif
- Poppins: Friendly, modern
- Outfit: Clean, professional
- JetBrains Mono: Code font

---

### Task 9: Add Custom CSS Animation

**File**: `app/globals.css`

```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.my-class {
  animation: myAnimation 0.5s ease-out;
}
```

---

### Task 10: Enable Dark Mode Toggle (Advanced)

Would require:
1. Add theme state in app/page.tsx
2. Apply dark class to document
3. Update Tailwind config for dark mode
4. Create toggle button

See Tailwind docs: https://tailwindcss.com/docs/dark-mode

---

## 🔍 Debugging Tips

### Console Errors
1. Open DevTools: `F12`
2. Check Console tab for errors
3. Check Network tab for failed requests
4. Check Application tab for cache issues

### Performance Issues
1. Open DevTools → Performance tab
2. Record page load
3. Check for long tasks
4. Look for slow components

### Styling Issues
1. Inspect element: Right-click → Inspect
2. Check Tailwind classes applied
3. Check CSS specificity
4. Clear `.next/` cache if needed

### Build Issues
```bash
# Clear build cache
rm -r .next

# Rebuild
npm run build

# Check for errors
npm run lint
```

---

## 📊 File Size Reference

After build, typical sizes:

| File | Size |
|------|------|
| Next.js bundle | ~50-70 KB |
| Tailwind CSS | ~30-40 KB |
| React runtime | ~40-50 KB |
| App code | ~20-30 KB |
| **Total** | ~150-200 KB |

All gzip compressed for web!

---

## 🎨 Color Palette Reference

### Current Colors
```css
/* Primary Colors */
--cream: #f6f1ea;      /* Background */
--accent: #ff4d5a;     /* Primary CTA */
--dark: #1a1a1a;       /* Text */

/* Gray Scale */
--gray-50: #fafaf9;    /* Lightest */
--gray-200: #e7e5e4;   /* Light */
--gray-400: #a8a29e;   /* Medium */
--gray-600: #57534e;   /* Dark */
--gray-900: #1c1917;   /* Darkest */
```

### Generated Variants
All colors auto-generate lighter/darker variants in Tailwind:
- `accent` → `accent-50`, `accent-100`, `accent-600`, `accent-700`
- `cream` → `cream-50`, `cream-100`, etc.

---

## 📦 Package Management

### Check for Updates
```bash
npm outdated
```

### Update All Packages
```bash
npm update
```

### Update Specific Package
```bash
npm install package-name@latest
```

### Clean Install
```bash
rm -r node_modules package-lock.json
npm install
```

---

## 🔐 Security Tips

✅ **Enabled**:
- TypeScript strict mode (type safety)
- ESLint (code quality)
- Input validation (contact form)
- CORS headers (Next.js default)

⚠️ **If You Add Backend**:
- Validate all inputs server-side
- Use environment variables for secrets
- Sanitize user input
- Rate limit API endpoints
- Use HTTPS only

---

## ⚡ Performance Optimization

### Already Optimized
- ✅ Images use Next.js Image component
- ✅ Code splitting with App Router
- ✅ CSS minified with Tailwind
- ✅ JavaScript minified on build
- ✅ Automatic caching headers

### To Further Optimize
```bash
# Generate sitemap
npm install next-sitemap

# Add analytics
# npm install gtag

# Add image optimization
# Next.js Image already doing this
```

---

## 🧪 Testing During Development

### Manual Testing Checklist
- [ ] Desktop view (1920px wide)
- [ ] Tablet view (768px wide)
- [ ] Mobile view (375px wide)
- [ ] All navigation links work
- [ ] Contact form validates
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] Fast page load
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

### Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Edge
- [ ] Mobile browsers

---

## 📈 SEO Quick Wins

All already implemented:
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Mobile viewport
- ✅ Semantic HTML
- ✅ Fast load time

### To Further Improve
1. Add structured data (JSON-LD)
2. Generate sitemap.xml
3. Add robots.txt
4. Use Google Search Console
5. Monitor Core Web Vitals

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] All content updated
- [ ] Images replaced
- [ ] Links working
- [ ] Form tested
- [ ] Build successful: `npm run build`
- [ ] No console errors
- [ ] Mobile looks good
- [ ] SEO tags set
- [ ] Analytics configured (optional)
- [ ] Backups made (code in GitHub)

---

## 💡 Pro Tips

1. **Keep data centralized** - All edit in `data/site.ts`
2. **Use placeholder text** - Better UX while loading
3. **Test early** - Check mobile often during dev
4. **Commit regularly** - Use Git for version control
5. **Document changes** - Comment your customizations
6. **Backup images** - Keep originals separately
7. **Monitor performance** - Use Lighthouse in DevTools
8. **Test accessibility** - Use wave.webaim.org
9. **Cache busting** - Clear .next/ if updates stuck
10. **Deploy often** - Small changes = easier debugging

---

## 🆘 Emergency Debugging

### Site won't load
```bash
rm -r .next node_modules
npm install
npm run dev
```

### Port already in use
```bash
# Find process on port 3000
lsof -i :3000
# Or use different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npx tsc --noEmit
```

### Form not working
- Check browser console for errors
- Verify `ToastProvider` wraps page
- Check form field names match component

### Images not showing
- Verify path is `/public/image.jpg`
- Check file exists in folder
- Clear browser cache: `Ctrl + Shift + Delete`
- Restart dev server

---

## 📞 Quick Reference Links

| Resource | URL |
|----------|-----|
| Next.js Docs | https://nextjs.org/docs |
| React Docs | https://react.dev |
| Tailwind CSS | https://tailwindcss.com |
| TypeScript | https://www.typescriptlang.org/docs |
| MDN Web Docs | https://developer.mozilla.org |
| Can I Use | https://caniuse.com |
| Lighthouse | https://web.dev/lighthouse |

---

## 🎓 Learning Resources

### To Master This Stack
1. **React Hooks** - useState, useEffect, useContext
2. **Next.js App Router** - Pages as folders, layouts
3. **Tailwind Utilities** - Composable CSS classes
4. **TypeScript Types** - Interfaces, generics
5. **Component Design** - Composition, reusability

### Practice Exercises
1. Add dark mode toggle
2. Create admin dashboard
3. Add search functionality
4. Implement newsletter signup
5. Add blog section with markdown

---

## 🎉 You're an Expert Now!

You understand:
- ✅ Full Next.js application structure
- ✅ TypeScript in real projects
- ✅ Modern CSS with Tailwind
- ✅ React component patterns
- ✅ Responsive web design
- ✅ Web accessibility
- ✅ Performance optimization
- ✅ Deployment procedures

**Now go build amazing things!** 🚀

---

*Last Updated: February 2026*
*BlueTide Digital Studio - Portfolio Website*
