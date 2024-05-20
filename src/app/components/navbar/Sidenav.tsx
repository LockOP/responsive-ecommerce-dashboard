import React from "react";
import NextLink from "next/link";

const PlatformSidebar = () => {
  return (
    <aside className="w-[110px] bg-gray-950 shadow-md h-screen left-0 top-0 z-50 ">
      <div className="flex flex-col items-center mt-4 gap-2 justify-between p-1">
        <div className="p-6">
          <img src="../white/Omni.svg" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="block rounded-md bg-neutral-50 hover:bg-blue-400 p-2">
            <img src="../add.svg" alt="" />
          </div>
          <div className="block rounded-md hover:bg-blue-200 p-2">
            <img src="../white/wsearch.svg" alt="" />
          </div>

          <div className="block rounded-md hover:bg-blue-200 p-2">
            <img src="../white/whome.svg" alt="" />
          </div>
          <div className="block rounded-md hover:bg-blue-200 p-2">
            <img src="../white/wbox.svg" alt="" />
          </div>
          <div className="block rounded-md hover:bg-blue-200 p-2">
            <img src="../white/wpie.svg" alt="" />
          </div>
          <div className="block rounded-md hover:bg-blue-200 p-2">
            <img src="../white/wdata.svg" alt="" />
          </div>
          <div className="block rounded-md hover:bg-blue-200 p-2">
            <img src="../white/wsetting.svg" alt="" />
          </div>
        </div>
        <div className="block rounded-md hover:bg-blue-200 p-2 absolute bottom-5 ">
          <img src="../white/wexit.svg" alt="" />
        </div>
      </div>
    </aside>
  );
};

export default PlatformSidebar;
