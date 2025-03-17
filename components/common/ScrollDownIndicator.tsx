'use client';
import { useState } from 'react';

export default function ScrollDownIndicator({ className = '' }) {
  const [isVisible, setIsVisible] = useState(true);

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
          className="text-white animate-bounce"
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