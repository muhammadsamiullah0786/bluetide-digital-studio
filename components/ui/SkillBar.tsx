'use client';

import { useEffect, useState, useRef } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const interval = setInterval(() => {
        if (current < percentage) {
          current += 1;
          setCurrentPercentage(current);
        } else {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-dark">{name}</span>
        <span className="text-sm font-bold text-accent">{currentPercentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-blue-700 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${isVisible ? currentPercentage : 0}%` }}
          role="progressbar"
          aria-valuenow={currentPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
