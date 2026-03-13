'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 p-3 sm:p-4 bg-accent text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 animate-fadeIn"
          aria-label="Back to top"
          style={{
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4), 0 0 20px rgba(37, 99, 235, 0.2)',
          }}
        >
          <Icon name="chevronDown" size={20} className="rotate-180" />
        </button>
      )}
    </>
  );
}
