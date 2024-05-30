"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiExpandUpDownLine } from "react-icons/ri";
import { RxCaretSort } from "react-icons/rx";

export default function InventoryTable({
  data,
  selectedRows,
  setSelectedRows,
}: {
  data: any[];
  selectedRows: number[];
  setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  // const [data, setdata] = useState([...dData]);
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(1);

  const [sortType, setSortType] = useState<"asc" | "desc" | null>(null);
  const [sortColumn, setSortColumn] = useState<string>("");

  function selectAll() {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data.map((item) => item.id)]);
    }
  }

  function extractDatePart(dateTimeString: string) {
    if (!dateTimeString) return "";
    return new Date(dateTimeString).toISOString().split("T")[0];
  }
  return (
    <>
      <div className="mx-[30px] flex-grow select-none overflow-auto rounded-lg border border-[#DFE1F3] bg-[white]">
        <table className="max-[1024px] w-full table-auto select-none text-left max-[1024px]:w-[1240px]">
          <thead className="sticky top-0 z-[10] border-b border-[#DFE1F3] bg-[#F9FAFB]">
            <tr className="bg-[#F9FAFB] text-[14px] font-light text-[#6B7280]">
              <th className="h-14 w-14 border-r border-[#DFE1F3] py-4 pl-6 font-normal ">
                <div className="relative flex h-5 w-5 items-center justify-center overflow-clip rounded-md border-[2.25px] border-[#C5C6CC]">
                  <input
                    readOnly
                    checked={selectedRows.length === data.length}
                    onClick={selectAll}
                    type="checkbox"
                    id="checkbox"
                    className="absolute h-5 w-5 accent-[#ffffff]"
                  />
                </div>
              </th>
              {/* <th className=""></th> */}
              <th className="w-[10%] border-r border-[#DFE1F3] pl-5 font-medium">
                <span className="flex flex-row items-center gap-2">
                  Order Id
                  <button
                    onClick={() => {
                      setSortType(
                        sortType === null
                          ? "asc"
                          : sortType == "asc"
                            ? "desc"
                            : null,
                      );
                      setSortColumn("id");
                    }}
                    className="group"
                  >
                    <RiExpandUpDownLine className="ani text-[16px] text-[#8E92BC] group-hover:text-[#333]" />
                  </button>
                </span>
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Sales Date
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Shipment Date
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Product Type
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Brand
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Manufacturer
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Platform
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Cost price
              </th>
              <th className="w-[12%] border-r border-[#DFE1F3] pl-5 font-medium">
                Selling Price
              </th>

              {/* <th className="font-medium w-[7%] border-r border-[#DFE1F3] pl-5">
                <span className="flex flex-row gap-2 items-center">
                  Qty
                  <button
                    onClick={() => {
                      setSortType(
                        sortType === null
                          ? "asc"
                          : sortType == "asc"
                          ? "desc"
                          : null
                      );
                      setSortColumn("quantity");
                    }}
                    className="group"
                  >
                    <RiExpandUpDownLine className="text-[16px] text-[#8E92BC] group-hover:text-[#333] ani" />
                  </button>
                </span>
              </th>
              <th className="font-medium w-[7%] border-r border-[#DFE1F3] pl-5">
                <span className="flex flex-row gap-2 items-center">
                  Value
                  <button
                    onClick={() => {
                      setSortType(
                        sortType === null
                          ? "asc"
                          : sortType == "asc"
                          ? "desc"
                          : null
                      );
                      setSortColumn("value");
                    }}
                    className="group"
                  >
                    <RiExpandUpDownLine className="text-[16px] text-[#8E92BC] group-hover:text-[#333] ani" />
                  </button>
                </span>
              </th> */}

              <th className="w-[14%] border-r border-[#DFE1F3] pl-5 font-medium">
                Status
              </th>
              <th className="w-[14%] border-r border-[#DFE1F3] pl-5 pr-6 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {(sortType === null
              ? data
              : [...data].sort((a: any, b: any) => {
                  switch (sortType) {
                    case "asc":
                      return a[sortColumn] < b[sortColumn] ? -1 : 1;
                    case "desc":
                      return a[sortColumn] > b[sortColumn] ? -1 : 1;
                    default:
                      return 0;
                  }
                })
            )
              .slice((page - 1) * rows, (page - 1) * rows + rows)
              .map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#DFE1F3] bg-[white]"
                >
                  <td className="h-14 w-14 px-6">
                    <div className="relative flex h-5 w-5 items-center justify-center overflow-clip rounded-md border-[2.25px] border-[#C5C6CC]">
                      <input
                        readOnly
                        checked={selectedRows.includes(item.id)}
                        onClick={() => {
                          if (selectedRows.includes(item.id)) {
                            setSelectedRows(
                              selectedRows.filter(
                                (selectedRow) => selectedRow !== item.id,
                              ),
                            );
                          } else {
                            setSelectedRows([...selectedRows, item.id]);
                          }
                        }}
                        type="checkbox"
                        id="checkbox"
                        className="absolute h-5 w-5 accent-[#ffffff]"
                      />
                    </div>
                  </td>
                  {/* <td className="">
                    <div className="w-10 h-10 bg-[#D9D9D9] rounded-md mx-8"></div>
                  </td> */}
                  <td className="pl-5 text-[14px] text-[#6B7280]">{item.id}</td>

                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {extractDatePart(item.saleDates)}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {extractDatePart(item.shipmentDate)}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {item.productType}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {item.brand}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {item.manufacturer}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {item.platforms[0]}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {item.costPrice}
                  </td>
                  <td className="pl-5 text-[14px] text-[#6B7280]">
                    {item.salePrice}
                  </td>

                  <td className="pl-5">
                    <div
                      className={`h-auto w-max rounded-full px-[9px] py-[2px] text-[14px] leading-[21px] ${getStatusColor(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </div>
                  </td>
                  {/* <td className="text-[#000000] font-semibold text-[12px]">
                    
                  </td> */}
                  <td className="text-[14px] text-[#6B7280]">
                    <DropDown
                      key1={item.id}
                      actions={[
                        { label: "Edit", onClick: () => {} },
                        { label: "Delete", onClick: () => {} },
                      ]}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-[25px] flex h-[67px] w-full shrink-0 select-none flex-row items-center justify-between border-t border-[#E5E7EB] px-[30px]">
        <div className="text-[14px] text-[#374151]">
          Showing&nbsp;{(page - 1) * rows + 1}&nbsp;to&nbsp;
          {(page - 1) * rows + rows < data.length
            ? (page - 1) * rows + rows
            : data.length}
          &nbsp;of&nbsp;{data.length}&nbsp;results
        </div>
        <div className="flex flex-row items-center justify-between gap-5">
          <div className="flex flex-row items-center gap-2">
            <p className="text-[14px] text-[#374151]">View</p>
            <PaginationDropDown
              label={rows}
              options={[10, 20, 30, 50]}
              selected={rows}
              setSelected={setRows}
              setCurrentPage={setPage}
            />
          </div>
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            totalRows={data.length}
            rowsPerPage={rows}
          />
        </div>
      </div>
    </>
  );
}

const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  setCurrentPage: any;
}) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === currentPage ||
      i === 1 ||
      i === totalPages ||
      i === currentPage - 1 ||
      i === currentPage + 1
    ) {
      pageNumbers.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push("...");
    }
  }

  return (
    <div className="flex h-max flex-row gap-2">
      <button
        className="flex h-max items-center justify-center border-b-2 border-transparent px-[7px] pb-[11px] pt-[7px] text-[14px] font-bold text-[#6B7280] hover:bg-[#e0e5ff] disabled:text-[#d1d1d1] disabled:hover:bg-transparent"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span
            className="flex h-max items-center justify-center border-b-2 border-transparent px-[7px] pb-[11px] pt-[7px] text-[14px] font-medium text-[#6B7280]"
            key={index}
          >
            ...
          </span>
        ) : (
          <button
            className={`${
              number === currentPage
                ? "border-[#546FFF] text-[#546FFF]"
                : "text-[#6B7280 border-transparent"
            } ] flex h-max items-center justify-center border-b-2 px-[7px] pb-[11px] pt-[7px] text-[14px] font-medium hover:bg-[#e0e5ff]`}
            key={index}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ),
      )}
      <button
        className="flex h-max items-center justify-center border-b-2 border-transparent px-[7px] pb-[11px] pt-[7px] text-[14px] font-bold text-[#6B7280] hover:bg-[#e0e5ff] disabled:text-[#d1d1d1] disabled:hover:bg-transparent"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

