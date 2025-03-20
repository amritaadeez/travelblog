'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useScroll } from '@/hooks/useScroll';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import Logo from '@/app/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Blog', path: '/blog' },
  { label: 'States', path: '/states' },
  { label: 'Categories', path: '/categories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { isScrolled } = useScroll({ offset: 20 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isTransparentPage = ['/', '/blog', '/categories', '/about', '/contact', '/states'].includes(pathname);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : isTransparentPage 
              ? 'bg-gradient-to-b from-black/50 to-transparent' 
              : 'bg-white shadow-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image 
                    src={Logo}
                    alt="Hidden India Logo" 
                    width={40} 
                    height={40}
                    className="object-contain rounded-full shadow-md group-hover:shadow-lg transition-shadow"
                  />
                </motion.div>
                <span className={`text-xl font-bold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-800' 
                    : isTransparentPage 
                      ? 'text-white' 
                      : 'text-gray-800'
                } group-hover:text-orange-500`}>
                  Hidden India
                </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map(({ label, path }) => {
                const isActive = pathname === path;
                return (
                  <motion.div
                    key={path}
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Link
                      href={path}
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                        isScrolled 
                          ? isActive 
                            ? 'text-orange-500' 
                            : 'text-gray-700 hover:text-orange-500' 
                          : isTransparentPage 
                            ? isActive 
                              ? 'text-orange-300' 
                              : 'text-white hover:text-orange-300' 
                            : isActive 
                              ? 'text-orange-500' 
                              : 'text-gray-700 hover:text-orange-500'
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <svg 
                className={`w-6 h-6 ${
                  isScrolled || !isTransparentPage ? 'text-gray-900' : 'text-white'
                }`}
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
            </motion.button>
          </div>
        </div>
      </motion.nav>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
}
