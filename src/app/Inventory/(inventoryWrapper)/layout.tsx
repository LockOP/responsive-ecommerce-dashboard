"use client";
import { Collapse } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SideBar from "../_components/sideBar";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  //         {children}

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-[266px] h-full shrink-0 overflow-y-auto flex flex-col px-6 pt-6 pb-8 gap-[36px] border-r border-[#EFEFEF]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-auto h-full flex flex-col">
        <div className="h-[148px] w-full shrink-0"></div>
        <div className="flex-grow overflow-auto w-full flex flex-col">
          <div className="h-screen"></div>
        </div>
      </div>
    </div>
  );
}

 
