import Image from 'next/image';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 1,
    name: "Destinations",
    description: "Explore popular and hidden gem locations around the world",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&auto=format&fit=crop&q=60",
    slug: "destinations",
    count: 45
  },
  {
    id: 2,
    name: "Travel Tips",
    description: "Expert advice and practical travel guidance",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&auto=format&fit=crop&q=60",
    slug: "tips",
    count: 32
  },
  {
    id: 3,
    name: "Food & Culture",
    description: "Culinary adventures and cultural experiences",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60",
    slug: "food",
    count: 28
  },
  {
    id: 4,
    name: "Adventure",
    description: "Thrilling experiences and outdoor activities",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&auto=format&fit=crop&q=60",
    slug: "adventure",
    count: 35
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
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
          {CATEGORIES.map((category) => (
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