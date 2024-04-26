"use client";
import React, { useEffect, useRef, useState } from "react";

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

  const [expanded, setExpanded] = useState<boolean>(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const sideBarSearchRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!(sideBarSearchRef.current == document.activeElement)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    const sideBarElement = sideBarRef.current;
    if (sideBarElement) {
      sideBarElement.addEventListener("mouseover", handleMouseEnter);
      sideBarElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        sideBarElement.removeEventListener("mouseover", handleMouseEnter);
        sideBarElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  });

  return (
    <div
      ref={sideBarRef}
      className="w-max h-full shrink-0 overflow-y-auto flex flex-col px-6 pt-6 pb-8 gap-[36px] border-r border-[#EFEFEF]"
    >
      <div
        className={`flex-grow overflow-y-auto overflow-x-hidden flex flex-col gap-4 ani ${
          expanded ? "w-[266px]" : "w-[56px]"
        }`}
      >
        <div className="w-full px-[35.5] h-10 overflow-visible bg-[white] pt-4 flex justify-center items-center select-none relative">
          <img
            src="/logo/OmniLarge.svg"
            alt=""
            className={`absolute w-full object-contain ani h-6 ${
              expanded ? "" : "blur-md opacity-0"
            }`}
          />
          <img
            src="/logo/OmniSmall.png"
            alt=""
            className={`absolute w-full object-contain ani h-6 ${
              expanded ? "blur-md opacity-0" : ""
            }`}
          />
        </div>
        <div className="my-1 rounded-2xl h-12 w-full flex flex-row justify-center items-center bg-[#F5F5F5] relative select-none">
          <img
            src="/searchSB.svg"
            alt=""
            className="absolute left-4 select-none pointer-events-none"
          />
          <input
            ref={sideBarSearchRef}
            onBlur={() => setExpanded(false)}
            value={sideBarSearch}
            onChange={(e) => {
              setSideBarSearch(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
              }
            }}
            type="text"
            className={`placeholder:text-[#54577A] w-full pl-14 py-4 pr-4 h-full p-4 bg-transparent outline-none ani ${
              expanded ? "" : "translate-x-[20px]"
            }`}
            placeholder="Search"
          />
        </div>
        <button className="my-1 rounded-2xl h-12 w-full flex flex-row justify-center items-center bg-[#DFE6FE] hover:bg-[#d1dcff] select-none gap-4 relative overflow-x-hidden ani">
          <img
            src="/add.svg"
            alt=""
            className={`select-none pointer-events-none ani ${
              expanded ? "translate-x-[-50px]" : ""
            }`}
          />
          <p
            className={`select-none pointer-events-none ani w-[130px] absolute left-14 ani ${
              expanded ? "translate-x-[30px]" : ""
            }`}
          >
            New Listing
          </p>
        </button>
        {buttonArray.map((item, index) => {
          return (
            <CommmonButton
              expanded={expanded}
              key={index}
              {...item}
              onClick={() => {}}
            />
          );
        })}
      </div>
      <CommmonButton
        expanded={expanded}
        src="/logout.svg"
        label="Log out"
        onClick={() => {}}
      />
    </div>
  );
}

function CommmonButton({
  src = "",
  label = "",
  onClick = () => {},
  expanded,
}: {
  src: string;
  label: string;
  onClick: () => void;
  expanded: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="h-10 w-full shrink-0 flex flex-row gap-4 justify-start items-center px-4 bg-transparent hover:bg-[#f0f0f0] rounded-2xl select-none overflow-x-clip relative"
    >
      <img src={src} alt="" className="select-none pointer-events-none" />
      <p
        className={`absolute w-[130px] left-14 text-left text-[16px] text-[#09090A] select-none pointer-events-none ani ${
          expanded ? "" : "translate-x-[20px]"
        }`}
      >
        {label}
      </p>
    </button>
  );
}
