import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Travel Blog</h3>
            <p className="text-gray-600">
              Exploring the world one story at a time.
            </p>
            <p className="text-gray-600 mt-2">
              Greater Noida, India
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://amritraj.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:amrtrj68@gmail.com" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  amrtrj68@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918789371964" className="text-gray-600 hover:text-gray-900">
                  +91 8789371964
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://www.linkedin.com/in/amrit-raj-611447128/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://github.com/amritaadeez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a 
                href="https://www.instagram.com/_amrit_itsaadeez/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a 
                href="https://x.com/amrtrj68" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/contact"
            className="relative inline-block px-8 py-3 bg-transparent border-2 border-gray-600 text-gray-600 rounded-full font-semibold hover:bg-gray-600 hover:text-white transition-colors text-center group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-y-full bg-gray-600 group-hover:translate-y-0"></span>
            <span className="relative group-hover:text-white">Let's Connect</span>
          </Link>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Amrit Raj. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}