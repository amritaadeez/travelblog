import Image from 'next/image';
import Link from 'next/link';

const RECENT_POSTS = [
  {
    id: 1,
    title: "48 Hours in Delhi: A Capital Adventure",
    excerpt: "Explore the perfect blend of Old and New Delhi, from historic monuments to modern markets.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-15",
    slug: "delhi"
  },
  {
    id: 2,
    title: "Jaipur: The Pink City's Royal Heritage",
    excerpt: "Discover the majestic palaces, vibrant bazaars, and rich culture of Rajasthan's capital.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-10",
    slug: "jaipur"
  },
  {
    id: 3,
    title: "Spiritual Journey Through Varanasi",
    excerpt: "Experience the mystical ghats, ancient temples, and sacred rituals of India's oldest city.",
    image: "https://i.pinimg.com/736x/fe/b5/16/feb5165cdc7fc7f722726312c5d35db4.jpg",
    date: "2024-03-05",
    slug: "varanasi"
  }
];

export default function RecentPosts() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-playfair text-3xl font-bold">Recent Posts</h2>
        <Link 
          href="/blog" 
          className="text-blue-600 hover:text-blue-800"
        >
          View all posts →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {RECENT_POSTS.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <h3 className="font-playfair text-xl font-semibold mt-2 mb-2 group-hover:text-blue-600">
                {post.title}
              </h3>
              <p className="text-gray-600">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}