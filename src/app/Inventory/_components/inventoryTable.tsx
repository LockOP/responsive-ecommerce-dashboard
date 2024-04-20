"use client";
import React, { useEffect, useRef, useState } from "react";

export default function InventoryTable() {
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(1);

  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  function selectAll() {
    if (selectedRows.length === dummyData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...dummyData.map((item) => item.itemName)]);
    }
  }
  return (
    <>
      <div className="flex-grow overflow-auto mx-[30px] select-none border border-[#DFE1F3] rounded-lg bg-[white]">
        <table className="table-auto w-full max-[1024px]:w-[1240px] max-[1024px] text-left select-none">
          <thead className="sticky top-0 bg-[#F9FAFB] z-[10] border-b border-[#DFE1F3]">
            <tr className="bg-[#F9FAFB] text-[#6B7280] font-light text-[14px]">
              <th className="pl-6 font-normal py-4 w-14 h-14">
                <div className="border-[2.25px] border-[#C5C6CC] rounded-md overflow-clip w-5 h-5 flex justify-center items-center relative">
                  <input
                    checked={selectedRows.length === dummyData.length}
                    onClick={selectAll}
                    type="checkbox"
                    id="checkbox"
                    className="absolute h-5 w-5 accent-[#ffffff]"
                  />
                </div>
              </th>
              <th className=""></th>
              <th className="font-medium w-[16%]">Item Name</th>
              <th className="font-medium w-[15%]">Category</th>
              <th className="font-medium w-[15%]">Platform</th>
              <th className="font-medium w-[12%]">Stock</th>
              <th className="font-medium w-[12%]">Price</th>
              <th className="font-medium w-[14%]">Last Sold</th>
              <th className="font-medium w-[14%]">Status</th>
              <th className="pr-6 font-medium w-[14%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData
              .slice((page - 1) * rows, (page - 1) * rows + rows)
              .map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#DFE1F3] bg-[white]"
                >
                  <td className="pl-6 w-14 h-14">
                    <div className="border-[2.25px] border-[#C5C6CC] rounded-md overflow-clip w-5 h-5 flex justify-center items-center relative">
                      <input
                        checked={selectedRows.includes(item.itemName)}
                        onClick={() => {
                          if (selectedRows.includes(item.itemName)) {
                            setSelectedRows(
                              selectedRows.filter(
                                (selectedRow) => selectedRow !== item.itemName
                              )
                            );
                          } else {
                            setSelectedRows([...selectedRows, item.itemName]);
                          }
                        }}
                        type="checkbox"
                        id="checkbox"
                        className="absolute h-5 w-5 accent-[#ffffff]"
                      />
                    </div>
                  </td>
                  <td className="">
                    <div className="w-10 h-10 bg-[#D9D9D9] rounded-md mx-8"></div>
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.itemName}
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.category}
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.platform}
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.stock}
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.lastSold}
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.date}
                  </td>
                  {/* <td>{item.date}</td> */}
                  <td className="text-[#000000] font-semibold text-[12px]">
                    {item.status}
                  </td>
                  <td className="text-[#000000] font-semibold text-[12px]">
                    <DropDown
                      key={item.itemName}
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
          {(page - 1) * rows + rows < dummyData.length
            ? (page - 1) * rows + rows
            : dummyData.length}{" "}
          of {dummyData.length} results
        </div>
        <div className="flex flex-row justify-between gap-5 items-center">
          <div className="flex flex-row items-center gap-2">
            <p className="text-[14px] text-[#374151]">View</p>
            <PaginationDropDown
              label={rows}
              options={[10, 20, 30, 50]}
              selected={rows}
              setSelected={setRows}
            />
          </div>
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            totalRows={dummyData.length}
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
  key,
  actions,
}: {
  key: string;
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
      key={key}
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
}: {
  selected: number;
  setSelected: any;
  label: number;
  options: number[];
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

const dummyData = [
  {
    id: 1,
    itemName: "Item1",
    category: "Category1",
    platform: "Platform1",
    stock: 10,
    price: 15.23,
    lastSold: "$20.00",
    date: "2022-01-01",
    status: "Active",
  },
  {
    id: 2,
    itemName: "Item2",
    category: "Category2",
    platform: "Platform2",
    stock: 15,
    price: 23.45,
    lastSold: "$25.00",
    date: "2022-02-01",
    status: "Inactive",
  },
  {
    id: 3,
    itemName: "Item3",
    category: "Category3",
    platform: "Platform3",
    stock: 20,
    price: 32.67,
    lastSold: "$30.00",
    date: "2022-03-01",
    status: "Active",
  },
  {
    id: 4,
    itemName: "Item4",
    category: "Category4",
    platform: "Platform4",
    stock: 5,
    price: 40.89,
    lastSold: "$35.00",
    date: "2022-04-01",
    status: "Inactive",
  },
  {
    id: 5,
    itemName: "Item5",
    category: "Category5",
    platform: "Platform5",
    stock: 30,
    price: 55.12,
    lastSold: "$40.00",
    date: "2022-05-01",
    status: "Active",
  },
  {
    id: 6,
    itemName: "Item6",
    category: "Category6",
    platform: "Platform6",
    stock: 25,
    price: 65.34,
    lastSold: "$45.00",
    date: "2022-06-01",
    status: "Inactive",
  },
  {
    id: 7,
    itemName: "Item7",
    category: "Category7",
    platform: "Platform7",
    stock: 8,
    price: 73.56,
    lastSold: "$50.00",
    date: "2022-07-01",
    status: "Active",
  },
  {
    id: 8,
    itemName: "Item8",
    category: "Category8",
    platform: "Platform8",
    stock: 12,
    price: 85.78,
    lastSold: "$55.00",
    date: "2022-08-01",
    status: "Inactive",
  },
  {
    id: 9,
    itemName: "Item9",
    category: "Category9",
    platform: "Platform9",
    stock: 18,
    price: 91.01,
    lastSold: "$60.00",
    date: "2022-09-01",
    status: "Active",
  },
  {
    id: 10,
    itemName: "Item10",
    category: "Category10",
    platform: "Platform10",
    stock: 22,
    price: 104.23,
    lastSold: "$65.00",
    date: "2022-10-01",
    status: "Inactive",
  },
  {
    id: 11,
    itemName: "Item11",
    category: "Category11",
    platform: "Platform11",
    stock: 7,
    price: 112.45,
    lastSold: "$70.00",
    date: "2022-11-01",
    status: "Active",
  },
  {
    id: 12,
    itemName: "Item12",
    category: "Category12",
    platform: "Platform12",
    stock: 11,
    price: 120.67,
    lastSold: "$75.00",
    date: "2022-12-01",
    status: "Inactive",
  },
  {
    id: 13,
    itemName: "Item13",
    category: "Category13",
    platform: "Platform13",
    stock: 28,
    price: 135.89,
    lastSold: "$80.00",
    date: "2022-13-01",
    status: "Active",
  },
  {
    id: 14,
    itemName: "Item14",
    category: "Category14",
    platform: "Platform14",
    stock: 17,
    price: 143.12,
    lastSold: "$85.00",
    date: "2022-14-01",
    status: "Inactive",
  },
  {
    id: 15,
    itemName: "Item15",
    category: "Category15",
    platform: "Platform15",
    stock: 33,
    price: 155.34,
    lastSold: "$90.00",
    date: "2022-15-01",
    status: "Active",
  },
  {
    id: 16,
    itemName: "Item16",
    category: "Category16",
    platform: "Platform16",
    stock: 27,
    price: 160.56,
    lastSold: "$95.00",
    date: "2022-16-01",
    status: "Inactive",
  },
  {
    id: 17,
    itemName: "Item17",
    category: "Category17",
    platform: "Platform17",
    stock: 9,
    price: 175.78,
    lastSold: "$100.00",
    date: "2022-17-01",
    status: "Active",
  },
  {
    id: 18,
    itemName: "Item18",
    category: "Category18",
    platform: "Platform18",
    stock: 14,
    price: 180.01,
    lastSold: "$105.00",
    date: "2022-18-01",
    status: "Inactive",
  },
  {
    id: 19,
    itemName: "Item19",
    category: "Category19",
    platform: "Platform19",
    stock: 21,
    price: 195.23,
    lastSold: "$110.00",
    date: "2022-19-01",
    status: "Active",
  },
  {
    id: 20,
    itemName: "Item20",
    category: "Category20",
    platform: "Platform20",
    stock: 24,
    price: 200.45,
    lastSold: "$115.00",
    date: "2022-20-01",
    status: "Inactive",
  },
  {
    id: 21,
    itemName: "Item21",
    category: "Category21",
    platform: "Platform21",
    stock: 6,
    price: 215.67,
    lastSold: "$120.00",
    date: "2022-21-01",
    status: "Active",
  },
  {
    id: 22,
    itemName: "Item22",
    category: "Category22",
    platform: "Platform22",
    stock: 19,
    price: 220.89,
    lastSold: "$125.00",
    date: "2022-22-01",
    status: "Inactive",
  },
  {
    id: 23,
    itemName: "Item23",
    category: "Category23",
    platform: "Platform23",
    stock: 26,
    price: 235.12,
    lastSold: "$130.00",
    date: "2022-23-01",
    status: "Active",
  },
  {
    id: 24,
    itemName: "Item24",
    category: "Category24",
    platform: "Platform24",
    stock: 16,
    price: 240.34,
    lastSold: "$135.00",
    date: "2022-24-01",
    status: "Inactive",
  },
  {
    id: 25,
    itemName: "Item25",
    category: "Category25",
    platform: "Platform25",
    stock: 32,
    price: 255.56,
    lastSold: "$140.00",
    date: "2022-25-01",
    status: "Active",
  },
  {
    id: 26,
    itemName: "Item26",
    category: "Category26",
    platform: "Platform26",
    stock: 29,
    price: 260.78,
    lastSold: "$145.00",
    date: "2022-26-01",
    status: "Inactive",
  },
  {
    id: 27,
    itemName: "Item27",
    category: "Category27",
    platform: "Platform27",
    stock: 4,
    price: 275.01,
    lastSold: "$150.00",
    date: "2022-27-01",
    status: "Active",
  },
  {
    id: 28,
    itemName: "Item28",
    category: "Category28",
    platform: "Platform28",
    stock: 13,
    price: 280.23,
    lastSold: "$155.00",
    date: "2022-28-01",
    status: "Inactive",
  },
  {
    id: 29,
    itemName: "Item29",
    category: "Category29",
    platform: "Platform29",
    stock: 23,
    price: 295.45,
    lastSold: "$160.00",
    date: "2022-29-01",
    status: "Active",
  },
  {
    id: 30,
    itemName: "Item30",
    category: "Category30",
    platform: "Platform30",
    stock: 18,
    price: 300.67,
    lastSold: "$165.00",
    date: "2022-30-01",
    status: "Inactive",
  },
];
