import { useEffect, useRef, useState } from "react";
import { DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";

import "./calendar.css";

function DropDownCalendar({
  selected,
  setSelected,
  label,
  options,
  allowClear = true,
  hidden = false,
}: {
  selected?: string;
  setSelected?: any;
  label?: string;
  options?: string[];
  allowClear?: boolean;
  hidden?: boolean | number;
}) {
  const [open, setOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<any>([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropDownRef.current &&
      !DropDownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // const specificText = "MUI X Missing license key";
    // const divs = DropDownRef?.current?.querySelectorAll("div");
    // divs?.forEach((div) => {
    //   if (div.textContent == specificText) {
    //     div.remove();
    //     return;
    //   }
    // });

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
      className={`group relative box-border flex h-11 shrink-0 cursor-pointer select-none flex-row items-center gap-2 rounded-[10px] border bg-[#ffffff] px-4 ${
        open ? "border-[#546FFF]" : "border-[#C2C6E8]"
      } ${hidden ? "hidden" : ""}`}
    >
      <p className="pointer-events-none select-none text-[12px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ani absolute left-0 top-4 z-[20] box-border block w-max flex-col overflow-hidden rounded-[10px] border border-[#C2C6E8] bg-[white] shadow-lg ${
          open
            ? "pointer-events-auto translate-y-11 opacity-100"
            : "pointer-events-none translate-y-[-14px] opacity-0"
        }`}
      >
        <div className="flex w-full cursor-default flex-col gap-6 px-[14px] py-4">
          <div className="flex w-full flex-col gap-[6px]">
            <div className="flex w-full flex-row items-center justify-between px-2 text-[black]">
              <p className="flex-grow font-semibold text-[#54577a]">From</p>
              <p className="flex-grow font-semibold text-[#54577a]">To</p>
            </div>
            <div className="w-full px-2">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                weekdayDisplayFormat="EEEEE"
                showMonthAndYearPickers={false}
              />
            </div>
          </div>

          <div className="flex w-full flex-row justify-between gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="box-border flex h-[36px] flex-grow flex-row items-center justify-center rounded-[10px] border border-[#C2C6E8] px-4 text-[#54577A]"
            >
              Clear
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="box-border flex h-[36px] flex-grow flex-row items-center justify-center rounded-[10px] border border-[#3D53DB] bg-[#3D53DB] px-4 text-[#FFF]"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropDownDatePicker({
  selected,
  setSelected,
  label,
  options,
  allowClear = true,
  hidden = false,
}: {
  selected?: string;
  setSelected?: any;
  label?: string;
  options?: string[];
  allowClear?: boolean;
  hidden?: boolean | number;
}) {
  const [open, setOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<any>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropDownRef.current &&
      !DropDownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // const specificText = "MUI X Missing license key";
    // const divs = DropDownRef?.current?.querySelectorAll("div");
    // divs?.forEach((div) => {
    //   if (div.textContent == specificText) {
    //     div.remove();
    //     return;
    //   }
    // });

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
      className={`group relative box-border flex h-11 shrink-0 cursor-pointer select-none flex-row items-center gap-2 rounded-[10px] border bg-[#ffffff] px-4 ${
        open ? "border-[#546FFF]" : "border-[#C2C6E8]"
      } ${hidden ? "hidden" : ""}`}
    >
      <p className="pointer-events-none select-none text-[12px] font-semibold text-[#54577A]">
        {label}
      </p>
      <img src="/ArrowDown.svg" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`ani absolute left-0 top-4 z-[20] box-border block w-max flex-col overflow-hidden rounded-[10px] border border-[#C2C6E8] bg-[white] shadow-lg ${
          open
            ? "pointer-events-auto translate-y-11 opacity-100"
            : "pointer-events-none translate-y-[-14px] opacity-0"
        }`}
      >
        <div className="flex w-full cursor-default flex-col gap-6 px-[14px] pb-4">
          <div className="flex w-full flex-col gap-[6px]">
            
            <div className="w-full px-2">
              <Calendar
                editableDateInputs={true}
                onChange={(item) => setState(item)}
                date={state}
                weekdayDisplayFormat="EEEEE"
                showMonthAndYearPickers={false}
              />
            </div>
          </div>

          <div className="flex w-full flex-row justify-between gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="box-border flex h-[36px] flex-grow flex-row items-center justify-center rounded-[10px] border border-[#C2C6E8] px-4 text-[#54577A]"
            >
              Clear
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="box-border flex h-[36px] flex-grow flex-row items-center justify-center rounded-[10px] border border-[#3D53DB] bg-[#3D53DB] px-4 text-[#FFF]"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownCalendar;

export { DropDownDatePicker };

// <div
//   ref={DropDownRef}
//   key={"dd" + label}
//   onClick={() => setOpen(!open)}
//   className={`group relative box-border flex h-11 shrink-0 cursor-pointer select-none flex-row items-center gap-2 rounded-[10px] border bg-[#ffffff] px-4 ${
//     open ? "border-[#546FFF]" : "border-[#C2C6E8]"
//   } ${hidden ? "hidden" : ""}`}
// >
//   <p className="pointer-events-none select-none text-[12px] font-semibold text-[#54577A]">
//     {label}
//   </p>
//   <img src="/ArrowDown.svg" />
//   <div
//     onClick={(e) => e.stopPropagation()}
//     className={`ani absolute left-0 top-4 z-[20] box-border block w-max flex-col overflow-hidden rounded-[10px] border border-[#C2C6E8] bg-[white] shadow-lg ${
//       open
//         ? "pointer-events-auto translate-y-11 opacity-100"
//         : "pointer-events-none translate-y-[-14px] opacity-0"
//     }`}
//   >
//     <div className="flex w-full cursor-default flex-col gap-6 px-[14px] py-4">
//       <div className="flex w-full flex-col gap-[6px]">
//         <div className="flex w-full flex-row items-center justify-between px-2 text-[black]">
//           <p className="flex-grow font-semibold text-[#54577a]">From</p>
//           <p className="flex-grow font-semibold text-[#54577a]">To</p>
//         </div>
//         <div className="w-full px-2">
//           <Calendar
//             editableDateInputs={true}
//             onChange={(item) => setState(item)}
//             date={state}
//             weekdayDisplayFormat="EEEEE"
//             showMonthAndYearPickers={false}
//           />
//         </div>
//       </div>

//       <div className="flex w-full flex-row justify-between gap-4">
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//           }}
//           className="box-border flex h-[36px] flex-grow flex-row items-center justify-center rounded-[10px] border border-[#C2C6E8] px-4 text-[#54577A]"
//         >
//           Clear
//         </button>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//           }}
//           className="box-border flex h-[36px] flex-grow flex-row items-center justify-center rounded-[10px] border border-[#3D53DB] bg-[#3D53DB] px-4 text-[#FFF]"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
