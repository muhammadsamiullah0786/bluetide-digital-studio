'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

interface CaseStudyData {
  title: string;
  image: string;
  tags?: string[];
  overview: string;
  problem: string;
  solution: string;
  toolsUsed: string[];
  keyFeatures: string[];
  result: string;
  links?: {
    live?: string;
    github?: string;
  };
}

interface CaseStudyProps {
  data: CaseStudyData;
  onClose: () => void;
}

export default function CaseStudy({ data, onClose }: CaseStudyProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92svh] overflow-y-auto shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-accent to-blue-700 text-white border-b">
          <h2 className="text-lg sm:text-2xl font-bold">{data.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
            aria-label="Close"
          >
            <Icon name="x" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          {/* Project Image */}
          <div className="relative w-full h-52 sm:h-72 rounded-xl overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <Icon name="tag" size={20} className="text-accent" />
                Technologies & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 text-accent font-medium text-sm rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Overview */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Icon name="info" size={20} className="text-accent" />
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{data.overview}</p>
          </section>

          {/* Problem */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Icon name="alertCircle" size={20} className="text-red-500" />
              The Problem
            </h3>
            <p className="text-gray-600 leading-relaxed">{data.problem}</p>
          </section>

          {/* Solution */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Icon name="check" size={20} className="text-green-500" />
              The Solution
            </h3>
            <p className="text-gray-600 leading-relaxed">{data.solution}</p>
          </section>

          {/* Tools Used */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Icon name="code" size={20} className="text-accent" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.toolsUsed.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Icon name="star" size={20} className="text-yellow-500" />
              Key Features
            </h3>
            <ul className="space-y-3">
              {data.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <Icon name="checkCircle" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Result */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <Icon name="trendingUp" size={20} className="text-green-600" />
              Result & Impact
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">{data.result}</p>
          </section>

          {/* Action Buttons */}
          {data.links && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              {data.links.live && (
                <a href={data.links.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full justify-center">
                    <Icon name="externalLink" size={18} />
                    View Live Project
                  </Button>
                </a>
              )}
              {data.links.github && (
                <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="secondary" size="lg" className="w-full justify-center">
                    <Icon name="github" size={18} />
                    View on GitHub
                  </Button>
                </a>
              )}
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-dark font-semibold rounded-lg transition-colors duration-300 mt-8"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
