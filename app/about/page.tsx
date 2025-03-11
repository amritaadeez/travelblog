import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&auto=format&fit=crop&q=60"
          alt="About header"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="font-montserrat text-xl text-gray-200">Our story and mission</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-playfair text-3xl font-bold mb-6">Our Journey</h2>
            <p className="font-montserrat text-gray-600 mb-8">
              Founded by a group of passionate travelers, our blog aims to inspire and guide fellow adventurers 
              through detailed travel stories, practical tips, and authentic experiences from around the world.
            </p>

            <h2 className="font-playfair text-3xl font-bold mb-6">Our Mission</h2>
            <p className="font-montserrat text-gray-600 mb-8">
              We believe that travel has the power to transform lives, broaden perspectives, and create lasting 
              connections. Our mission is to make meaningful travel experiences accessible to everyone through 
              comprehensive guides, authentic storytelling, and practical advice.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-blue-600 mb-2">50+</div>
                <div className="font-montserrat text-gray-600">Countries Visited</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-blue-600 mb-2">100k+</div>
                <div className="font-montserrat text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-blue-600 mb-2">500+</div>
                <div className="font-montserrat text-gray-600">Travel Stories</div>
              </div>
            </div>

            <h2 className="font-playfair text-3xl font-bold mb-6">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60"
                    alt="John Doe"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold">John Doe</h3>
                <p className="font-montserrat text-gray-600">Founder & Lead Writer</p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
                    alt="Jane Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold">Jane Smith</h3>
                <p className="font-montserrat text-gray-600">Travel Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}