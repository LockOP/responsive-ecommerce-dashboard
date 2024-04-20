"use client";
import React, { useState } from "react";

export default function SideBar() {
  const buttonArray = [
    {
      src: "/dashboard.svg",
      label: "Dashboard",
      path: "Inventory/Dashboard",
    },
    {
      src: "/allorders.svg",
      label: "All Orders",
      path: "Inventory/AllOrders",
    },
    {
      src: "/insights.svg",
      label: "Insights",
      path: "Inventory/Insights",
    },
    {
      src: "/inventory.svg",
      label: "Inventory",
      path: "Inventory/Inventory",
    },
    {
      src: "/automation.svg",
      label: "Automation",
      path: "Inventory/Automation",
    },
    {
      src: "/affiliatehub.svg",
      label: "Affiliate Hub",
      path: "Inventory/AffiliateHub",
    },
    {
      src: "/settings.svg",
      label: "Settings",
      path: "Inventory/Settings",
    },
  ];

  const [sideBarSearch, setSideBarSearch] = useState("");

  return (
    <>
      <div className="flex-grow overflow-auto w-full flex flex-col gap-4">
        <div className="w-full px-[35.5] pt-4 flex justify-center select-none">
          <img src="/logoOAI.svg" alt="" className="w-auto" />
        </div>

        <div className="my-1 rounded-2xl h-12 w-full flex flex-row justify-center items-center bg-[#F5F5F5] relative select-none">
          <img
            src="/searchSB.svg"
            alt=""
            className="absolute left-4 select-none pointer-events-none"
          />
          <input
            value={sideBarSearch}
            onChange={(e) => {
              setSideBarSearch(e.target.value);
            }}
            type="text"
            className="placeholder:text-[#54577A] w-full pl-14 py-4 pr-4 h-full p-4 bg-transparent focus:outline-none"
            placeholder="Search"
          />
        </div>

        <button className="my-1 rounded-2xl h-12 w-full flex flex-row justify-center items-center bg-[#DFE6FE] hover:bg-[#d1dcff] select-none gap-4">
          <img
            src="/add.svg"
            alt=""
            className="select-none pointer-events-none"
          />
          <p className="select-none pointer-events-none">New Listing</p>
        </button>

        {buttonArray.map((item, index) => {
          return <CommmonButton key={index} {...item} />;
        })}
      </div>
      <CommmonButton src="/logout.svg" label="Log out" onClick={() => {}} />
    </>
  );
}

function CommmonButton({ src = "", label = "", onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className="h-10 w-full shrink-0 flex flex-row gap-4 justify-start items-center px-4 bg-transparent hover:bg-[#f0f0f0] rounded-2xl select-none"
    >
      <img src={src} alt="" className="select-none pointer-events-none" />
      <p className="text-[16px] text-[#09090A] select-none pointer-events-none">
        {label}
      </p>
    </button>
  );
}
