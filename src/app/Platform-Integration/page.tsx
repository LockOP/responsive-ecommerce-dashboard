"use client";
import { useEffect, useRef, useState } from "react";
import NextLink from 'next/link';
import PlatformNavbar from '../components/navbar/PlatformNavbar'
import PlatformSidebar from '../components/navbar/Sidenav'

type Props = {}

const PlatformIntegration = (props: Props) => {
  const [status, setStatus] = useState("");
  const [stores, setStores] = useState("");
  const [moreFilters, setMoreFilters] = useState("");

  function SearchBar({ search, setSearch }: { search: string; setSearch: any }) {
    return (
      <div className="rounded-[10px] h-11 w-full flex flex-row justify-center items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border">
        <img
          src="/searchSB.svg"
          alt=""
          className="absolute left-4 select-none pointer-events-none"
        />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="w-full pl-14 py-4 pr-4 h-full p-4 bg-transparent focus:outline-none placeholder:text-[#54577A]  placeholder:text-[14px] placeholder:font-semibold text-[14px] font-semibold text-[#54577A]"
          placeholder="Search"
        />
      </div>
    );
  }
  
  function DropDown({
    selected,
    setSelected,
    label,
    options,
  }: {
    selected: string;
    setSelected: any;
    label: string;
    options: string[];
  }) {
    const [open, setOpen] = useState(false);
    const DropDownRef = useRef<HTMLDivElement>(null);
  
    const handleClickOutside = (event: MouseEvent) => {
      if (
        DropDownRef.current &&
        !DropDownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return (
      <div
        ref={DropDownRef}
        key={"dd" + label}
        onClick={() => setOpen(!open)}
        className="shrink-0 rounded-[10px] h-11 flex flex-row items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border group px-4 gap-2 hover:border-[#9ba1d1] cursor-pointer"
      >
        <p className="select-none pointer-events-none text-[14px] font-semibold text-[#54577A]">
          {label}
        </p>
        <img src="/ArrowDown.svg" />
        <div
          className={`absolute z-[20] w-[150px] block box-border top-1 right-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] group-hover:border-[#9ba1d1] ${
            open
              ? "opacity-100 pointer-events-auto translate-y-11"
              : "opacity-0 pointer-events-none translate-y-[-14px]"
          }`}
        >
          {options.map((option, index) => {
            return (
              <button
                onClick={() => {
                  setSelected(option);
                }}
                key={index}
                className={`w-full text-ellipsis px-4 py-[14px] hover:bg-[#F2F4F7] select-none text-[14px] font-semibold text-[#54577A] rounded-[10px] ${
                  selected === option ? "bg-[#F2F4F7]" : ""
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-200 h-screen ">
      <div className="flex h-full">
        <PlatformSidebar/>
        <div className='flex flex-col bg-slate-50 gap-4 py-8 px-3'>
          <div className='flex flex-col gap-2'>
            <div className='text-lg font-semibold'>General</div>
            <div className='text-sm font-normal text-slate-400'>Account Information</div>
            <div className='text-sm font-normal '>Billing Information</div>
            <div className='text-sm font-normal '>Subscription Plan</div>
            <div className='text-sm font-normal'>Location</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-lg font-semibold'>Manage Team</div>
            <div className='text-sm font-normal '>Invite Members</div>
            <div className='text-sm font-normal '>Customize Roles</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-lg font-semibold'>Manage Accounts</div>
            <div className='text-sm font-normal '>Existing Accounts</div>
            <div className='text-sm font-normal '>Integrate New Accounts</div>
          </div>
          
        </div>
        <div className="flex flex-col flex-1 overflow-hidden ml-1">
          <PlatformNavbar />
          <div className="flex flex-col  p-5  gap-4">
            <div className="flex flex-col bg-slate-50 rounded-md p-8 h-[40%] gap-2">
              <div className="text-2xl text-slate-800 font-semibold">Integrate a new platform</div>
              <div className="text-base text-slate-500 font-normal ">Add a new selling platform to your account.</div>
              <div className='flex gap-4'>
                <div className='flex py-3 w-[210px] px-3 font-semibold border border-slate-400 rounded-xl text-slate-500 gap-2'> <img src="../searchicon.svg" alt="" />
                <input placeholder='Search' className='bg-slate-50 w-full border-none focus:outline-none text-slate-500'/>
              </div>
              <DropDown
                label="Status"
                options={["Available", "Coming Soon", "Not Available"]}
                selected={status}
                setSelected={setStatus}
              /> 
              <DropDown
              label="Stores"
              options={["Nearby", "City", "State"]}
              selected={stores}
              setSelected={setStores}
              />
              <DropDown
              label="More Filters"
              options={["Filter 1", "Filter 2", "Filter 3", "Filter 4"]}
              selected={moreFilters}
              setSelected={setMoreFilters}
              />              
            </div>
              
            </div>
            <div className="flex flex-col bg-slate-50 rounded-md p-9 h-full gap-3">
              <div className='flex flex-col gap-8'>
              <div className="flex w-full items-center justify-between px-2 h-[20%] ">
                <img src="../etsy.svg" alt="" className='h-[40%]'/>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex bg-indigo-100 items-center justify-center h-[50%] rounded-xl px-2'>Needs attention</div>
                  <NextLink href="/Platform-Integration/Connection">
                  <div className='flex bg-blue-600 items-center justify-center text-slate-200 p-3 rounded-md'>Connect</div>
                  </NextLink>                </div>
              </div>
              <div className="flex w-full items-center justify-between px-2 h-[25%] ">
                <img src="../ebay_l.svg" alt="" />
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex bg-indigo-100 items-center justify-center h-[50%] rounded-xl px-2'>Needs attention</div>
                  <NextLink href="/Platform-Integration/Connection">
                  <div className='flex bg-blue-600 items-center justify-center text-slate-200 p-3 rounded-md'>Connect</div>
                  </NextLink>                </div>
              </div>
              <div className="flex w-full items-center justify-between px-2 h-[25%]">
                <img src="../shopify_l.svg" alt="" className='h-[60%]'/>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex bg-indigo-100 items-center justify-center h-[50%] rounded-xl px-2'>Needs attention</div>
                  <NextLink href="/Platform-Integration/Connection">
                  <div className='flex bg-blue-600 items-center justify-center text-slate-200 p-3 rounded-md'>Connect</div>
                  </NextLink>                </div>
              </div>
              <div className="flex w-full items-center justify-between px-2 h-[25%]">
                <img src="../amazon_logo.svg" alt="" className='h-[60%]'/>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex bg-indigo-100 items-center justify-center h-[50%] rounded-xl px-2'>Needs attention</div>
                  <NextLink href="/Platform-Integration/Connection">
                  <div className='flex bg-blue-600 items-center justify-center text-slate-200 p-3 rounded-md'>Connect</div>
                  </NextLink>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default PlatformIntegration