function DropDown({
  key1,
  actions,
}: {
  key1: number;
  actions: { label: string; onClick: () => void }[];
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
      key={key1}
      onClick={() => setOpen(!open)}
      className="group relative box-border flex w-max cursor-pointer select-none flex-row items-center gap-2 px-4"
    >
      <img src="/more-circle.svg" />
      <div
        className={`ani absolute right-0 top-1 z-[20] box-border block w-[150px] translate-x-[-60px] rounded-[10px] border border-[#C2C6E8] bg-[white] shadow-lg group-hover:border-[#9ba1d1] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[-14px] opacity-0"
        }`}
      >
        {actions.map((option, index) => {
          return (
            <button
              onClick={() => {
                option.onClick();
              }}
              key={index}
              className={`w-full select-none text-ellipsis rounded-[10px] px-4 py-[14px] text-[14px] font-semibold text-[#54577A] hover:bg-[#F2F4F7]`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PaginationDropDown({
  selected,
  setSelected,
  label,
  options,
  setCurrentPage,
}: {
  selected: number;
  setSelected: any;
  label: number;
  options: number[];
  setCurrentPage: any;
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
      className="group relative box-border flex h-[43px] shrink-0 cursor-pointer select-none flex-row items-center gap-2 rounded-[10px] border border-[#C2C6E8] bg-[#ffffff] px-4 hover:border-[#9ba1d1]"
    >
      <p className="pointer-events-none select-none text-[14px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" className="rotate-180" />
      <div
        className={`ani absolute bottom-1 right-0 z-[20] box-border block w-[100px] rounded-[10px] border border-[#C2C6E8] bg-[white] shadow-lg group-hover:border-[#9ba1d1] ${
          open
            ? "pointer-events-auto translate-y-[-43px] opacity-100"
            : "pointer-events-none translate-y-0 opacity-0"
        }`}
      >
        {options.map((option, index) => {
          return (
            <button
              onClick={() => {
                setCurrentPage(1);
                setSelected(option);
              }}
              key={index}
              className={`w-full select-none text-ellipsis rounded-[10px] px-4 py-[10px] text-[14px] font-semibold text-[#54577A] hover:bg-[#F2F4F7] ${
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

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "overdue":
      return "bg-[#DB2719] text-[#FFFFFF]";
    case "shipped":
      return "bg-[#E8FAA6] text-[#4C7A0B] ";
    case "flagged":
      return "bg-[#FFEFB0] text-[#7A4D0B] ";
    case "delivered":
      return "bg-[#659711] text-[#FFFFFF]";
    case "due today":
      return "bg-[#FFC8A6] text-[#7A0619]";
    case "active":
      return "bg-[#dfdfff] text-[blue]";
    default:
      return "bg-gray-400";
  }
};