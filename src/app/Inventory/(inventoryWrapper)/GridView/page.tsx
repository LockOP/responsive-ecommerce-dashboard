"use client";

import { useEffect, useRef, useState } from "react";
import InventoryTable from "../../_components/inventoryTable";

export default function Page() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [stores, setStores] = useState("");
  const [moreFilters, setMoreFilters] = useState("");

  return (
    <div className="flex-grow overflow-auto w-full flex flex-col pt-[25px] gap-[25px] box-border bg-[#FAFAFA]">
      <div className="flex  px-[30px] flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[10px]">
          <SearchBar search={search} setSearch={setSearch} />
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
        <div className="flex flex-row items-center gap-[10px]">
          <button
            key={"r1icsv"}
            onClick={() => {}}
            className="px-4 gap-2 flex flex-row h-11 items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-[10px]"
          >
            <img
              src="/arrow-down-circle.svg"
              alt=""
              className="select-none pointer-events-none"
            />
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#54577A]">
              Import CSV
            </p>
          </button>
          <button
            key={"r2nl"}
            onClick={() => {}}
            className="px-4 gap-2 flex flex-row h-11 items-center select-none border border-[#3D53DB] hover:border-[#2135b8] rounded-[10px] bg-[#3D53DB]"
          >
            <img
              src="/truck-fast.svg"
              alt=""
              className="select-none pointer-events-none"
            />
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#ffffff]">
              New Listing
            </p>
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-auto w-full flex flex-col">
        <InventoryTable />
      </div>
    </div>
  );
}

function SearchBar({ search, setSearch }: { search: string; setSearch: any }) {
  return (
    <div className="rounded-[10px] h-11 w-full flex flex-row justify-center items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border">
      <img
        src="/searchSB.svg"
        alt=""
        className="absolute left-4 select-none pointer-events-none"
      />
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        className="w-full pl-14 py-4 pr-4 h-full p-4 bg-transparent focus:outline-none placeholder:text-[#54577A]  placeholder:text-[14px] placeholder:font-semibold text-[14px] font-semibold text-[#54577A]"
        placeholder="Search"
      />
    </div>
  );
}

function DropDown({
  selected,
  setSelected,
  label,
  options,
}: {
  selected: string;
  setSelected: any;
  label: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropDownRef.current &&
      !DropDownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={DropDownRef}
      key={"dd" + label}
      onClick={() => setOpen(!open)}
      className="shrink-0 rounded-[10px] h-11 flex flex-row items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border group px-4 gap-2 hover:border-[#9ba1d1] cursor-pointer"
    >
      <p className="select-none pointer-events-none text-[14px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" />
      <div
        className={`absolute z-[20] w-[150px] block box-border top-1 right-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] group-hover:border-[#9ba1d1] ${
          open
            ? "opacity-100 pointer-events-auto translate-y-11"
            : "opacity-0 pointer-events-none translate-y-[-14px]"
        }`}
      >
        {options.map((option, index) => {
          return (
            <button
              onClick={() => {
                setSelected(option);
              }}
              key={index}
              className={`w-full text-ellipsis px-4 py-[14px] hover:bg-[#F2F4F7] select-none text-[14px] font-semibold text-[#54577A] rounded-[10px] ${
                selected === option ? "bg-[#F2F4F7]" : ""
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
