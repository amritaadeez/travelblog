'use client';
import { useEffect, useState } from 'react';

interface ScrollDownIndicatorProps {
  className?: string;
}

export default function ScrollDownIndicator({ className = '' }: ScrollDownIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToContent}
          className={`absolute left-1/2 -translate-x-1/2 text-white animate-bounce ${className}`}
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Explore More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}