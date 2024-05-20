"use client";

import "react-date-range/dist/styles.css";
import "./calendar.css";

import { useState } from "react";

import InventoryTable from "../../_components/inventoryTable";
import { dummyData } from "../../_components/dummyData";

import DropDown from "@/app/components/dropdown/DropDown";
import DropDownSlider from "@/app/components/dropdown/DropDownSlider";
import DropDownCalendar from "@/app/components/dropdown/DropDownCalendar";
import SearchBar from "@/app/components/Searchbar/SearchBar";

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

          <DropDownCalendar label="Calendar" />
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
          <DropDownSlider label="Order Value Range" />
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
