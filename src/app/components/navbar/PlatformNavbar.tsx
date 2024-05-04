"use client"
import React, { useEffect, useRef } from 'react';
import NextLink from 'next/link';
import { gsap } from 'gsap';

type Props = {}

const PlatformNavbar = (props: Props) => {
    
    return (
<nav className="w-full h-[100px] bg-slate-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <NextLink href="/">
            <div className="flex text-base text-slate-600 font-semibold gap-1">Main menu {">"} Modules {">"} <div className='text-slate-800'> Finance </div></div>
            <div className="text-2xl text-slate-800 font-semibold">
            Integrations manager
            </div>
          </NextLink>
    
        </div>
        <div className="hidden md:flex items-center space-x-4">
          
          
          <NextLink href="/">
            <img src="../Profil.svg" alt="" />
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
      
    </nav>
    )
}

export default PlatformNavbar