"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CITY_THEMES } from "../data";

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  const cityTheme = CITY_THEMES[slug as keyof typeof CITY_THEMES];

  console.log(cityTheme)
  if (!cityTheme) {
    return <div>City not found</div>;
  }

  return (
    // Add min-h-screen and pb-20 to ensure content doesn't overlap with footer
    <div className="min-h-screen pb-20">

      {/* Hero Section */}
      <div
        className={`relative h-[70vh] bg-gradient-to-r ${cityTheme.primaryColor}`}
      >
        {/* Back Arrow */}
        <button 
          onClick={() => router.back()}
          className="absolute top-24 left-6 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 flex items-center justify-center"
          aria-label="Go back"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>

        <Image
          src={cityTheme.headerImage}
          alt={`${slug} cityscape`}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-6xl font-bold mb-4 font-playfair">
              {cityTheme.title}
            </h1>
            <p className="text-xl font-montserrat">{cityTheme.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed">
            {cityTheme.description}
          </p>
        </div>
      </section>

      {/* Historical Timeline - Only render if history data exists */}
      {cityTheme.history && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 font-playfair">
              {cityTheme.history.title}
            </h2>
            <p className="text-gray-700 mb-8">{cityTheme.history.content}</p>
            <div className="space-y-4">
              {cityTheme.history.timeline?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="font-bold text-orange-600 w-20">
                    {item.year}
                  </div>
                  <div className="flex-1 text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Festivals & Celebrations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.festivals.map((festival, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{festival.description}</p>
                  {festival.timing && (
                    <div className="text-sm">
                      <p className="text-orange-600">{festival.timing}</p>
                      <p className="text-gray-500">
                        Duration: {festival.duration}
                      </p>
                      {festival.highlights && (
                        <ul className="mt-2 space-y-1">
                          {festival.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-600">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Cuisine */}
      {cityTheme.cuisine && cityTheme.cuisine.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Local Cuisine
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.cuisine.map((dish, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transportation Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
            {cityTheme.transportation.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cityTheme.transportation.options.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{option.mode}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500">Tip: {option.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
            Where to Stay
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Luxury</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.luxury.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold">{hotel.name}</h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-gray-600">Price: {hotel.priceRange}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mid-Range</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.midRange.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold">{hotel.name}</h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-gray-600">Price: {hotel.priceRange}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Budget</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.budget.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold">{hotel.name}</h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-gray-600">Price: {hotel.priceRange}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
