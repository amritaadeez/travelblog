import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Hidden India</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Hidden India is your gateway to discovering the unexplored treasures of India's diverse landscape, rich culture, and ancient heritage.
          </p>
          
          <div className="relative h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
              alt="Indian landscape"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-8">
            We aim to showcase the lesser-known wonders of India, connecting travelers with authentic experiences and helping them discover the heart and soul of this incredible country.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="space-y-4 mb-8">
            <li>✨ Curated travel guides</li>
            <li>🏛️ Cultural insights</li>
            <li>🍜 Local food recommendations</li>
            <li>📸 Photography spots</li>
          </ul>
        </div>
      </div>
    </div>
  );
}