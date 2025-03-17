'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { MapPin, Compass, Star, ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { INDIA_STATES } from '../data/india-states';

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
  const [displayedStates, setDisplayedStates] = useState<typeof INDIA_STATES>([]);
  const [currentIndex, setCurrentIndex] = useState(STATES_PER_PAGE);
  
  const loadMoreRef = useRef(null);
  const isInView = useInView(loadMoreRef);

  useEffect(() => {
    setDisplayedStates(groupedStates[activeRegion].slice(0, STATES_PER_PAGE));
    setCurrentIndex(STATES_PER_PAGE);
  }, [activeRegion]);

  useEffect(() => {
    if (isInView && currentIndex < groupedStates[activeRegion].length) {
      const nextBatch = groupedStates[activeRegion].slice(0, currentIndex + STATES_PER_PAGE);
      setDisplayedStates(nextBatch);
      setCurrentIndex(prev => prev + STATES_PER_PAGE);
    }
  }, [isInView, currentIndex, activeRegion]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073"
          alt="India States"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-playfair">
                States of India
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-montserrat">
                Discover the rich tapestry of cultures, traditions, and landscapes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Region Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {REGIONS.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeRegion === region
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {region === 'All' ? (
                    <Globe className="w-4 h-4" />
                  ) : (
                    <Compass className="w-4 h-4" />
                  )}
                  <span>{region}</span>
                  {region === 'All' && (
                    <span className="bg-white/20 px-2 rounded-full text-sm">
                      {INDIA_STATES.length}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* States Count */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            {activeRegion === 'All' ? 'All States' : `${activeRegion} States`}
            <span className="ml-2 text-lg text-gray-500">
              ({groupedStates[activeRegion].length})
            </span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Showing {displayedStates.length} of {groupedStates[activeRegion].length}</span>
          </div>
        </div>
      </div>

      {/* States Grid */}
      <div className="container mx-auto px-4 py-8">
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
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/30">
                      {state.region}
                    </span>
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
                      <Link 
                        key={city.slug}
                        href={`https://en.wikipedia.org/wiki/${state.slug}/${city.slug}`}
                        className="group bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                          <Image
                            src={city.image}
                            alt={city.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                          {city.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{city.type}</p>
                      </Link>
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
                    <div className="grid grid-cols-2 gap-4">
                      {state.hiddenGems.map((gem) => (
                        <Link 
                          key={gem.slug}
                          href={`https://en.wikipedia.org/wiki/${state.slug}/${gem.slug}`}
                          className="group relative h-48 rounded-xl overflow-hidden"
                        >
                          <Image
                            src={gem.image}
                            alt={gem.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-white font-medium group-hover:text-orange-300 transition-colors">
                              {gem.name}
                            </h4>
                            <div className="flex items-center gap-2 text-white/80 text-sm mt-1">
                              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                              <span>{gem.rating}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Explore More Link */}
                <div className="flex justify-between items-center mt-8">
                  <Link 
                    href={`/states/${state.slug}`}
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors group"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a 
                    href={`https://en.wikipedia.org/wiki/${state.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
                  >
                    <span>Wikipedia</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {currentIndex < groupedStates[activeRegion].length && (
          <div 
            ref={loadMoreRef}
            className="flex justify-center items-center py-8"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}