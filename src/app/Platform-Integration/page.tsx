"use client";
import { useState } from "react";
import NextLink from "next/link";

import PlatformNavbar from "../components/navbar/PlatformNavbar";
import PlatformSidebar from "../components/navbar/Sidenav";

import DropDown from "@/app/components/dropdown/DropDown";
import SearchBar from "@/app/components/Searchbar/SearchBar";
import PlatformMenu from "@/app/Platform-Integration/_components/PlatformMenu";

type Props = {};

const PlatformIntegration = (props: Props) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [stores, setStores] = useState("");
  const [moreFilters, setMoreFilters] = useState("");

  const integrations = [
    {
      name: "Etsy",
      status: "Needs attention",
      img: "../etsy.svg",
    },
    {
      name: "Ebay",
      status: "Needs attention",
      img: "../ebay_l.svg",
    },
    {
      name: "Shopify",
      status: "Needs attention",
      img: "../shopify_l.svg",
    },
    {
      name: "Amazon",
      status: "Needs attention",
      img: "../amazon_logo.svg",
    },
  ];

  return (
    <div className="bg-gray-200 h-screen ">
      <div className="flex h-full">
        <PlatformSidebar />
        <PlatformMenu />
        <div className="flex flex-col flex-1 overflow-hidden">
          <PlatformNavbar />
          <div className="flex flex-col p-5 gap-4">
            <div className="flex flex-col bg-[#FFFFFF] rounded-md p-5 h-[40%] gap-2">
              <div className="text-2xl text-slate-800 font-semibold">
                Integrate a new platform
              </div>
              <div className="text-base text-[#54577A] font-normal ">
                Add a new selling platform to your account.
              </div>
              <div className="flex gap-4">
                <div className="flex gap-4">
                  <SearchBar search={search} setSearch={setSearch} />
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
            <div className="flex flex-col bg-[#FFFFFF] rounded-md p-5 h-full">
              <div className="flex flex-col gap-6">
                {integrations.map((integration) => {
                  return (
                    <div
                      key={integration.name}
                      className="flex w-full items-center justify-between px-5 h-[25%] bg-[#FAFAFA] rounded-md p-4"
                    >
                      <img
                        src={integration.img}
                        alt={integration.name}
                        className="h-[27px]"
                      />
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex bg-indigo-100 items-center justify-center h-[50%] rounded-xl px-2 text-[14px]">
                          {integration.status}
                        </div>
                        <NextLink href="/Platform-Integration/Connection">
                          <div className="flex bg-blue-600 items-center justify-center text-slate-200 p-3 w-[98px] rounded-md text-[16px]">
                            Connect
                          </div>
                        </NextLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformIntegration;
