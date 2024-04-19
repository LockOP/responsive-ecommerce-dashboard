import React from 'react';
import NextLink from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-[130px] bg-slate-50 shadow-md h-screen left-0 top-0 z-50 ">
      <div className='flex flex-col items-center mt-4 gap-2 justify-between p-4'>
      <div className='p-6'><img src="./Omni.svg" alt="" /></div>
        <div className="flex flex-col gap-5"> 
          <div className='block rounded-md hover:bg-blue-200 p-2'><img src="./search.svg" alt="" /></div>
          <NextLink href="/webbuilder/plusbutton">
          <div className='block rounded-md bg-blue-200 hover:bg-blue-400 p-2'><img src="./add.svg" alt="" /></div>
          </NextLink>
          <div className='block rounded-md hover:bg-blue-200 p-2'><img src="./home.svg" alt="" /></div>
          <div className='block rounded-md hover:bg-blue-200 p-2'><img src="./box.svg" alt="" /></div>
          <div className='block rounded-md hover:bg-blue-200 p-2'><img src="./pie.svg" alt="" /></div>
          <div className='block rounded-md hover:bg-blue-200 p-2'><img src="./data.svg" alt="" /></div>
          <div className='block rounded-md hover:bg-blue-200 p-2'><img src="./settings.svg" alt="" /></div>
        </div>
        <div className='block rounded-md hover:bg-blue-200 p-2 absolute bottom-5 '><img src="./exit.svg" alt="" /></div>
      </div>
    </aside>
  );
};

export default Sidebar;
