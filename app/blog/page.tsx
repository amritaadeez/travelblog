"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Search, MapPin, X, Compass, RotateCcw } from "lucide-react";
import ScrollDownIndicator from "@/components/common/ScrollDownIndicator";
import { BLOG_POSTS } from "./data";
import NoDataFound from '@/components/common/NoDataFound';

const CATEGORIES = [
  { name: "All Categories", count: 5 }, // Add total count of all articles
  { name: "Sacred Places", count: 1 },
  { name: "Nature Escapes", count: 1 },
  { name: "Heritage", count: 2 },
  { name: "Food & Culture", count: 1 },
  { name: "Adventure", count: 0 },
  { name: "City Guides", count: 0 },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); // Set default selection
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [shortcutKey, setShortcutKey] = useState("(Ctrl+K)");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the shortcut key based on platform
    setShortcutKey(
      window.navigator.platform.includes("Mac") ? "(⌘K)" : "(Ctrl+K)"
    );
  }, []);

  // Add this function to get filtered count for each category
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All Categories") {
      return BLOG_POSTS.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).length;
    }
    
    return BLOG_POSTS.filter(post => 
      post.category === categoryName && (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ).length;
  };

  // Helper function to check if we're actively searching/filtering
  const isActiveSearch = () => {
    return searchQuery !== "" || selectedCategory !== "";
  };

  // Modified category selection handler with scroll
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    
    // Move the scroll logic into useEffect to ensure it only runs on client
    useEffect(() => {
      if (categoryName !== selectedCategory) {
        const yOffset = -150;
        const element = contentRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, [categoryName, selectedCategory]);
  };

  // Modified search clear handler
  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories"); // Reset to All Categories
    setIsSearchActive(false);
  };

  // Add this function to handle reset
  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setIsSearchActive(false);
  };

  // Modified filtered posts logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToContent = () => {
    if (typeof window !== 'undefined') { // Check if we're on the client
      const yOffset = -150;
      const element = contentRef.current;
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') { // Check if we're on the client
      const categoriesSection = document.getElementById("categories-section");
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className={`relative ${
          isSearchActive ? "h-[30vh]" : "h-[70vh]"
        } transition-all duration-500`}
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1800&auto=format&fit=crop&q=60"
            alt="India Gate at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content Container */}
        <div className="relative h-full z-10">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div
              className={`max-w-3xl ${
                isSearchActive ? "mb-4" : "mb-8"
              } transition-all`}
            >
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-playfair
                ${
                  isSearchActive ? "transform -translate-y-4 opacity-50" : ""
                } transition-all`}
              >
                <span className="text-white">Travel</span>{" "}
                <span className="text-orange-500">Stories</span>
              </h1>
              <h2
                className={`text-xl sm:text-2xl text-gray-300 font-light mb-4 font-playfair
                ${
                  isSearchActive ? "transform -translate-y-4 opacity-50" : ""
                } transition-all`}
              >
                Exploring India's Hidden Gems
              </h2>
              {!isSearchActive && (
                <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed font-montserrat">
                  Discover the vibrant culture, rich heritage, and breathtaking
                  landscapes of India through our curated travel guides
                </p>
              )}
            </div>

            {/* Search Bar Section */}
            <div className="max-w-2xl">
              <div className="relative transform hover:scale-[1.01] transition-all duration-300">
                <input
                  type="text"
                  placeholder={`Search stories... ${shortcutKey}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    setIsSearchActive(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  onBlur={() => !isActiveSearch() && setIsSearchActive(false)}
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
                    onClick={handleClearSearch}
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
                  Found {filteredPosts.length} results for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="sticky -mt-6 top-0 z-10 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-full shadow-lg p-2">
            <div className="flex items-center gap-2 overflow-x-auto py-2 px-2 scrollbar-hide">
              {(searchQuery || selectedCategory !== "All Categories") && (
                <button
                  onClick={handleReset}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full
                    bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Reset</span>
                </button>
              )}
              {CATEGORIES.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategorySelect(category.name)}
                  className={`
                    px-4 py-2 rounded-full whitespace-nowrap transition-all
                    ${selectedCategory === category.name
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  <span>{category.name}</span>
                  <span className="ml-2 text-sm">
                    ({getCategoryCount(category.name)})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Add ref here */}
      <div ref={contentRef} className="container mx-auto px-4 pt-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span>All Stories</span>
              <span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {filteredPosts.length}
              </span>
            </h2>

            {/* Selected Category Chip */}
            {selectedCategory !== "All Categories" && (
              <div className="flex items-center gap-2">
                <div className="h-6 w-[1px] bg-gray-300"></div>
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                  {selectedCategory}
                </span>
              </div>
            )}

            {/* Reset Button */}
            {(searchQuery || selectedCategory !== "All Categories") && (
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

          {/* Optional: Add any right-side content here */}
          <div className="flex items-center gap-2">
            {/* Add any additional controls if needed */}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                  transform hover:-translate-y-2 transition-all duration-300"
              >
                <article>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{post.category}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <NoDataFound 
            title="No Stories Found"
            message={
              searchQuery 
                ? `No stories found for "${searchQuery}"${selectedCategory !== "All Categories" ? ` in ${selectedCategory}` : ''}`
                : `No stories found in ${selectedCategory}`
            }
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}
