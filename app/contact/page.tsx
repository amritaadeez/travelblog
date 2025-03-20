import ContactForm from '@/components/contact/ContactForm';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1470074558764-4e577e98bc85?w=1200&auto=format&fit=crop&q=60"
          alt="Contact header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="font-montserrat text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Have questions about India's hidden treasures? We'd love to hear from you and help plan your next adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Modified cards with image backgrounds */}
            <div className="relative overflow-hidden rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d"
                  alt="Location background"
                  fill
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 to-orange-50/80" />
              </div>
              <div className="relative">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h5 className="font-playfair font-semibold mb-2">Location</h5>
                <p className="text-gray-600">Greater Noida, India</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                  alt="Email background"
                  fill
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 to-orange-50/80" />
              </div>
              <div className="relative">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <h5 className="font-playfair font-semibold mb-2">Email</h5>
                <a href="mailto:amrtrj68@gmail.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                  amrtrj68@gmail.com
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1606298855672-3efb63017be8"
                  alt="Phone background"
                  fill
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 to-orange-50/80" />
              </div>
              <div className="relative">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <h5 className="font-playfair font-semibold mb-2">Phone</h5>
                <a href="tel:+918789371964" className="text-gray-600 hover:text-orange-600 transition-colors">
                  +91 8789371964
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073"
                  alt="Hours background"
                  fill
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 to-orange-50/80" />
              </div>
              <div className="relative">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h5 className="font-playfair font-semibold mb-2">Hours</h5>
                <p className="text-gray-600">24/7 Online Support</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-4">Let's Start a Conversation</h2>
                <p className="text-gray-600">
                  Whether you're curious about Indian culture, planning a trip, or want to collaborate, 
                  we're here to help. Fill out the form, and we'll be in touch as soon as possible.
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-xl p-6">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d"
                    alt="Why Connect background"
                    fill
                    className="object-cover opacity-5"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-50/95 to-orange-50/90" />
                </div>
                <div className="relative">
                  <h5 className="font-playfair font-semibold mb-4">Why Connect With Us?</h5>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Expert travel insights
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Cultural experience planning
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Photography opportunities
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Local guides and tips
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="relative overflow-hidden rounded-xl p-6 md:p-8">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1606298855672-3efb63017be8"
                  alt="Form background"
                  fill
                  className="object-cover opacity-5"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/95 to-gray-50/90" />
              </div>
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



