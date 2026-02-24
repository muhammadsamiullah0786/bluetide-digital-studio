'use client';
import { siteData } from '@/data/site';
import SkillBar from '@/components/ui/SkillBar';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { FadeUp } from '@/components/ui/AnimateOnScroll';

export default function Skills() {
  return (
    <section className="py-20 bg-cream">
      <Container>
        <FadeUp>
          <SectionHeader label="SKILLS" title="Technical Proficiency" />
        </FadeUp>

        <div className="max-w-2xl">
          {siteData.skills.map((skill, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <SkillBar name={skill.name} percentage={skill.percentage} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
