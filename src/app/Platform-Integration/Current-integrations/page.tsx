import React from "react";
import PlatformNavbar from "@/app/components/navbar/PlatformNavbar";
import PlatformSidebar from "@/app/components/navbar/Sidenav";
import PlatformMenu from "@/app/Platform-Integration/_components/PlatformMenu";

type Props = {};

const CurrentIntegration = (props: Props) => {
  const integrations = [
    {
      name: "Etsy",
      status: "Connected",
      img: "../etsy.svg",
    },
    {
      name: "Ebay",
      status: "Connected",
      img: "../ebay_l.svg",
    },
    {
      name: "Shopify",
      status: "Connected",
      img: "../shopify_l.svg",
    },
    {
      name: "Amazon",
      status: "Connected",
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
          <div className="flex flex-col  p-5  gap-4">
            <div className="flex flex-col bg-[#FFFFFF] rounded-md p-5 h-full gap-2">
              <div className="text-2xl text-slate-800 font-semibold">
                Current integrations
              </div>
              <div className="text-base text-[#54577A] font-normal ">
                View selling platforms integrated with your account.
              </div>
              <div className="flex flex-col bg-[#FFFFFF] rounded-md h-full">
                <div className="flex flex-col gap-5">
                  {integrations.map((integration) => (
                    <div className="flex w-full items-center justify-between px-5 h-[25%] bg-[#FAFAFA] rounded-md p-4">
                      <img
                        src={integration.img}
                        alt={integration.name}
                        className="h-[27px]"
                      />
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex bg-lime-200 text-lime-700 text-[14px] items-center justify-center h-[50%] rounded-xl px-2">
                          {integration.status}
                        </div>
                        <div className="flex hover:bg-red-400 hover:text-white items-center justify-center text-slate-500 border border-slate-400 p-3 w-[118px]  rounded-md">
                          Disconnect
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentIntegration;
