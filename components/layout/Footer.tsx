"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import hiddenIndia from "../../app/logo.png";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Globe,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "States", href: "/states" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="bg-gradient-to-b from-white to-orange-50/30  border-t-2 border-orange-200">
      {/* Connect Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <Link
                  href="/"
                  className="group flex items-center gap-3 text-3xl md:text-4xl text-white font-bold mb-4 group inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full 
                    font-semibold text-lg text-orange-500 shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:bg-orange-50"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={hiddenIndia}
                      alt="Hidden India"
                      width={36}
                      height={36}
                      className="rounded-full shadow-md group-hover:shadow-lg transition-shadow"
                    />
                  </motion.div>
                  <span className="text-orange-500 text-xl md:text-2xl font-semibold">
                    Hidden India
                  </span>
                </Link>
                <h2 className="text-3xl md:text-4xl font-playfair text-white font-bold mb-4">
                  Ready to Explore India?
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                  Join us on a journey to discover the hidden treasures of
                  India. Let's create unforgettable memories together.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full 
                    font-semibold text-lg text-orange-500 shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:bg-orange-50"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  Let's Connect
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-0 pb-8">
        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t-2 border-orange-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact Buttons */}

            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Hidden India. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
            <a
                href="mailto:amrtrj68@gmail.com"
                className="flex items-center justify-center gap-3 px-6 rounded-full
                  bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white
                  transition-all duration-300"
              >
                <Mail size={16} />
                <span className="hidden md:inline">amrtrj68@gmail.com</span>
              </a>
              <a
                href="tel:+918789371964"
                className="flex items-center justify-center gap-3 px-6 rounded-full
                  bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white
                  transition-all duration-300"
              >
                <Phone size={15} />
                <span className="hidden md:inline">+91 8789371964</span>
              </a>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-orange-50 text-orange-500
                    hover:bg-orange-500 hover:text-white
                    transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
