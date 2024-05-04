import PlatformNavbar from '@/app/components/navbar/PlatformNavbar'
import PlatformSidebar from '@/app/components/navbar/Sidenav'
import React from 'react'

type Props = {}

const Currentintegration = (props: Props) => {
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
          
          <div className="flex flex-col bg-slate-50 rounded-md p-9 h-full gap-3">
            <div className="text-2xl text-slate-800 font-semibold">Current integrations</div>
            <div className="text-base text-slate-500 font-normal ">View selling platforms integrated with your account.</div>
            <div className='flex flex-col gap-12 py-8'>
            <div className="flex w-full items-center justify-between px-2 h-[18%] ">
              <img src="../etsy.svg" alt="" className='h-[40%]'/>
              <div className='flex items-center justify-between gap-2'>
                <div className='flex bg-lime-200  text-lime-700 items-center justify-center h-[50%] rounded-xl px-2'>Connected</div>
                <div className='flex hover:bg-red-400 hover:text-white items-center justify-center text-slate-500 border border-slate-400 p-3 rounded-md'>Disconnect</div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-2 h-[25%] ">
              <img src="../ebay_l.svg" alt="" />
              <div className='flex items-center justify-between gap-2'>
                <div className='flex bg-lime-200  text-lime-700 items-center justify-center h-[50%] rounded-xl px-2'>Connected</div>
                <div className='flex hover:bg-red-400 hover:text-white items-center justify-center text-slate-500 border border-slate-400 p-3 rounded-md'>Disconnect</div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-2 h-[25%]">
              <img src="../shopify_l.svg" alt="" className='h-[60%]'/>
              <div className='flex items-center justify-between gap-2'>
                <div className='flex bg-lime-200  text-lime-700 items-center justify-center h-[50%] rounded-xl px-2'>Connected</div>
                <div className='flex hover:bg-red-400 hover:text-white items-center justify-center text-slate-500 border border-slate-400 p-3 rounded-md'>Disconnect</div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-2 h-[25%]">
              <img src="../amazon_logo.svg" alt="" className='h-[60%]'/>
              <div className='flex items-center justify-between gap-2'>
                <div className='flex bg-lime-200  text-lime-700 items-center justify-center h-[50%] rounded-xl px-2'>Connected</div>
                <div className='flex hover:bg-red-400 hover:text-white items-center justify-center text-slate-500 border border-slate-400 p-3 rounded-md'>Disconnect</div>
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

export default Currentintegration