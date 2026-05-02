'use client';
import { siteData } from '@/data/site';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp, SlideInLeft, SlideInRight } from '@/components/ui/AnimateOnScroll';

interface JourneyItem {
  title: string;
  description: string;
  icon: string;
}

function JourneyCard({ item, index }: { item: JourneyItem; index: number }) {
  return (
    <div className="shine group relative transform-gpu rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-400 will-change-transform hover:-translate-y-1 hover:border-cyan/40 hover:shadow-soft-lg">
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-cyan transition-transform duration-500 group-hover:scale-x-100" />

      <div className="mb-4 flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-cyan/10 text-accent transition-all group-hover:from-accent group-hover:to-cyan group-hover:text-white">
          <Icon name={item.icon} size={22} />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h4 className="mb-2 text-lg font-bold tracking-tight text-navy">{item.title}</h4>
      <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="journey" className="relative bg-slate-50 py-24 md:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Journey"
            title="Professional Journey"
            description="Two parallel tracks — hands-on development experience and continuous growth in product, app and modern stack practices."
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Development Experience */}
          <SlideInLeft>
            <div>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-cyan text-white shadow-[0_10px_24px_-8px_rgba(124,58,237,0.55)]">
                  <Icon name="briefcase" size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Track 01</p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-navy">Development Experience</h3>
                </div>
              </div>

              <div className="space-y-4">
                {siteData.resume.development.map((item, index) => (
                  <JourneyCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Learning & Product Growth */}
          <SlideInRight>
            <div>
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-accent text-white shadow-[0_10px_24px_-8px_rgba(192,132,252,0.55)]">
                  <Icon name="sparkles" size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Track 02</p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-navy">Learning & Product Growth</h3>
                </div>
              </div>

              <div className="space-y-4">
                {siteData.resume.growth.map((item, index) => (
                  <JourneyCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </Container>
    </section>
  );
}
