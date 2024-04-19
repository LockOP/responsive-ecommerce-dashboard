import React from 'react';
import Navbarwebbuilder from '../components/Navbarwebbuilder';
import Sidebar from '../components/Sidebar';

const Page = () => {
  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden ml-1">
          <Navbarwebbuilder />
          <div className="flex flex-col flex-1 p-6 overflow-y-auto">
            <div className="flex flex-col bg-slate-50 rounded-md p-8 h-full gap-10">
              <div className="flex items-center mb-4 gap-4">
                <div className="text-xl text-slate-800 border-b-2 border-blue-500">Home</div>
                <div className="text-xl text-slate-400 hover:text-slate-800 border-b-2 border-slate-50 hover:border-blue-500">Site Builder</div>
                <div className="text-xl text-slate-400 hover:text-slate-800 border-b-2 border-slate-50 hover:border-blue-500">My Sites</div>
                <div className="text-xl text-slate-400 hover:text-slate-800 border-b-2 border-slate-50 hover:border-blue-500">Plan</div>
              </div>
              <div className="flex flex-col w-[40%]">
                <div className="text-4xl text-slate-800">Welcome to your AI-powered website builder</div>
                <div className="text-xl text-slate-400 mt-2">Your AI-powered platform is here. Build professional storefronts and easily convert sites into customer-facing mobile apps using the OmniSynkAI website builder.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
