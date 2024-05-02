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
      setSelectedRows([...data.map((item) => item.orderId)]);
    }
  }
  return (
    <>
      <div className="flex-grow overflow-auto mx-[30px] select-none border border-[#DFE1F3] rounded-lg bg-[white]">
        <table className="table-auto w-full max-[1024px]:w-[1240px] max-[1024px] text-left select-none">
          <thead className="sticky top-0 bg-[#F9FAFB] z-[10] border-b border-[#DFE1F3]">
            <tr className="bg-[#F9FAFB] text-[#6B7280] font-light text-[14px]">
              <th className="pl-6 font-normal py-4 w-14 h-14 border-r border-[#DFE1F3] ">
                <div className="border-[2.25px] border-[#C5C6CC] rounded-md overflow-clip w-5 h-5 flex justify-center items-center relative">
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
              <th className="font-medium w-[10%] border-r border-[#DFE1F3] pl-5">
                <span className="flex flex-row gap-2 items-center">
                  Order Id
                  <button
                    onClick={() => {
                      setSortType(
                        sortType === null
                          ? "asc"
                          : sortType == "asc"
                          ? "desc"
                          : null
                      );
                      setSortColumn("orderId");
                    }}
                    className="group"
                  >
                    <RiExpandUpDownLine className="text-[16px] text-[#8E92BC] group-hover:text-[#333] ani" />
                  </button>
                </span>
              </th>
              <th className="font-medium w-[12%] border-r border-[#DFE1F3] pl-5">
                Order Date
              </th>
              <th className="font-medium w-[15%] border-r border-[#DFE1F3] pl-5">
                Customer
              </th>
              <th className="font-medium w-[12%] border-r border-[#DFE1F3] pl-5">
                Platform
              </th>
              <th className="font-medium w-[7%] border-r border-[#DFE1F3] pl-5">
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
              </th>
              <th className="font-medium w-[20%] border-r border-[#DFE1F3] pl-5">
                Tracking Number
              </th>
              <th className="font-medium w-[14%] border-r border-[#DFE1F3] pl-5">
                Order Status
              </th>
              <th className="pr-6 font-medium w-[14%] border-r border-[#DFE1F3] pl-5">
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
                  key={item.orderId}
                  className="border-b border-[#DFE1F3] bg-[white]"
                >
                  <td className="px-6 w-14 h-14">
                    <div className="border-[2.25px] border-[#C5C6CC] rounded-md overflow-clip w-5 h-5 flex justify-center items-center relative">
                      <input
                        readOnly
                        checked={selectedRows.includes(item.orderId)}
                        onClick={() => {
                          if (selectedRows.includes(item.orderId)) {
                            setSelectedRows(
                              selectedRows.filter(
                                (selectedRow) => selectedRow !== item.orderId
                              )
                            );
                          } else {
                            setSelectedRows([...selectedRows, item.orderId]);
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
                  <td className="text-[#6B7280] text-[14px] pl-5">
                    {item.orderId}
                  </td>
                  <td className="text-[#6B7280] text-[14px] pl-5">
                    {item.orderDate}
                  </td>
                  <td className="text-[#6B7280] text-[14px] pl-5">
                    {item.customer}
                  </td>
                  <td className="text-[#6B7280] text-[14px] pl-5">
                    {item.platform}
                  </td>
                  <td className="text-[#6B7280] text-[14px] pl-5">
                    {item.quantity}
                  </td>
                  <td className="text-[#6B7280] text-[14px] pl-5">
                    {item.value}
                  </td>
                  {/* <td>{item.date}</td> */}
                  <td className="text-[#111827] font-medium text-[14px] pl-5">
                    {item.trackingNumber}
                  </td>
                  <td className="pl-5">
                    <div
                      className={`text-[14px] leading-[21px] h-auto px-[9px] py-[2px] w-max rounded-full ${getStatusColor(
                        item.orderStatus
                      )}`}
                    >
                      {item.orderStatus}
                    </div>
                  </td>
                  {/* <td className="text-[#000000] font-semibold text-[12px]">
                    
                  </td> */}
                  <td className="text-[#6B7280] text-[14px]">
                    <DropDown
                      key1={item.orderId}
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

      <div className="select-none w-full px-[30px] h-[67px] flex flex-row border-t items-center border-[#E5E7EB] shrink-0 mt-[25px] justify-between">
        <div className="text-[14px] text-[#374151]">
          Showing {(page - 1) * rows + 1} to{" "}
          {(page - 1) * rows + rows < data.length
            ? (page - 1) * rows + rows
            : data.length}{" "}
          of {data.length} results
        </div>
        <div className="flex flex-row justify-between gap-5 items-center">
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
    <div className="flex flex-row gap-2 h-max">
      <button
        className="h-max text-[14px] font-bold text-[#6B7280] px-[7px] flex justify-center items-center pt-[7px] pb-[11px] border-b-2 disabled:text-[#d1d1d1] border-transparent hover:bg-[#e0e5ff] disabled:hover:bg-transparent"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span
            className="h-max text-[14px] font-medium text-[#6B7280] px-[7px] flex justify-center items-center pt-[7px] pb-[11px] border-b-2 border-transparent"
            key={index}
          >
            ...
          </span>
        ) : (
          <button
            className={`${
              number === currentPage
                ? "text-[#546FFF] border-[#546FFF]"
                : "text-[#6B7280 border-transparent"
            } h-max text-[14px] font-medium ] px-[7px] flex justify-center items-center pt-[7px] pb-[11px] border-b-2 hover:bg-[#e0e5ff]`}
            key={index}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        )
      )}
      <button
        className="h-max text-[14px] font-bold text-[#6B7280] px-[7px] flex justify-center items-center pt-[7px] pb-[11px] border-b-2 disabled:text-[#d1d1d1] border-transparent hover:bg-[#e0e5ff] disabled:hover:bg-transparent"
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
      className="flex flex-row items-center relative select-none w-max box-border group px-4 gap-2 cursor-pointer"
    >
      <img src="/more-circle.svg" />
      <div
        className={`absolute z-[20] w-[150px] block box-border top-1 right-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] group-hover:border-[#9ba1d1] translate-x-[-60px] ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-[-14px]"
        }`}
      >
        {actions.map((option, index) => {
          return (
            <button
              onClick={() => {
                option.onClick();
              }}
              key={index}
              className={`w-full text-ellipsis px-4 py-[14px] hover:bg-[#F2F4F7] select-none text-[14px] font-semibold text-[#54577A] rounded-[10px]`}
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
      className="shrink-0 rounded-[10px] h-[43px] flex flex-row items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border group px-4 gap-2 hover:border-[#9ba1d1] cursor-pointer"
    >
      <p className="select-none pointer-events-none text-[14px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" className="rotate-180" />
      <div
        className={`absolute z-[20] w-[100px] block box-border bottom-1 right-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] group-hover:border-[#9ba1d1] ${
          open
            ? "opacity-100 pointer-events-auto translate-y-[-43px]"
            : "opacity-0 pointer-events-none translate-y-0"
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
              className={`w-full text-ellipsis px-4 py-[10px] hover:bg-[#F2F4F7] select-none text-[14px] font-semibold text-[#54577A] rounded-[10px] ${
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

// const data = [];

// for (let i = 1; i <= 30; i++) {
//   const order = {
//     orderId: i,
//     orderDate: "2022-01-01",
//     customer: `Customer${i}`,
//     platform: `Platform${i}`,
//     quantity: Math.floor(Math.random() * 20) + 1, // Random quantity between 1 and 20
//     value: (Math.random() * 100).toFixed(2), // Random value between 0 and 100 with 2 decimal places
//     trackingNumber: Math.floor(Math.random() * 1000000000).toString(), // Random 9-digit tracking number
//     orderStatus: "Active",
//   };
//   data.push(order);
// }
