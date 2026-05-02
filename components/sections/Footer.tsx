'use client';

import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #0A0820 0%, #070418 100%)',
      }}
    >
      {/* Top accent line — animated flow */}
      <div
        className="h-[2px] animate-accent-flow"
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 0%, #7C3AED 25%, #C084FC 50%, #7C3AED 75%, transparent 100%)',
        }}
      />

      {/* Glow accents (drifting) */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-drift-1" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-cyan/15 blur-3xl animate-drift-2" />

      <div className="relative px-4 py-20">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-5 flex items-center gap-3">
                <Logo size="md" variant="dark" />
                <div>
                  <p className="font-bold tracking-tight text-white">{siteData.brand.name}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">{siteData.footer.about}</p>
              <p className="mb-5 text-xs font-semibold leading-relaxed text-slate-500">
                {siteData.brand.tagline}
              </p>

              <div className="flex gap-2">
                {siteData.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan">Navigate</h4>
              <ul className="space-y-3">
                {siteData.footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <span className="h-px w-2 bg-cyan/40 transition-all group-hover:w-4 group-hover:bg-cyan" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan">Services</h4>
              <ul className="space-y-3">
                {siteData.footer.services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      <span className="h-px w-2 bg-cyan/40 transition-all group-hover:w-4 group-hover:bg-cyan" />
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan">Contact</h4>
              <ul className="space-y-4">
                {siteData.footer.contact.map((contact) => (
                  <li key={contact.label}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="block text-sm text-slate-300 transition-colors hover:text-cyan"
                      >
                        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                          {contact.label}
                        </span>
                        <span className="mt-0.5 block break-words font-semibold text-white">
                          {contact.value}
                        </span>
                      </a>
                    ) : (
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                          {contact.label}
                        </span>
                        <p className="mt-0.5 text-sm font-semibold text-white">{contact.value}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">
              {siteData.footer.copyright.replace('2026', String(currentYear))}
            </p>
            <p className="text-xs text-slate-500">{siteData.footer.location}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
