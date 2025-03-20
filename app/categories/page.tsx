'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, X, Globe, Compass, MapPin, BookOpen, Filter } from 'lucide-react';
import { CATEGORIES } from './data';
import { useScroll } from '@/hooks/useScroll';
import NoDataFound from '@/components/common/NoDataFound';

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [shortcutKey, setShortcutKey] = useState('');  // Initialize empty
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isScrolled } = useScroll({ offset: 20 });

  // Move all window-dependent code into useEffect
  useEffect(() => {
    // Set shortcut key based on platform
    const isMac = window.navigator.platform.includes('Mac');
    setShortcutKey(isMac ? '(⌘K)' : '(Ctrl+K)');

    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Filter categories based on search and filter
  const filteredCategories = CATEGORIES.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <div className={`relative ${isSearchFocused ? 'h-[30vh]' : 'h-[70vh]'} transition-all duration-500`}>
        <Image
          src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?w=1800"
          alt="Categories header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className={`max-w-3xl ${isSearchFocused ? 'mb-4' : 'mb-8'} transition-all`}>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-playfair
              ${isSearchFocused ? 'transform -translate-y-4 opacity-50' : ''} transition-all`}>
              Explore <span className="text-orange-400">Categories</span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-2xl font-montserrat leading-relaxed
              ${isSearchFocused ? 'hidden' : 'block'} transition-all`}>
              Discover India's rich heritage through our carefully curated collection of stories and experiences
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl">
            <div className="relative transform hover:scale-[1.01] transition-all duration-300">
              <input
                ref={searchInputRef}
                type="text"
                placeholder={`Search categories... ${shortcutKey}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full px-6 py-4 pl-14 pr-12 rounded-full
                  text-white placeholder-white/70 text-lg
                  focus:outline-none focus:ring-4 focus:ring-orange-500/30 
                  bg-white/10 border border-white/20
                  backdrop-blur-xl shadow-xl
                  transition-all duration-300
                  focus:bg-white/20"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className="absolute right-5 top-1/2 -translate-y-1/2 
                    p-2 rounded-full hover:bg-white/20 transition-colors
                    text-white/70 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Search Stats */}
            {searchQuery && (
              <div className="mt-4 text-white/70 text-sm animate-fadeIn">
                Found {filteredCategories.length} results for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div className="container mx-auto px-4 py-16">
        {filteredCategories.length > 0 ? (
          <>
            {/* Stats Bar */}
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-gray-900">
                All Categories
                <span className="ml-3 text-lg text-orange-500 bg-orange-50 px-4 py-1 rounded-full">
                  {filteredCategories.length} categories
                </span>
              </h2>
            </div>

            {/* Enhanced Categories Grid */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredCategories.map((category: any) => (
                <motion.div
                  key={category.id}
                  variants={item}
                  className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg
                    transform hover:-translate-y-2 transition-all duration-500"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <Link href={`/categories/${category.slug}`}>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                        <div className="flex items-center gap-2 text-orange-400 mb-4">
                          <MapPin className="w-5 h-5" />
                          <span className="uppercase tracking-wider text-sm font-medium">
                            Featured Category
                          </span>
                        </div>
                        
                        <h2 className="font-playfair text-4xl font-bold text-white mb-4 leading-tight">
                          {category.name}
                        </h2>
                        
                        <p className="font-montserrat text-gray-200 mb-6 line-clamp-2">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/80">
                            <BookOpen className="w-5 h-5" />
                            <span>{category.count} articles</span>
                          </div>
                          
                          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 
                            backdrop-blur-md rounded-full text-white
                            transform group-hover:translate-x-0 translate-x-8
                            transition-all duration-500">
                            Explore Category
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <NoDataFound 
            title="No Categories Found"
            message={`No categories found for "${searchQuery}"`}
            onReset={() => setSearchQuery('')}
          />
        )}
      </div>
    </div>
  );
}






