// Import required modules
import React, { useEffect, useRef } from 'react';
import NextLink from 'next/link';
import { gsap } from 'gsap';

const Navbar = () => {
  const navbarRef = useRef();
  const lastScrollTop = useRef(0); // Keep track of the last scroll position

  useEffect(() => {
    gsap.set(navbarRef.current, { autoAlpha: 1 }); // Set initial opacity

    const handleScroll = () => {
      const scrollDown = window.scrollY > lastScrollTop.current; // Check scroll direction
      if (scrollDown && window.scrollY > 100) {
        // Scroll down - hide navbar
        gsap.to(navbarRef.current, { y: -100, autoAlpha: 0 });
      } else {
        // Scroll up - show navbar
        gsap.to(navbarRef.current, { y: 0, autoAlpha: 1 });
      }
      lastScrollTop.current = window.scrollY <= 0 ? 0 : window.scrollY; // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the effect
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
    ref={navbarRef}
    className="w-full h-[100px] bg-slate-50 fixed top-0 z-50"
    style={{ top: 0 }} // Ensure the navbar starts at the top
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <NextLink href="/">
            <div className="flex-shrink-0">
              <img className="w-auto h-5" src="/omnilogo.svg" alt="Logo" />
            </div>
          </NextLink>
          <div className="hidden md:block ml-4">
            <div className="flex space-x-4">
              <NextLink href="/">
              <div className="hover:text-blue-700 text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Features</div>
              </NextLink>
              <NextLink href="/about">
                <div className=" hover:text-blue-700 text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</div>
              </NextLink>
              <NextLink href="/services">
                <div className=" hover:text-blue-700 text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Resources</div>
              </NextLink>
              <NextLink href="/">
                <div className=" hover:text-blue-700 text-slate-600 px-3 py-2 rounded-md text-sm font-medium">Careers</div>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          
          <NextLink href="/login">
          <div className="bg-transparent text-slate-600 hover:bg-customBlue hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log in</div>
          </NextLink>
          <NextLink href="/register">
            <div className="bg-customBlue text-white px-4 py-2 rounded-md text-sm font-medium">Create account</div>
          </NextLink>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="text-gray-200 hover:text-white focus:outline-none focus:text-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NextLink href="/">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</div>
          </NextLink>
          <NextLink href="/about">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</div>
          </NextLink>
          <NextLink href="/services">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</div>
          </NextLink>
          <NextLink href="/contact">
            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</div>
          </NextLink>
        </div>
      </div>
    </nav>
  );
}

// Export Navbar component as default
export default Navbar;
