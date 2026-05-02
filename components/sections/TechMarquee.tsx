'use client';

import Icon from '@/components/ui/Icon';

const items = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'code' },
  { name: 'Node.js', icon: 'server' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'MongoDB', icon: 'database' },
  { name: 'PostgreSQL', icon: 'database' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Express.js', icon: 'server' },
  { name: 'Figma', icon: 'figma' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Vercel', icon: 'zap' },
  { name: 'REST APIs', icon: 'layers' },
  { name: 'Mobile UI', icon: 'smartphone' },
];

export default function TechMarquee() {
  // Render the list twice for seamless infinite loop
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Technologies and tools"
      className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white py-7"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="marquee-paused">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 text-slate-500 transition-colors duration-300 hover:text-accent"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 shadow-soft">
                <Icon name={tech.icon} size={16} />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.16em]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
