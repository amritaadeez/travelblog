"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import ScrollDownIndicator from "@/components/common/ScrollDownIndicator";
import { BLOG_POSTS } from "./data";

const CATEGORIES = [
  { name: "Sacred Places", count: 1 },     
  { name: "Nature Escapes", count: 1 },    
  { name: "Heritage", count: 2 },          
  { name: "Food & Culture", count: 1 },  
  { name: "Adventure", count: 0 },    
  { name: "City Guides", count: 0 },       
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleScroll = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className={`relative w-full transition-all duration-500 ${
          isSearchActive ? "h-[30vh]" : "min-h-screen"
        }`}
      >
        <Image
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1800&auto=format&fit=crop&q=60"
          alt="India Gate at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        {/* Header Content */}
        <div
          className={`absolute inset-0 flex items-start transition-all duration-800 ${
            isSearchActive ? "pt-24" : "pt-48"
          }`}
        >
          <div
            className={`container mx-auto px-4 transition-all duration-500 ${
              isSearchActive
                ? "flex justify-between items-center"
                : "text-center"
            }`}
          >
            {/* Title Section */}
            <div
              className={`transition-all duration-500 ${
                isSearchActive ? "text-left" : "mx-auto mb-8"
              }`}
            >
              {!isSearchActive && (
                <>
              <h1
              className={` text-gray-200 font-bold transition-all duration-500 ${
                isSearchActive ? "text-4xl" : "text-6xl md:text-7xl mb-6"
              }`}
            >
              Travel Stories
            </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
                  Discover the vibrant culture, rich heritage, and breathtaking
                  landscapes of India through our curated travel guides
                </p>
                </>
              )}
            </div>

            {/* Search Bar */}
            <div
              className={`transition-all duration-500 ${
                isSearchActive ? "w-[400px]" : "max-w-xl mx-auto"
              }`}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchActive(true)}
                  onBlur={() => !searchQuery && setIsSearchActive(false)}
                  className="w-full px-6 py-4 pl-14 rounded-full 
                    text-white placeholder-white/70 
                    focus:outline-none focus:ring-2 focus:ring-white/50 transition-all
                    bg-transparent border-2 border-white/30
                    backdrop-blur-sm"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button - Only show when search is not active */}
        {!isSearchActive && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <button onClick={handleScroll} className="animate-bounce">
              <ScrollDownIndicator />
            </button>
          </div>
        )}
      </div>

      {/* Categories and Blog Posts Section */}
      <div
        id="categories-section"
        className={`max-w-7xl mx-auto px-4 py-16 transition-all duration-500 ${
          isSearchActive ? "-mt-24" : ""
        }`}
      >
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Explore Categories
          </h2>
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category.name}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.name ? "" : category.name
                  )
                }
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category.name
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid with No Results State */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-sm text-gray-500">{post.readTime}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/no-results.svg" // You'll need to add this illustration
                alt="No results found"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Oops! No Adventures Found
            </h3>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any stories matching "{searchQuery}". Try
              adjusting your search or explore our suggestions below.
            </p>

            {/* Quick Suggestions */}
            <div className="max-w-2xl mx-auto">
              <h4 className="text-sm font-semibold text-gray-500 mb-4">
                POPULAR SEARCHES
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Heritage Sites",
                  "Food Trails",
                  "Wildlife",
                  "Beaches",
                  "Mountains",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-4 py-2 rounded-full text-sm border border-orange-200 
                      text-orange-600 hover:bg-orange-50 transition-colors
                      flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Random Destinations */}
            <div className="mt-12">
              <h4 className="text-sm font-semibold text-gray-500 mb-6">
                YOU MIGHT BE INTERESTED IN
              </h4>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <div key={post.id} className="group">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-white text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <h5 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
