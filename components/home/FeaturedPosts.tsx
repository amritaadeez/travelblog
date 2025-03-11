import Image from 'next/image';
import Link from 'next/link';

const FEATURED_POSTS = [
  {
    id: 1,
    title: "The Majestic Taj Mahal at Sunrise",
    excerpt: "Experience the breathtaking beauty of India's most iconic monument in the golden morning light.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&auto=format&fit=crop&q=60",
    slug: "taj-mahal-sunrise-guide"
  },
  {
    id: 2,
    title: "Kerala's Backwaters: A Serene Journey",
    excerpt: "Drift through the tranquil waterways of God's Own Country on traditional houseboats.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop&q=60",
    slug: "kerala-backwaters-guide"
  }
];

export default function FeaturedPosts() {
  return (
    <section className="py-12">
      <h2 className="font-playfair text-3xl font-bold mb-8">Featured Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {FEATURED_POSTS.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.id}
            className="group"
          >
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-blue-600">
              {post.title}
            </h3>
            <p className="text-gray-600">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}