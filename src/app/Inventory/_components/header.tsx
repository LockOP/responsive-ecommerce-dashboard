import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const subPages = [
    {
      label: "Grid View",
      path: "/Inventory/GridView",
    },
    {
      label: "Gallery View",
      path: "/Inventory/GalleryView",
    },
  ];

  return (
    <>
      <div className="w-full flex-grow overflow-auto flex flex-row px-[30px] items-center justify-between">
        <div className="flex flex-row items-center text-[24px] font-semibold select-none pointer-events-none">
          What's new, Jordan?
        </div>
        <div className="flex flex-row items-center gap-4">
          <button
            onClick={() => {}}
            className="px-6 gap-2 flex flex-row h-[50px] items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-[10px]"
          >
            <img
              src="/Hstar.svg"
              alt=""
              className="select-none pointer-events-none"
            />
            <p className="text-[16px] font-semibold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-r from-[#546FFF] to-[#9747FF]">
              Upgrade plan
            </p>
          </button>
          <button
            onClick={() => {}}
            className="px-6 gap-2 flex flex-row h-[50px] items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-[10px]"
          >
            <img
              src="/Hedit.svg"
              alt=""
              className="select-none pointer-events-none"
            />
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#54577A]">
              Customize
            </p>
          </button>
          <button
            onClick={() => {}}
            className="px-[12px] flex flex-row h-[50px] items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-full"
          >
            <img
              src="/HLink.svg"
              alt=""
              className="select-none pointer-events-none"
            />
          </button>
          <button
            onClick={() => {}}
            className="flex flex-row h-[50px] items-center select-none  group rounded-full"
          >
            <img
              src="/Hprofile.svg"
              alt=""
              className="select-none pointer-events-none border border-transparent rounded-full group-hover:border-[#9ba1d1]"
            />
          </button>
        </div>
      </div>
      <div className="w-full h-12 shrink-0 flex flex-row px-[30px] gap-[30px]">
        {subPages.map((page) => (
          <NavButton
            key={page.path}
            label={page.label}
            selected={pathname.includes(page.path)}
            onClick={() => router.push(page.path)}
          />
        ))}
      </div>
    </>
  );
}

function NavButton({
  label,
  selected,
  onClick = () => {},
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={` pb-[19px] pt-[7px] box-border select-none hover:border-[#cacaca] ${
        selected ? "border-b-2 border-[#546FFF]" : "border-b-2 border-[#ffffff]"
      }`}
    >
      {label}
    </button>
  );
}
