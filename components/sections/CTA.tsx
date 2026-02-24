'use client';
import { siteData } from '@/data/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import { ScaleIn } from '@/components/ui/AnimateOnScroll';

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent to-red-600 p-12 md:p-16 text-center shadow-soft-lg">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40" />

            {/* Content */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {siteData.cta.title}
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {siteData.cta.description}
              </p>

              <a href="#contact">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
                  <span>{siteData.cta.button}</span>
                  <Icon name="arrowRight" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
