'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "A Weekend in Paris",
    excerpt: "Experience the magic of the City of Light in just 48 hours.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-15",
    slug: "weekend-in-paris",
    category: "City Guides"
  },
  {
    id: 2,
    title: "Japan's Cherry Blossom Season",
    excerpt: "Your complete guide to experiencing sakura in Japan.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-10",
    slug: "japan-cherry-blossom",
    category: "Seasonal Travel"
  },
  {
    id: 3,
    title: "Hiking the Inca Trail",
    excerpt: "A step-by-step guide to reaching Machu Picchu.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-05",
    slug: "hiking-inca-trail",
    category: "Adventure"
  }
];

const SUGGESTED_CLIPS = [
  {
    id: 1,
    title: "Sunset in Santorini",
    duration: "2:15",
    thumbnail: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Venice Canals",
    duration: "1:45",
    thumbnail: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Tokyo Streets",
    duration: "3:00",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=60",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=60"
          alt="Blog header"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Travel Stories</h1>
            <p className="font-montserrat text-xl text-gray-200">Adventures, guides, and travel inspiration</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Suggested Clips */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Suggested Clips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUGGESTED_CLIPS.map((clip) => (
              <div key={clip.id} className="relative group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={clip.thumbnail}
                    alt={clip.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{clip.title}</h3>
                    <span className="text-sm">{clip.duration}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="font-montserrat text-sm text-blue-600 mb-2">{post.category}</div>
                <time className="font-montserrat text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="font-playfair text-2xl font-bold mt-2 mb-2 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="font-montserrat text-gray-600">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}