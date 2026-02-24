'use client';
import { siteData } from '@/data/site';
import TimelineItem from '@/components/ui/TimelineItem';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp, SlideInLeft, SlideInRight } from '@/components/ui/AnimateOnScroll';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <Container>
        <FadeUp>
          <SectionHeader label="RESUME" title="Professional Journey" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <SlideInLeft>
            <div>
              <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Work Experience
              </h3>

              <div className="space-y-6">
                {siteData.resume.professional.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    description={item.description}
                    isLast={index === siteData.resume.professional.length - 1}
                  />
                ))}
              </div>
            </div>
          </SlideInLeft>

          {/* Academic Background */}
          <SlideInRight>
            <div>
              <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Education
              </h3>

              <div className="space-y-6">
                {siteData.resume.academic.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    description={item.description}
                    isLast={index === siteData.resume.academic.length - 1}
                  />
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </Container>
    </section>
  );
}
