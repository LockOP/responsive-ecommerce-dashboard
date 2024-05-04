"use client"
import PlatformNavbar from '@/app/components/navbar/PlatformNavbar'
import PlatformSidebar from '@/app/components/navbar/Sidenav'
import React,{ useState, useEffect } from 'react'
import NextLink from 'next/link';

type Props = {}

const Connection = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [allowAccess, setAllowAccess] = useState(false);

    useEffect(() => {
        // Simulate loading for 2 seconds
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);

        // Clear the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const handleAllowAccess = () => {
        setAllowAccess(true);
    };
  return (
    <div className='bg-gray-200 h-screen '>
        
        <div className="flex h-full">
        <PlatformSidebar/>
        <div className="flex flex-col flex-1 overflow-hidden ml-1">
          <PlatformNavbar />
          {loading ? (
            <div className="flex flex-col  p-5  gap-4">
                <div className="flex flex-col bg-slate-50 rounded-md p-8  gap-2">
                    <div className='text-2xl text-slate-800 font-semibold'>Connecting you with eBay</div>
                    <div className='text-lg text-slate-800 font-normal'>This will only take a moment.</div>
                </div>
            </div>
      ) : (
          <div className="flex p-5  gap-4 h-full ">
            <div className="flex  bg-slate-50 rounded-md p-10  gap-2 h-full w-full  justify-between">
                <div className="flex flex-col justify-center">
                    <div className='text-2xl text-slate-800 font-semibold'>Connecting you with eBay</div>
                    <div className='text-lg text-slate-800 font-normal'>This will only take a moment.</div>
                </div>
                {allowAccess ? (
                  <>
                <div className="flex flex-col items-center justify-center w-[50%] gap-8">
                    <div className='text-4xl text-slate-800 font-semibold'>Great job, Jordan!</div>
                    <div className='text-base text-slate-500 font-normal w-[50%] text-center'>You have successfully integrated your Etsy account with OmniSynkAI.</div>
                    <div className='text-base text-slate-600 font-normal w-[60%] text-center'>Just a heads up — it can take up to 24 hours for your Etsy orders to appear in your dashboard.</div>
                    <div className='flex gap-4'>
                      <NextLink href="./Current-integrations">
                      <div className='flex bg-blue-600 hover:bg-blue-500 items-center justify-center text-slate-200 py-2 w-[450px] rounded-md'>Return to my accounts</div>
                      </NextLink>
                    </div>
                </div>
                  </>
                ) : (
                  <>
                <div className="flex flex-col items-center justify-center w-[50%] gap-4">
                    <div className='text-4xl text-slate-800 font-semibold text-center'>eBay wants to access your OmniSynkAI account</div>
                    <div className='text-base text-slate-500 font-normal w-[70%] text-center'>This will allow Etsy to see, edit, and integrate your OmniSynkAI orders.</div>
                    <div className='flex gap-4'>
                        <div className='flex hover:bg-blue-600 hover:text-slate-200 items-center justify-center text-slate-500 border border-slate-400 py-1 px-6 rounded-md'>Deny</div>
                        <div className='flex bg-blue-600 hover:bg-blue-500 items-center justify-center text-slate-200 py-1 px-6 rounded-md' onClick={handleAllowAccess}>Allow</div>
                    </div>
                </div>
                </>
                )
                }
            </div>
            
          </div>
      )}
        </div>
        </div>
    </div>
  )
}

export default Connection