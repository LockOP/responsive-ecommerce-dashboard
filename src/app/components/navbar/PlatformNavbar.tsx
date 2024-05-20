"use client";
import React from "react";
import NextLink from "next/link";

type Props = {};

const PlatformNavbar = (props: Props) => {
  return (
    <nav className="w-full h-[100px] bg-[#FFFFFF] sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div>
          <div className="inline-flex items-baseline">
            <NextLink href="/">
              <div className="flex text-[14px] text-[#463F4B] font-light">
                Main menu {">"}
              </div>
            </NextLink>
            <NextLink href="/">
              <div className="flex text-[14px] text-[#463F4B] font-light px-2">
                Modules {">"}
              </div>
            </NextLink>
            <NextLink href="/">
              <div className="text-[16px] text-slate-800">Finance</div>
            </NextLink>
          </div>
          <div className="text-2xl text-slate-800 font-semibold">
            Integrations manager
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NextLink href="/">
            <img src="../Hprofile.svg" alt="" />
          </NextLink>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PlatformNavbar;
