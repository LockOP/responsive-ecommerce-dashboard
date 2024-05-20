"use client";
import { useEffect, useRef, useState } from "react";

export default function DropDown({
  selected,
  setSelected,
  label,
  options,
  allowClear = true,
  hidden = false,
  classname = "",
}: {
  selected: string;
  setSelected: any;
  label: string;
  options: string[];
  allowClear?: boolean;
  hidden?: boolean | number;
  classname?: string;
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
    <div className="flex flex-col gap-4 flex-grow">
      <div className="text-sm leading-4 font-medium">{label}</div>
      <div
        ref={DropDownRef}
        key={"dd" + label}
        onClick={() => setOpen(!open)}
        className={`shrink-0 rounded-[10px] ${classname} flex flex-grow items-center bg-[#ffffff] relative select-none border box-border group px-4 gap-2 cursor-pointer ${
          open ? "border-[#546FFF]" : "border-[#F5F5F7] "
        } ${hidden ? "hidden" : ""} `}
      >
        <div className="flex flex-row justify-between  w-full">
          <p className="select-none pointer-events-none text-[20px] leading-[28px] font-medium text-[#161317]">
            {selected === "" ? "Choose one" : selected}
          </p>
          <img src="/ArrowDown.svg" />
        </div>

        <div
          className={`absolute z-[20] w-full block box-border top-4 left-0 shadow-lg bg-[#ffffff] rounded-[10px] ani border border-[#C2C6E8] overflow-hidden ${
            open
              ? "opacity-100 z-[90] bg-[white] pointer-events-auto translate-y-10 "
              : "opacity-0 pointer-events-none translate-y-[-14px] "
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
                    ? "bg-[#DDE2FF] hover:bg-[#d1d8fc] "
                    : "hover:bg-[#F2F4F7] "
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
