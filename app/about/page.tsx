import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1598324789736-4861f89564a0?w=1200"
          alt="Indian culture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">About Hidden India</h1>
            <p className="font-montserrat text-xl text-gray-200">Unveiling the Untold Stories of Incredible India</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="prose prose-lg">
            <h2 className="font-playfair text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Hidden India is dedicated to unveiling the lesser-known treasures of India's vast and diverse landscape. 
              We believe that beyond the iconic Taj Mahal and bustling streets of Delhi lies a India waiting to be discovered.
            </p>
            <p className="text-gray-700">
              Our mission is to connect travelers with authentic experiences, from remote mountain monasteries to secret 
              coastal villages, from ancient tribal traditions to innovative sustainable communities.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1623069923531-fd9c2d3c6c35?w=1200"
              alt="Traditional Indian culture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1604873343857-62ba54ce9982?w=1200"
                  alt="Cultural experiences"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Curated Travel Guides</h3>
              <p className="text-gray-600">
                Detailed guides to hidden gems, off-beat destinations, and authentic cultural experiences across India.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517427677506-ade074eb1432?w=1200"
                  alt="Local cuisine"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Local Insights</h3>
              <p className="text-gray-600">
                Deep dives into local traditions, festivals, cuisine, and cultural practices that make each region unique.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1200"
                  alt="Photography spots"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Photography Guides</h3>
              <p className="text-gray-600">
                Tips on capturing the perfect shots at hidden photography spots across India's diverse landscapes.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">Promoting responsible and sustainable tourism</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-gray-600">Supporting local communities and traditions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Authenticity</h3>
              <p className="text-gray-600">Showcasing genuine cultural experiences</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Bringing modern perspectives to traditions</p>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Embark on a journey of discovery with us as we explore the hidden treasures of India. 
            Whether you're a curious traveler, photography enthusiast, or culture lover, there's 
            something magical waiting for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}