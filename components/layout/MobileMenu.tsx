'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/app/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-xl">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <Image 
                      src={Logo}
                      alt="Hidden India Logo" 
                      width={32} 
                      height={32}
                      className="object-contain"
                    />
                    <span className="font-semibold text-xl">Hidden India</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  {['Blog', 'Categories', 'About', 'Contact'].map((item) => {
                    const path = `/${item.toLowerCase()}`;
                    const isActive = pathname === path;
                    
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={`
                          flex items-center px-6 py-4 text-lg transition-colors
                          ${isActive 
                            ? 'text-orange-500 bg-orange-50' 
                            : 'text-gray-900 hover:bg-gray-50'
                          }
                        `}
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                        {isActive && (
                          <span className="ml-auto">
                            <svg 
                              className="w-5 h-5" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                            </svg>
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="border-t p-4">
                  <p className="text-sm text-gray-500 text-center">
                    Discover India's Hidden Gems
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}