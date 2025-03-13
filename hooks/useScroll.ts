import { useState, useEffect } from 'react';

interface ScrollOptions {
  threshold?: number;
  offset?: number;
  direction?: 'up' | 'down' | 'both';
}

export function useScroll({ threshold = 20, offset = 0, direction = 'both' }: ScrollOptions = {}) {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    isVisible: true,
    lastScrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrollState(prevState => {
        const newState = { ...prevState };
        
        // Handle basic scroll state
        newState.isScrolled = currentScrollY > offset;
        
        // Handle direction-based visibility
        if (direction !== 'both') {
          if (Math.abs(currentScrollY - prevState.lastScrollY) > threshold) {
            newState.isVisible = direction === 'up' 
              ? currentScrollY < prevState.lastScrollY
              : currentScrollY > prevState.lastScrollY;
          }
        }
        
        newState.lastScrollY = currentScrollY;
        return newState;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, offset, direction]);

  return scrollState;
}