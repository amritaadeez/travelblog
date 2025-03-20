'use client';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Star, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data';

// Sample background patterns for different sections
const DECORATIVE_IMAGES = {
  heritage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d", // Taj Mahal
  culture: "https://images.unsplash.com/photo-1545350028-315fd0d9a9ca", // Indian Festival
  food: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af", // Indian Spices
};

export default function CategoryDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  
  const category = CATEGORIES.find(cat => cat.slug === slug);
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Floating Back Button */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="fixed top-24 left-6 z-50 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-orange-50 transition-all duration-300 group"
        aria-label="Go back"
      >
        <ArrowLeft size={24} className="text-orange-600 group-hover:translate-x-[-2px] transition-transform" />
      </motion.button>

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <Image
          src={category.image || "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                Explore
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-5xl md:text-7xl font-bold mb-6"
            >
              {category.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-montserrat text-xl text-gray-200 max-w-2xl mx-auto"
            >
              {category.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src={DECORATIVE_IMAGES.heritage}
            alt="Decorative background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Heritage Sites Section */}
          {category.subcategories && (
            <section className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="text-orange-500 font-semibold mb-4 block">
                  DISCOVER
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                  Heritage Sites
                </h2>
                <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.subcategories[0]?.places.map((place, index) => (
                  <motion.div
                    key={place.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-300">
                      <Image
                        src={place.image}
                        alt={place.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-playfair text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                          {place.name}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">
                          {place.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} className="text-orange-400" />
                            <span>{place.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-orange-400" />
                            <span>{place.bestTime}</span>
                          </div>
                          {place.rating && (
                            <div className="flex items-center gap-1">
                              <Star size={16} className="text-orange-400" />
                              <span>{place.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Travel Guides Section */}
          {category.categories && (
            <section className="mb-20 relative">
              <div className="absolute inset-0 bg-gray-50 -mx-4 rounded-3xl"></div>
              <div className="relative py-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <span className="text-orange-500 font-semibold mb-4 block">
                    GUIDES
                  </span>
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                    Travel Guides
                  </h2>
                  <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.categories.map((cat, index) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                    >
                      <h3 className="font-playfair text-2xl font-bold mb-6 text-gray-800">
                        {cat.name}
                      </h3>
                      <div className="space-y-6">
                        {cat.guides.map((guide) => (
                          <div 
                            key={guide.title} 
                            className="border-l-4 border-orange-500 pl-4 hover:border-orange-600 transition-colors"
                          >
                            <h4 className="font-bold text-lg mb-2 text-gray-800">
                              {guide.title}
                            </h4>
                            <p className="text-gray-600 mb-3">
                              {guide.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {guide.topics.map((topic) => (
                                <span 
                                  key={topic}
                                  className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regional Cuisines Section */}
          {category.sections && (
            <section className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="text-orange-500 font-semibold mb-4 block">
                  TASTE
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                  Regional Cuisines
                </h2>
                <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              </motion.div>

              {category.sections[0]?.cuisines?.map((cuisine, index) => (
                <div key={cuisine.region} className="mb-16">
                  <h3 className="font-playfair text-3xl font-bold mb-8 text-center">
                    {cuisine.region}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cuisine.dishes.map((dish, dishIndex) => (
                      <motion.div
                        key={dish.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: dishIndex * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                            <h4 className="font-playfair text-xl font-bold mb-2">
                              {dish.name}
                            </h4>
                            <p className="text-sm text-gray-200">
                              {dish.description}
                            </p>
                            <span className="inline-block mt-2 text-orange-400 text-sm">
                              Origin: {dish.origin}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
