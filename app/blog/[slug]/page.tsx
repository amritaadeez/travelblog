"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { CITY_THEMES } from "../data";

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  const cityTheme = CITY_THEMES[slug as keyof typeof CITY_THEMES];

  if (!cityTheme) {
    return <div>City not found</div>;
  }

  return (
    <div className="min-h-screen pb-20">
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
          src={cityTheme.headerImage}
          alt={`${slug} cityscape`}
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
                Travel Guide
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-5xl md:text-7xl font-bold mb-6"
            >
              {cityTheme.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-montserrat text-xl text-gray-200 max-w-2xl mx-auto"
            >
              {cityTheme.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed font-montserrat">
            {cityTheme.description}
          </p>
        </div>
      </motion.section>

      {/* Historical Timeline */}
      {cityTheme.history && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              {cityTheme.history.title}
            </h2>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              {cityTheme.history.content}
            </p>
            <div className="space-y-4 mt-12">
              {cityTheme.history.timeline?.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-bold text-orange-600 w-24 flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="flex-1 text-gray-700">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Cultural Spots */}
      {cityTheme?.culturalSpots && cityTheme.culturalSpots.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Cultural Heritage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.culturalSpots.map((spot, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                    <p className="text-gray-600 mb-4">{spot.description}</p>
                    {spot.location && (
                      <div className="text-sm text-gray-500">
                        <p>
                          <strong>Location:</strong> {spot.location}
                        </p>
                        <p>
                          <strong>Hours:</strong> {spot.visitingHours}
                        </p>
                        <p>
                          <strong>Best Time:</strong> {spot.bestTime}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Festivals */}
      {cityTheme.festivals && cityTheme.festivals.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 font-playfair text-center">
              Festivals & Celebrations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.festivals.map((festival, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{festival.description}</p>
                  {festival.timing && (
                    <div className="text-sm space-y-2 pt-4 border-t border-gray-100">
                      <p className="text-orange-600 font-medium">{festival.timing}</p>
                      <p className="text-gray-500">Duration: {festival.duration}</p>
                      {festival.highlights && (
                        <ul className="mt-2 space-y-1 text-gray-600">
                          {festival.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Local Cuisine */}
      {cityTheme.cuisine && cityTheme.cuisine.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 font-playfair text-center">
              Local Cuisine
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.cuisine.map((dish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Transportation Guide */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-playfair text-center">
            {cityTheme.transportation.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cityTheme.transportation.options.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {option.mode}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500 italic">Tip: {option.tips}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Accommodation */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-playfair text-center">
            Where to Stay
          </h2>
          <div className="space-y-12">
            {/* Luxury Hotels */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Luxury</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.luxury.map((hotel, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">
                      {hotel.name}
                    </h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-orange-600 font-medium">
                      Price: {hotel.priceRange}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Budget Hotels */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Budget</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.budget.map((hotel, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">
                      {hotel.name}
                    </h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-orange-600 font-medium">
                      Price: {hotel.priceRange}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
