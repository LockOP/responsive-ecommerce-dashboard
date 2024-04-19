import React from 'react'
import NextLink from 'next/link';

type Props = {}

const Navbarwebbuilder = (props: Props) => {
  return (
    <nav className="w-full h-[100px] bg-slate-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center">
          <NextLink href="/">
            <div className="text-2xl text-slate-800 font-semibold">
                   Website Builder
            </div>
          </NextLink>
    
        </div>
        <div className="hidden md:flex items-center space-x-4">
          
          <NextLink href="/upgradeplan">
            <div className="flex bg-white border border-slate-400  text-sm text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text px-3 py-2 rounded-md font-medium gap-1">
                <img src="star.svg" alt="" />Upgrade plan
                </div>
          </NextLink>
          <NextLink href="/">
            <img src="./Profil.png" alt="" />
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

export default Navbarwebbuilder