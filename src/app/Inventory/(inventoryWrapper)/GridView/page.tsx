"use client";

import { useEffect, useRef, useState } from "react";
import InventoryTable from "../../_components/inventoryTable";
import { dummyData } from "../../_components/dummyData";

export default function Page() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [stores, setStores] = useState("");
  const [moreFilters, setMoreFilters] = useState("");

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [filters, setFilters] = useState({
    orderStatus: [],
    orderValueRange: { start: 0, end: 1000 },
  });

  return (
    <div className="flex-grow overflow-auto w-full flex flex-col pt-[25px] gap-[25px] box-border bg-[#FAFAFA]">
      <div className="flex  px-[30px] flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[10px]">
          <button
            key={"r1icsr"}
            onClick={() => {}}
            className={`px-4 bg-[white] gap-2 flex flex-row h-11 items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-[10px] ${
              selectedRows.length ? "" : "hidden"
            }`}
          >
            {/* <img
              src="/arrow-down-circle.svg"
              alt=""
              className="select-none pointer-events-none"
            /> */}
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#54577A]">
              Delete
            </p>
          </button>

          <button
            key={"r13csr"}
            onClick={() => {}}
            className={`px-4 bg-[white] gap-2 flex flex-row h-11 items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-[10px] ${
              selectedRows.length ? "" : "hidden"
            }`}
          >
            {/* <img
              src="/arrow-down-circle.svg"
              alt=""
              className="select-none pointer-events-none"
            /> */}
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#54577A]">
              Message Buyers
            </p>
          </button>
          <SearchBar
            search={search}
            setSearch={setSearch}
            hidden={selectedRows.length}
          />

          <DropDown
            label="Status"
            options={["Available", "Coming Soon", "Not Available"]}
            selected={status}
            setSelected={setStatus}
          />
          <DropDown
            label="Order Value Range"
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
            className="px-4 bg-[white] gap-2 flex flex-row h-11 items-center select-none border border-[#C2C6E8] hover:border-[#9ba1d1] rounded-[10px]"
          >
            <img
              src="/arrow-down-circle.svg"
              alt=""
              className="select-none pointer-events-none"
            />
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#54577A]">
              Export to CSV
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
              Get Shipping Labels
            </p>
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-auto w-full flex flex-col">
        <InventoryTable
          data={dummyData}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />
      </div>
    </div>
  );
}

function SearchBar({
  search,
  setSearch,
  hidden = false,
}: {
  search: string;
  setSearch: any;
  hidden?: boolean | number;
}) {
  return (
    <div
      className={`rounded-[10px] h-11 w-full flex flex-row justify-center items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border ${
        hidden ? "hidden" : ""
      }`}
    >
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
  allowClear = true,
}: {
  selected: string;
  setSelected: any;
  label: string;
  options: string[];
  allowClear?: boolean;
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
      className={`shrink-0 rounded-[10px] h-11 flex flex-row items-center bg-[#ffffff] relative select-none border box-border group px-4 gap-2 cursor-pointer ${
        open ? "border-[#546FFF]" : "border-[#C2C6E8]"
      }`}
    >
      <p className="select-none pointer-events-none text-[12px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" />
      <div
        className={`absolute z-[20] w-[200px] block box-border top-4 left-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] overflow-hidden ${
          open
            ? "opacity-100 pointer-events-auto translate-y-11"
            : "opacity-0 pointer-events-none translate-y-[-14px]"
        }`}
      >
        {options.map((option, index) => {
          return (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((cur: string) =>
                  allowClear ? (cur == option ? "" : option) : option
                );
              }}
              key={index}
              className={`w-full text-ellipsis p-4 select-none text-[12px] font-semibold text-[#54577A] text-left ${
                selected === option
                  ? "bg-[#DDE2FF] hover:bg-[#d1d8fc]"
                  : "hover:bg-[#F2F4F7]"
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
