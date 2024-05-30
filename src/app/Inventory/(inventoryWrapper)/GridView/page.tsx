"use client";

import { useEffect, useState } from "react";

import InventoryTable from "../../_components/inventoryTable";
import { dummyData } from "../../_components/dummyData";

import DropDown from "@/app/components/dropdown/DropDown";
import DropDownSlider from "@/app/components/dropdown/DropDownSlider";
import DropDownCalendar from "@/app/components/dropdown/DropDownCalendar";
import SearchBar from "@/app/components/Searchbar/SearchBar";
import { get_all_inventory_service } from "@/services/inventoryService";

export default function Page() {
  const [inventoryList, setInventoryList] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [stores, setStores] = useState("");
  const [moreFilters, setMoreFilters] = useState("");

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const [filters, setFilters] = useState({
    orderStatus: [],
    orderValueRange: { start: 0, end: 1000 },
  });

  async function populate_inventory_list() {
    try {
      const res = await get_all_inventory_service();
      console.log(res);
      setInventoryList(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populate_inventory_list();
  }, []);
  return (
    <div className="box-border flex w-full flex-grow flex-col gap-[25px] overflow-auto bg-[#FAFAFA] pt-[25px]">
      <div className="flex  flex-row items-center justify-between px-[30px]">
        <div className="flex flex-row items-center gap-[10px]">
          <button
            key={"r1icsr"}
            onClick={() => {}}
            className={`flex h-11 select-none flex-row items-center gap-2 rounded-[10px] border border-[#C2C6E8] bg-[white] px-4 hover:border-[#9ba1d1] ${
              selectedRows.length ? "" : "hidden"
            }`}
          >
            <p className="pointer-events-none select-none text-[16px] font-semibold text-[#54577A]">
              Delete
            </p>
          </button>

          <button
            key={"r13csr"}
            onClick={() => {}}
            className={`flex h-11 select-none flex-row items-center gap-2 rounded-[10px] border border-[#C2C6E8] bg-[white] px-4 hover:border-[#9ba1d1] ${
              selectedRows.length ? "" : "hidden"
            }`}
          >
            <p className="pointer-events-none select-none text-[16px] font-semibold text-[#54577A]">
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
            className="flex h-11 select-none flex-row items-center gap-2 rounded-[10px] border border-[#C2C6E8] bg-[white] px-4 hover:border-[#9ba1d1]"
          >
            <img
              src="/arrow-down-circle.svg"
              alt=""
              className="pointer-events-none select-none"
            />
            <p className="pointer-events-none select-none text-[16px] font-semibold text-[#54577A]">
              Export to CSV
            </p>
          </button>
          <button
            key={"r2nl"}
            onClick={() => {}}
            className="flex h-11 select-none flex-row items-center gap-2 rounded-[10px] border border-[#3D53DB] bg-[#3D53DB] px-4 hover:border-[#2135b8]"
          >
            <img
              src="/truck-fast.svg"
              alt=""
              className="pointer-events-none select-none"
            />
            <p className="pointer-events-none select-none text-[16px] font-semibold text-[#ffffff]">
              Get Shipping Labels
            </p>
          </button>
        </div>
      </div>
      <div className="flex w-full flex-grow flex-col overflow-auto">
        <InventoryTable
          data={inventoryList}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />
      </div>
    </div>
  );
}
