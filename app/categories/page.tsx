'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES } from './data';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export default function CategoriesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen pb-20 bg-white">
      {/* Back Button */}
    
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?w=1200&auto=format&fit=crop&q=60"
          alt="Categories header"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Explore Categories</h1>
            <p className="font-montserrat text-xl text-gray-200">Find stories that match your interests</p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {CATEGORIES.map((category: Category) => (
            <Link 
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h2 className="font-playfair text-3xl font-bold text-white mb-2">
                  {category.name}
                </h2>
                <p className="font-montserrat text-gray-200 mb-4">
                  {category.description}
                </p>
                <div className="font-montserrat text-sm text-white/80">
                  {category.count} articles
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}