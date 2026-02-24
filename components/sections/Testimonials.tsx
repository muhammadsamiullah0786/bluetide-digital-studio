'use client';

import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <FadeUp>
          <SectionHeader label="TESTIMONIALS" title="What Clients Say" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <FadeUp key={testimonial.id} delay={index * 0.15}>
              <div className="bg-cream rounded-2xl p-8 hover:shadow-soft transition-all duration-300 border border-gray-100 hover:border-accent/20 group">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name={i < testimonial.rating ? 'star' : 'star'}
                      size={18}
                      className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  "{testimonial.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-700" />
                  <div>
                    <p className="font-semibold text-dark text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
