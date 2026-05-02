'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  alt?: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

export default function PortfolioCard({
  id,
  title,
  category,
  image,
  alt,
  description,
  tags,
  links,
}: PortfolioCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const hasAnyLink = Boolean(links.live || links.github || links.caseStudy);

  return (
    <article className="shine group flex h-full transform-gpu flex-col rounded-3xl border border-slate-200/80 bg-white shadow-soft transition-all duration-500 will-change-transform hover:-translate-y-2 hover:border-cyan/40 hover:shadow-soft-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
        <Image
          src={image}
          alt={alt || `${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          className={`object-cover transition-transform duration-700 group-hover:scale-[1.06] ${
            isLoading ? 'opacity-0' : 'animate-image-reveal'
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
        {isLoading && <div className="absolute inset-0 animate-pulse bg-slate-100" />}

        {/* Diagonal shimmer on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

        {/* Gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

        {/* Category tag */}
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-navy/85 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md">
          {category}
        </div>

        {/* Project number */}
        <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold tracking-wider text-white shadow-lg backdrop-blur-md">
          #{String(id).padStart(2, '0')}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-navy transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-500">{description}</p>

        <div className="mb-6 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={`${id}-${tag}`}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-colors group-hover:border-cyan/20 group-hover:bg-cyan/5 group-hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasAnyLink ? (
          <div className="mt-auto flex flex-wrap items-center gap-2.5 border-t border-slate-100 pt-5">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-cyan px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_-6px_rgba(124,58,237,0.55)] transition-all hover:-translate-y-0.5"
              >
                Live Demo
                <Icon name="external" size={14} />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                GitHub
                <Icon name="github" size={14} />
              </a>
            )}
            {links.caseStudy && (
              <a
                href={links.caseStudy}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Case Study
                <Icon name="book" size={14} />
              </a>
            )}
          </div>
        ) : (
          <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            <Icon name="palette" size={14} />
            Concept / UI Sample
          </div>
        )}
      </div>
    </article>
  );
}
