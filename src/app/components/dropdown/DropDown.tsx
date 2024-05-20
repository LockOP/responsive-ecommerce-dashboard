import { useEffect, useRef, useState } from "react";

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
                  allowClear ? (cur == option ? "" : option) : option,
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

export default DropDown;
