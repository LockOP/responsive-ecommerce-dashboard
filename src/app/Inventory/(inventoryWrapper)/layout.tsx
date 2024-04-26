"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SideBar from "../_components/sideBar";
import Header from "../_components/header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen flex flex-row">
      <SideBar />
      <div className="flex-grow overflow-auto h-full flex flex-col">
        <div className="h-[148px] w-full shrink-0 flex flex-col">
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
}
