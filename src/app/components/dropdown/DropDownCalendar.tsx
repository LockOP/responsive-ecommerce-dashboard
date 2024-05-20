import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

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
        className={`absolute z-[20] w-max block box-border top-4 left-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] overflow-hidden flex-col ${
          open
            ? "opacity-100 pointer-events-auto translate-y-11"
            : "opacity-0 pointer-events-none translate-y-[-14px]"
        }`}
      >
        <div className="w-full flex flex-col gap-6 cursor-default px-[14px] py-4">
          <div className="flex flex-col w-full gap-[6px]">
            <div className="w-full flex flex-row justify-between items-center text-[black] px-2">
              <p className="text-[#54577a] font-semibold flex-grow">From</p>
              <p className="text-[#54577a] font-semibold flex-grow">To</p>
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

          <div className="w-full flex flex-row justify-between gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex-grow h-[36px] border box-border border-[#C2C6E8] rounded-[10px] px-4 flex flex-row items-center text-[#54577A] justify-center"
            >
              Clear
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex-grow h-[36px] border box-border border-[#3D53DB] bg-[#3D53DB] rounded-[10px] px-4 flex flex-row items-center text-[#FFF] justify-center"
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
