'use client';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { ScaleIn } from '@/components/ui/AnimateOnScroll';

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <Container>
        <ScaleIn>
          <div className="conic-border rounded-3xl">
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 p-10 shadow-[0_30px_80px_-30px_rgba(20,16,43,0.6)] sm:p-14 md:p-16"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #0A0820 0%, #14102B 50%, #3B1E80 100%)',
            }}
          >
            {/* Grid pattern */}
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

            {/* Glow accents (drifting) */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/35 blur-3xl animate-drift-1" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan/30 blur-3xl animate-drift-2" />

            <div className="relative flex flex-col items-center text-center">
              <span className="section-eyebrow section-eyebrow-dark mb-5">
                {siteData.cta.eyebrow}
              </span>

              <h2 className="mb-5 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
                {siteData.cta.title}
              </h2>

              <p className="mb-9 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {siteData.cta.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a href="#contact">
                  <Button size="lg" variant="light" className="bg-white text-navy hover:bg-cyan/10 hover:text-accent">
                    <Icon name="zap" size={18} />
                    {siteData.cta.primary}
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-cyan/40 bg-white/[0.04] text-white hover:border-cyan hover:bg-cyan/10 hover:text-white"
                  >
                    {siteData.cta.secondary}
                    <Icon name="arrowRight" size={18} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
