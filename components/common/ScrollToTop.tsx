'use client';
import { useScroll } from '@/hooks/useScroll';

export default function ScrollToTop() {
  const { isScrolled } = useScroll({ offset: 300 });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 p-3 rounded-full bg-orange-500 text-white
        shadow-lg transition-all duration-300 hover:bg-orange-600
        ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}