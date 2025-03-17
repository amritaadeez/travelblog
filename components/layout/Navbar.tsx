'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import Logo from '@/app/logo.png';

const NAV_ITEMS = [
  { label: 'Blog', path: '/blog' },
  { label: 'Categories', path: '/categories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');
  const isCategoriesPage = pathname === '/categories';
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';
  const isTransparentPage = isHomePage || isBlogPage || isCategoriesPage || isAboutPage || isContactPage;
  
  const { isScrolled } = useScroll({ offset: 20 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavStyles = (isScrolled: boolean, isTransparentPage: boolean) => ({
    nav: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : isTransparentPage 
          ? 'bg-transparent' 
          : 'bg-white shadow-sm'
    }`,
    link: (isActive: boolean) => `
      relative px-4 py-2 transition-colors rounded-full
      ${isScrolled 
        ? isActive 
          ? 'text-orange-500' 
          : 'text-gray-900 hover:text-orange-500' 
        : isTransparentPage 
          ? isActive 
            ? 'text-orange-300' 
            : 'text-white hover:text-orange-300' 
          : isActive 
            ? 'text-orange-500' 
            : 'text-gray-900 hover:text-orange-500'
      }
      ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current' : ''}
    `,
    logo: `text-xl font-bold transition-colors ${
      isScrolled 
        ? 'text-gray-900' 
        : isTransparentPage 
          ? 'text-white' 
          : 'text-gray-900'
    }`,
    menuIcon: `w-6 h-6 ${
      isScrolled || !isTransparentPage ? 'text-gray-900' : 'text-white'
    }`
  });

  const styles = getNavStyles(isScrolled, isTransparentPage);

  return (
    <>
      <nav className={styles.nav}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className={`${styles.logo} hover:opacity-80 transition-opacity flex items-center gap-2`}>
              <Image 
                src={Logo}
                alt="Hidden India Logo" 
                width={32} 
                height={32}
                className="object-contain"
              />
              <span className="md:inline">Hidden India</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-2">
              {NAV_ITEMS.map(({ label, path }) => (
                <Link 
                  key={path}
                  href={path}
                  className={styles.link(pathname === path)}
                >
                  {label}
                </Link>
              ))}
            </div>

            <button 
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <svg 
                className={styles.menuIcon}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
}