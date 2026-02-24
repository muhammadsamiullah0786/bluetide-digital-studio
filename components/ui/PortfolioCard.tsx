'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  onViewClick: (id: number) => void;
}

export default function PortfolioCard({
  id,
  title,
  category,
  image,
  onViewClick,
}: PortfolioCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-200 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          onLoadingComplete={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse" />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        {/* Category Tag */}
        <div className="flex justify-end">
          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full transform translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-300">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="flex items-end justify-between">
          <div className="transform translate-y-[20px] group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
            <p className="text-gray-300 text-sm">Click to view case study</p>
          </div>
          <button
            onClick={() => onViewClick(id)}
            className="bg-white text-accent p-3 rounded-lg hover:bg-accent hover:text-white transition-all transform translate-y-[20px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label={`View ${title} details`}
          >
            <Icon name="eye" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
