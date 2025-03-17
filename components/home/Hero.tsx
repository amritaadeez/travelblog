"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollDownIndicator from "../common/ScrollDownIndicator";
import { useState, useEffect, useCallback } from "react";

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    alt: "India Gate, New Delhi",
    location: "New Delhi",
  },
  {
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    alt: "Taj Mahal, Agra",
    location: "Agra",
  },
  {
    url: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    alt: "Hawa Mahal, Jaipur",
    location: "Jaipur",
  },
  {
    url: "https://i.pinimg.com/736x/fe/b5/16/feb5165cdc7fc7f722726312c5d35db4.jpg",
    alt: "Varanasi Ghats",
    location: "Varanasi",
  },
  {
    url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    alt: "Gateway of India, Mumbai",
    location: "Mumbai",
  },
  {
    url: "https://images.unsplash.com/photo-1656663785677-bc21fcb531db?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mahabodhi Temple, Bodh Gaya",
    location: "Bodh Gaya",
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out
            ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-orange-500 transition-all duration-500"
          style={{ width: `${((currentImageIndex + 1) / HERO_IMAGES.length) * 100}%` }}
        />
      </div>

      {/* Location Indicator */}
      <div className="absolute md:top-8 md:left-8 bottom-8 left-8 text-white/90 font-light">
        <div className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 text-orange-500"
          >
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span className="text-lg">{HERO_IMAGES[currentImageIndex].location}</span>
        </div>
      </div>

      {/* Image Navigation Dots - Hide on mobile */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${
                currentImageIndex === index
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Incredible India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            From ancient temples to modern metropolises, discover India's rich
            heritage
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

          {/* Stats Section */}
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

      {/* Popular Destinations Carousel - Hide on mobile */}
      <div className="absolute bottom-20 left-0 right-0 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Delhi Card */}
            <div
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border ${
                currentImageIndex === 0
                  ? "border-orange-500 scale-105"
                  : "border-white/10 hover:border-orange-500/50"
              }`}
            >
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Delhi</h3>
                <p className="text-sm text-orange-300 font-medium">
                  The Heart of India
                </p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Experience the blend of old and new in India's capital
                </p>
              </div>
            </div>

            {/* Jaipur Card */}
            <div
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border ${
                currentImageIndex === 2
                  ? "border-orange-500 scale-105"
                  : "border-white/10 hover:border-orange-500/50"
              }`}
            >
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599661046289-e31897846e41')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Jaipur</h3>
                <p className="text-sm text-orange-300 font-medium">
                  The Pink City
                </p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover royal heritage in Rajasthan's capital
                </p>
              </div>
            </div>

            {/* Varanasi Card */}
            <div
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border ${
                currentImageIndex === 3
                  ? "border-orange-500 scale-105"
                  : "border-white/10 hover:border-orange-500/50"
              }`}
            >
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/fe/b5/16/feb5165cdc7fc7f722726312c5d35db4.jpg')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Varanasi</h3>
                <p className="text-sm text-orange-300 font-medium">
                  The Spiritual Capital
                </p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Immerse in ancient spiritual traditions
                </p>
              </div>
            </div>

            {/* Mumbai Card */}
            <div
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/60 backdrop-blur-sm hover:from-black/30 hover:to-black/70 transition-all duration-300 border ${
                currentImageIndex === 4
                  ? "border-orange-500 scale-105"
                  : "border-white/10 hover:border-orange-500/50"
              }`}
            >
              <div className="absolute inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-xl font-bold text-white mb-1">Mumbai</h3>
                <p className="text-sm text-orange-300 font-medium">
                  City of Dreams
                </p>
                <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Experience the vibrant spirit of India's largest city
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Button - Centered on all screens */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <ScrollDownIndicator />
      </div>
    </div>
  );
}
