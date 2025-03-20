'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';
import { MapPin, Compass, Star, ArrowRight, Globe, ExternalLink, X, Search, RotateCcw } from 'lucide-react';
import { INDIA_STATES } from '../data/india-states';
import NoDataFound from '@/components/common/NoDataFound';

// Add state type for iframe
interface IframeState {
  isOpen: boolean;
  url: string;
}

// Add 'All' to regions and sort states
const REGIONS = ['All', 'North', 'South', 'East', 'West', 'Central', 'Northeast', 'Union Territory'] as const;
type RegionType = typeof REGIONS[number];

// Group states by region including 'All'
const groupedStates = REGIONS.reduce((acc, region) => {
  if (region === 'All') {
    acc[region] = [...INDIA_STATES].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    acc[region] = INDIA_STATES
      .filter(state => state.region === region)
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  return acc;
}, {} as Record<RegionType, typeof INDIA_STATES>);

const STATES_PER_PAGE = 4;

export default function StatesPage() {
  const [activeRegion, setActiveRegion] = useState<RegionType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedStates, setDisplayedStates] = useState<typeof INDIA_STATES>([]);
  const [currentIndex, setCurrentIndex] = useState(STATES_PER_PAGE);
  const [iframe, setIframe] = useState<IframeState>({ isOpen: false, url: '' });
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [shortcutKey, setShortcutKey] = useState(''); // Add this state
  
  const loadMoreRef = useRef(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(loadMoreRef);
  const contentRef = useRef<HTMLDivElement>(null);

  // Add useEffect for platform detection
  useEffect(() => {
    const isMac = window.navigator.platform.includes('Mac');
    setShortcutKey(isMac ? '(⌘K)' : '(Ctrl+K)');
  }, []);

  const handleRegionChange = (region: RegionType) => {
    setActiveRegion(region);
    
    // Scroll to content with offset for the sticky header
    const yOffset = -150; // Adjust this value based on your header height
    const element = contentRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Add keyboard shortcut for search
  useEffect(() => {
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

  // Function to open iframe with mobile version of Wikipedia
  const openWikipedia = (url: string) => {
    // Convert regular Wikipedia URL to mobile version
    const mobileUrl = url.replace('wikipedia.org', 'm.wikipedia.org');
    setIframe({ isOpen: true, url: mobileUrl });
  };

  // Function to close iframe
  const closeIframe = () => {
    setIframe({ isOpen: false, url: '' });
  };

  // Filter states based on search query and active region
  const getFilteredStates = useCallback(() => {
    return groupedStates[activeRegion].filter(state => 
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.majorCities.some(city => 
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [activeRegion, searchQuery]);

  // Get count of states for each region after search filter
  const getRegionCount = useCallback((region: RegionType) => {
    if (searchQuery === '') return groupedStates[region].length;
    return groupedStates[region].filter(state =>
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.majorCities.some(city => 
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length;
  }, [searchQuery]);

  useEffect(() => {
    const filteredStates = getFilteredStates();
    setDisplayedStates(filteredStates.slice(0, STATES_PER_PAGE));
    setCurrentIndex(STATES_PER_PAGE);
  }, [activeRegion, searchQuery, getFilteredStates]);

  useEffect(() => {
    if (isInView) {
      const filteredStates = getFilteredStates();
      if (currentIndex < filteredStates.length) {
        setDisplayedStates(filteredStates.slice(0, currentIndex + STATES_PER_PAGE));
        setCurrentIndex(prev => prev + STATES_PER_PAGE);
      }
    }
  }, [isInView, currentIndex, getFilteredStates]);

  // Add reset handler
  const handleReset = () => {
    setSearchQuery('');
    setActiveRegion('All');
    searchInputRef.current?.blur();
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className={`relative ${isSearchFocused ? 'h-[30vh]' : 'h-[70vh]'} transition-all duration-500`}>
        <Image
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073"
          alt="India States"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className={`max-w-3xl ${isSearchFocused ? 'mb-4' : 'mb-8'} transition-all`}>
              <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-playfair
                ${isSearchFocused ? 'transform -translate-y-4 opacity-50' : ''} transition-all`}>
                <span className="text-white">States of </span>{' '}
                <span className="text-orange-500">India</span>
              </h1>
              <p className={`text-base sm:text-lg text-gray-200 font-montserrat
                ${isSearchFocused ? 'hidden' : 'block'} transition-all`}>
                Discover the rich tapestry of cultures, traditions, and landscapes
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl">
              <div className="relative transform hover:scale-[1.01] transition-all duration-300">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={`Search states, cities, or places... ${shortcutKey}`}
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
                  Found {getFilteredStates().length} results for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Region Tabs */}
      <div className="sticky -mt-6 top-0 z-10 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-full shadow-lg p-2">
            <div className="flex items-center gap-2 overflow-x-auto py-2 px-2 scrollbar-hide">
              {/* Add reset button when filters are active */}
              {/* {(searchQuery || activeRegion !== 'All') && (
                <button
                  onClick={handleReset}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full
                    bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Reset</span>
                </button>
              )} */}
              {REGIONS.map(region => (
                <button
                  key={region}
                  onClick={() => handleRegionChange(region)}
                  className={`
                    px-4 py-2 rounded-full whitespace-nowrap transition-all
                    ${activeRegion === region
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span>{region}</span>
                  {/* {region !== 'All' && ( */}
                    <span className="ml-2 text-sm">
                      ({getRegionCount(region)})
                    </span>
                  {/* )} */}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* States Count with Animation */}
      <div ref={contentRef} className="container mx-auto px-4 pt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span>All States</span>
              <span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {getFilteredStates().length}
              </span>
            </h2>

            {/* Selected Region Chip */}
            {activeRegion !== "All" && (
              <div className="flex items-center gap-2">
                <div className="h-6 w-[1px] bg-gray-300"></div>
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                  {activeRegion}
                </span>
              </div>
            )}

            {/* Reset Button */}
            {(searchQuery || activeRegion !== "All") && (
              <button
                onClick={handleReset}
                className="group flex items-center gap-2 px-4 py-1 rounded-full
                  bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all text-sm"
                aria-label="Reset filters"
              >
                <RotateCcw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Showing {displayedStates.length} of {getFilteredStates().length}</span>
          </div>
        </div>
      </div>

      {/* States Grid */}
      <div className="container mx-auto px-4 py-8">
        {getFilteredStates().length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {displayedStates.map((state, index) => (
                <div 
                  key={state.name}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* State Header */}
                  <div className="relative h-72 group">
                    <Image
                      src={state.image}
                      alt={state.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute top-10 left-5">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/30">
                          {state.region}
                        </span>
                        </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <h2 className="font-playfair text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                            {state.name}
                          </h2>
                          <div className="flex items-center gap-2 text-white/90">
                            <MapPin className="w-4 h-4" />
                            <span>Capital: {state.capital}</span>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  {/* <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50">
                    <div className="text-center">
                      <span className="text-sm text-gray-500">Population</span>
                      <p className="font-semibold text-gray-900">{state?.population}</p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <span className="text-sm text-gray-500">Area</span>
                      <p className="font-semibold text-gray-900">{state?.area} km²</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-gray-500">Districts</span>
                      <p className="font-semibold text-gray-900">{state?.districts}</p>
                    </div>
                  </div> */}

                  {/* State Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 line-clamp-2">{state.description}</p>

                    {/* Major Cities */}
                    <div className="space-y-4 mb-8">
                      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        Major Cities
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {state.majorCities.map((city) => (
                          <button 
                            key={city.slug}
                            onClick={() => openWikipedia(`https://en.wikipedia.org/wiki/${city.slug}`)}
                            className="group bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300 w-full text-left"
                          >
                            <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                              <Image
                                src={city.image}
                                alt={city.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="flex items-start justify-between">
                              <div>
                                <h6 className="font-semibold text-gray-900">{city.name}</h6>
                                <p className="text-sm text-gray-500">{city.type}</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Hidden Gems */}
                    {state.hiddenGems && state.hiddenGems.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                          <Star className="w-5 h-5 text-orange-500" />
                          Hidden Gems
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          {state.hiddenGems.map((gem) => (
                            <button 
                              key={gem.slug}
                              onClick={() => openWikipedia(`https://en.wikipedia.org/wiki/${gem.slug}`)}
                              className="group relative h-48 rounded-xl overflow-hidden w-full text-left"
                            >
                              <Image
                                src={gem.image}
                                alt={gem.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-start justify-between">
                                <div>
                                  <h4 className="text-white font-semibold">{gem.name}</h4>
                                  <p className="text-white/80 text-sm">{gem.type}</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Explore More Link */}
                    <div className="flex justify-between items-center mt-8">
                      <button 
                        onClick={() => openWikipedia(`https://en.wikipedia.org/wiki/${state.name}`)}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
                      >
                        <span>Explore  {state.name}</span> 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loading indicator */}
            {currentIndex < getFilteredStates().length && (
              <div 
                ref={loadMoreRef}
                className="flex justify-center items-center py-8"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
              </div>
            )}
          </>
        ) : (
          <NoDataFound 
            title="No States Found"
            message={
              searchQuery 
                ? `No states found for "${searchQuery}"${activeRegion !== "All" ? ` in ${activeRegion} region` : ''}`
                : `No states found in ${activeRegion} region`
            }
            onReset={handleReset}
          />
        )}
      </div>

      {/* Wikipedia Iframe Modal */}
      {iframe.isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl h-[80vh] relative">
            <button
              onClick={closeIframe}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                src={iframe.url}
                className="w-full h-full"
                title="Wikipedia Content"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                style={{
                  marginTop: '-56px',  // Adjust this value to hide the header
                  height: 'calc(100% + 56px)'  // Compensate for the negative margin
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}







