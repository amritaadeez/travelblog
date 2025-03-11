'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FEATURED_DESTINATIONS = [
  {
    name: "Taj Mahal, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=60",
    description: "Marvel at this iconic symbol of eternal love"
  },
  {
    name: "Varanasi Ghats",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=60",
    description: "Experience spiritual awakening at the holy Ganges"
  },
  {
    name: "Jaipur Palace",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop&q=60",
    description: "Explore the pink city's royal heritage"
  }
];

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                {/* Header Image */}
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&auto=format&fit=crop&q=60"
                    alt="Indian Palace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Message Sent Successfully!
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-gray-900 font-playfair text-center"
                  >
                    Namaste! 🙏
                  </Dialog.Title>
                  <p className="mt-2 text-gray-600 text-center font-montserrat">
                    Thank you for your interest in exploring Incredible India. While we prepare your personalized response, 
                    discover these magnificent destinations.
                  </p>

                  {/* Featured Destinations */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {FEATURED_DESTINATIONS.map((dest, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative h-32 rounded-lg overflow-hidden">
                          <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <h4 className="text-white text-sm font-semibold">{dest.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Facts */}
                  <div className="mt-6 bg-orange-50 rounded-lg p-4">
                    <h4 className="text-orange-800 font-semibold mb-2">Did you know?</h4>
                    <p className="text-sm text-orange-700">
                      India is home to 40 UNESCO World Heritage sites, including the magnificent 
                      Taj Mahal, which took 22 years and 20,000 artisans to complete.
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                    >
                      Continue Exploring India
                    </button>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t">
                  <span className="text-sm text-gray-500">Expected response time: 24 hours</span>
                  <div className="flex items-center space-x-1 text-orange-600">
                    <span className="text-sm">Share your excitement</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}