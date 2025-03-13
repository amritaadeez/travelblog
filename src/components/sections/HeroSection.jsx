import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Developer & Designer</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;