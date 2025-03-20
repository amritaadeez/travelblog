'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Users, Camera, Calendar, Award, TrendingUp } from 'lucide-react';
import heroImage from '../../public/images/hero-bg.jpg';
import amritImage from '../image.png'
export default function AboutPage() {
  const stats = [
    { number: '100K+', label: 'Monthly Readers' },
    { number: '500+', label: 'Hidden Gems' },
    { number: '28', label: 'States Covered' },
    { number: '1000+', label: 'Travel Stories' }
  ];

  const team = [
    {
      name: 'Amrit Raj',
      role: 'Founder & Lead Explorer',
      image: amritImage,
      bio: 'Passionate traveler with 5+ years of exploring Indian culture',
      social: {
        instagram: 'https://www.instagram.com/_amrit_itsaadeez/',
        facebook: 'https://www.facebook.com/amritraj.official',
        portfolio: 'https://amritraj.in',
        github: 'https://github.com/amritaadeez',
        linkedin: 'https://www.linkedin.com/in/amrit-raj-611447128/'
      },
      contact: {
        email: 'amrtrj68@gmail.com',
        phone: '+91 8789371964'
      }
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Travel Blog',
      description: 'Awarded by Indian Tourism Board'
    },
    {
      year: '2022',
      title: 'Cultural Preservation Award',
      description: 'Recognition for promoting local heritage'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Cultural Elements */}
      <section className="relative h-[100vh]">
        <Image
          src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=2070&auto=format&fit=crop"
          alt="Indian Cultural Heritage"
          fill
          priority
          className="object-cover"
        />
        {/* Enhanced Gradient Overlay with Cultural Colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/80" />
        
        {/* Decorative Cultural Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Decorative Element - Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center mb-8"
              >
                <div className="w-24 h-1 bg-orange-500 rounded-full" />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-7xl font-playfair font-bold text-white mb-6"
              >
                Discovering India's
                <span className="block mt-2">
                  <span className="text-orange-500">Sacred</span> Heritage
                </span>
              </motion.h1>

              {/* Decorative Sanskrit Symbol */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center my-8"
              >
                <div className="text-orange-500 text-2xl font-sanskrit">
                  ॐ
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block text-xl md:text-2xl text-gray-200 mb-8 font-montserrat leading-relaxed"
              >
                Embark on a spiritual journey through the mystical lands of India, 
                where ancient traditions blend seamlessly with modern aspirations.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex gap-6 justify-center"
              >
                <Link 
                  href="#our-story"
                  className="bg-orange-500 text-white px-8 py-4 rounded-full 
                    hover:bg-orange-600 transition-all duration-300 text-lg 
                    transform hover:scale-105 hover:shadow-lg
                    border-2 border-orange-400"
                >
                  Explore Our Journey
                </Link>
                <Link 
                  href="#join-us"
                  className="bg-transparent text-white px-8 py-4 
                    rounded-full hover:bg-white/10 transition-all duration-300 
                    text-lg transform hover:scale-105
                    border-2 border-white/30 hover:border-white/50"
                >
                  Join Our Mission
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-4 font-montserrat">Scroll to Explore</span>
            <div className="w-[2px] h-16 bg-white/20 relative overflow-hidden rounded-full">
              <motion.div 
                className="w-full h-1/2 bg-orange-500"
                animate={{ 
                  y: [0, 32, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Decorative Side Elements */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-orange-500/50 to-transparent" />
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-orange-500/50 to-transparent" />
        </div>
      </section>

      {/* Stats Section - Enhanced with better visual hierarchy */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 border-2 border-orange-500/10 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Enhanced with better visuals */}
      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Hidden India began as a passion project in 2020, born from our deep love 
                for India's lesser-known wonders. What started as personal travel journals 
                has evolved into a comprehensive guide to India's hidden gems.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Today, we're a community of explorers, storytellers, and culture 
                enthusiasts dedicated to showcasing the authentic essence of India 
                through immersive experiences and compelling narratives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Camera className="text-orange-500" />
                  <span className="text-gray-700">Visual Storytelling</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-orange-500" />
                  <span className="text-gray-700">Local Insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-orange-500" />
                  <span className="text-gray-700">Community Driven</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-orange-500" />
                  <span className="text-gray-700">Regular Updates</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://i.pinimg.com/736x/00/20/d8/0020d8e4f4193adfa6afd3f4a3f47aba.jpg"
                alt="Our Journey"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-20 h-1 bg-orange-500 mb-6" />
                <p className="text-white text-xl font-montserrat">
                  Exploring the untold stories of India
                </p>
              </div>
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl m-4" />
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-24 h-24 border-t-2 border-r-2 border-orange-500 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-24 h-24 border-b-2 border-l-2 border-orange-500 rounded-bl-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Meet the <span className="text-orange-500">Creator</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Passionate about uncovering India's hidden treasures and sharing authentic stories
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 md:w-56 md:h-56 relative">
                    <Image
                      src={amritImage}
                      alt="Amrit Raj"
                      fill
                      className="object-cover rounded-2xl ring-4 ring-orange-500/20"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white p-3 rounded-lg">
                      <Camera className="w-6 h-6" />
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-orange-500/10 rounded-2xl" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <h3 className="text-3xl font-bold">Amrit Raj</h3>
                    <div className="h-6 w-1 bg-orange-500 rounded-full" />
                    <span className="text-orange-500 font-medium">Founder</span>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    A passionate explorer with 5+ years of experience traversing the diverse landscapes of India. 
                    Dedicated to uncovering hidden gems and sharing authentic cultural experiences through compelling storytelling.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-orange-500">5+</div>
                      <div className="text-gray-600">Years Exploring</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-orange-500">100+</div>
                      <div className="text-gray-600">Places Visited</div>
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-orange-500">1000+</div>
                      <div className="text-gray-600">Stories Shared</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a
                      href="https://www.instagram.com/_amrit_itsaadeez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      Instagram
                    </a>
                    <a
                      href="https://github.com/amritaadeez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amrit-raj-611447128/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://amritraj.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section - Enhanced */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16"
          >
            Our <span className="text-orange-500">Achievements</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <Award className="text-orange-500 w-12 h-12 mb-4" />
                <div className="text-orange-500 text-lg mb-2">{achievement.year}</div>
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section - Completely Redesigned */}
      <section id="join-us" className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-12"
            >
              <div className="text-center mb-12">
                <h4 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Join Our <span className="text-orange-500">Journey</span>
                </h4>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Be part of our growing community of explorers and help us showcase 
                  India's hidden treasures to the world.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 rounded-xl bg-orange-50">
                  <Users className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                  <h6 className="font-semibold mb-2">Join Community</h6>
                  <p className="text-sm text-gray-600">Connect with fellow explorers</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-orange-50">
                  <Camera className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                  <h6 className="font-semibold mb-2">Share Stories</h6>
                  <p className="text-sm text-gray-600">Document your adventures</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-orange-50">
                  <TrendingUp className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                  <h6 className="font-semibold mb-2">Grow Together</h6>
                  <p className="text-sm text-gray-600">Build your travel influence</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 
                    text-white px-8 py-4 rounded-full font-semibold text-lg
                    transform hover:scale-105 transition-all duration-300
                    shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}








