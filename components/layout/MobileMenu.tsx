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
            <Dialog.Panel className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d" // Taj Mahal at sunset
                  alt="Indian Architecture"
                  fill
                  className="object-cover opacity-10"
                  priority
                />
              </div>

              <div className="flex flex-col h-full relative">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-white/80 backdrop-blur-sm">
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
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-4 py-3 rounded-lg transition-colors
                          ${pathname === item.path 
                            ? 'bg-orange-500 text-white' 
                            : 'hover:bg-gray-100/80 text-gray-900'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t bg-white/80 backdrop-blur-sm">
                  <p className="text-sm text-gray-600 text-center">
                    Discover the hidden gems of India
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
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'States', path: '/states' },
  { label: 'Categories', path: '/categories' },
  { label: 'About', path: '/about' },
];
