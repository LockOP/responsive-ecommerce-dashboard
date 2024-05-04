"use client";

import { useEffect, useRef, useState } from "react";
import InventoryTable from "../../_components/inventoryTable";
import { dummyData } from "../../_components/dummyData";
import Slider from "@mui/material/Slider";

// import Typography from '@mui/material/Typography';
// import Slider from '@mui/material/Slider';

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
            <p className="text-[16px] font-semibold select-none pointer-events-none text-[#54577A]">
              Message Buyers
            </p>
          </button>
          <SearchBar
            search={search}
            setSearch={setSearch}
            hidden={selectedRows.length}
          />
          <DropDownSlider label="Slider" />
          <DropDown
            label="Update Status"
            options={[
              "Shipped",
              "Needs Attention",
              "Delivered",
              "Due Today",
              "Flagged",
            ]}
            selected={status}
            setSelected={setStatus}
            hidden={!selectedRows.length}
          />

          <DropDown
            label="Status"
            options={[
              "Shipped",
              "Needs Attention",
              "Delivered",
              "Due Today",
              "Flagged",
            ]}
            selected={status}
            setSelected={setStatus}
            hidden={selectedRows.length}
          />
          <DropDown
            label="Order Value Range"
            options={["Nearby", "City", "State"]}
            selected={stores}
            setSelected={setStores}
          />
          {/* <div style={{ margin: 'auto', display: 'block', width: 'fit-content' }}>
      <h3>Price Range Selector in ReactJS</h3>
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        step={1}
      />
      <p>
        Your selected price range is between ${value[0]} and ${value[1]}
      </p>
    </div> */}
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
  hidden = false,
}: {
  selected: string;
  setSelected: any;
  label: string;
  options: string[];
  allowClear?: boolean;
  hidden?: boolean | number;
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
      } ${hidden ? "hidden" : ""}`}
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

function DropDownSlider({
  selected,
  setSelected,
  label,
  options,
  allowClear = true,
  hidden = false,
}: {
  selected?: string;
  setSelected?: any;
  label: string;
  options?: string[];
  allowClear?: boolean;
  hidden?: boolean | number;
}) {
  const [value, setValue] = useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

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
      } ${hidden ? "hidden" : ""}`}
    >
      <p className="select-none pointer-events-none text-[12px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute z-[20] w-[200px] block box-border top-4 left-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] overflow-hidden flex-col ${
          open
            ? "opacity-100 pointer-events-auto translate-y-11"
            : "opacity-0 pointer-events-none translate-y-[-14px]"
        }`}
      >
        <div className="w-full flex flex-col gap-6 cursor-default px-[14px] pt-[15.5px] pb-[7.5px]">
          <div className="flex flex-col w-full gap-[9px]">
            <div className="w-full flex flex-row justify-between items-center text-[black]">
              <p>${value[0]}</p>
              <p>${value[1]}</p>
            </div>
            <div className="w-full px-2">
              <Slider
                classes={{
                  thumb: "w-4 h-4 bg-[white] border-4 border-[#3D53DB]",
                  track: "bg-[#C2C6E8] h-2 border-none boder-[#DFE6FE]",
                  rail: "bg-[#C2C6E8] h-2 border-none",
                }}
                min={0}
                max={1000}
                getAriaLabel={() => "Range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </div>
          </div>

          <div className="w-full flex flex-row justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-auto h-[36px] border box-border border-[#C2C6E8] rounded-[10px] px-4 flex flex-row items-center text-[#54577A]"
            >
              Clear
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-auto h-[36px] border box-border border-[#3D53DB] bg-[#3D53DB] rounded-[10px] px-4 flex flex-row items-center text-[#FFF]"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// src/components/PriceRangeDropdown.js

// npm install @emotion/styled @emotion/react @mui/material
