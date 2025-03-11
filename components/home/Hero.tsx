import Image from 'next/image';
import Link from 'next/link';
import ScrollDownIndicator from '../common/ScrollDownIndicator';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&auto=format&fit=crop&q=60"
        alt="India Gate, New Delhi"
        fill
        className="object-cover w-full"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Incredible India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            From ancient temples to modern metropolises, discover India's rich heritage
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 animate-fade-in-delay-2 w-full sm:w-auto">
            <Link
              href="/blog"
              className="w-full sm:w-[200px] px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors text-center"
            >
              Explore Cities
            </Link>
            <Link
              href="/categories"
              className="w-full sm:w-[200px] px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Travel Guides
            </Link>
          </div>

          {/* Stats Section - Moved here */}
          <div className="mt-16 flex justify-center space-x-12 text-white/90">
            <div className="text-center">
              <div className="font-bold text-4xl mb-1">28+</div>
              <div className="text-sm text-gray-300">States</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-4xl mb-1">40+</div>
              <div className="text-sm text-gray-300">UNESCO Sites</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-4xl mb-1">1000+</div>
              <div className="text-sm text-gray-300">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Carousel */}
      <div className="absolute bottom-20 left-0 right-0 px-4">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-white text-2xl font-playfair font-bold mb-6 text-center">Popular Destinations</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border border-white/10 hover:border-orange-500/50">
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Delhi</h3>
                <p className="text-sm text-orange-300 font-medium">The Heart of India</p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Experience the blend of old and new in India's capital</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border border-white/10 hover:border-orange-500/50">
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599661046289-e31897846e41')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Jaipur</h3>
                <p className="text-sm text-orange-300 font-medium">The Pink City</p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Discover royal heritage in Rajasthan's capital</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border border-white/10 hover:border-orange-500/50">
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561361513-2d000a50f0dc')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Varanasi</h3>
                <p className="text-sm text-orange-300 font-medium">The Spiritual Capital</p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Immerse in ancient spiritual traditions</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border border-white/10 hover:border-orange-500/50">
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Mumbai</h3>
                <p className="text-sm text-orange-300 font-medium">City of Dreams</p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Experience the vibrant spirit of India's largest city</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <ScrollDownIndicator className="bottom-0" />
      </div>
    </div>
  );
}