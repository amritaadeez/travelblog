'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Prefetch common routes
    const prefetchRoutes = ['/blog', '/categories', '/about'];
    prefetchRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : isHomePage 
            ? 'bg-transparent' 
            : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            prefetch={true}
            className={`text-xl font-bold transition-colors ${
              scrolled 
                ? 'text-gray-900' 
                : isHomePage 
                  ? 'text-white' 
                  : 'text-gray-900'
            }`}
          >
            Travel Blog
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['blog', 'categories', 'about'].map((item) => (
              <Link 
                key={item}
                href={`/${item}`} 
                prefetch={true}
                className={`transition-colors ${
                  scrolled 
                    ? 'text-gray-900 hover:text-gray-600' 
                    : isHomePage 
                      ? 'text-white hover:text-gray-300' 
                      : 'text-gray-900 hover:text-gray-600'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}