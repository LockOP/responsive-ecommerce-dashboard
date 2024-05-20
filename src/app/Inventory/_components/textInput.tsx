import React, { useState } from "react";

export default function TextInput({
  value = "",
  setValue = () => {},
  label = "Label",
  textArea = false,
  classnameTextInput = "",
  classnameTextdimension = "",
}: {
  value: string;
  setValue: any;
  label: string;
  textArea?: boolean;
  classnameTextInput?: string;
  classnameTextdimension?: string;
  
}) {
  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className={` flex-1 flex flex-col gap-3 justify-start items-start ${classnameTextInput}`}>
      <p className="text-[#161317] text-xs font-medium leading-[14px]">{label}</p>
      {textArea ? (
        <textarea
          autoComplete="off"
          id="textArea"
          value={value}
          onChange={handleInputChange}
          className={`border border-[#ACACCE] box-border resize-none rounded-[10px] ${classnameTextdimension} h-20 w-full focus:outline-none py-4 px-5 text-sm font-medium text-[#161317] leading-4`}
        />
      ) : (
        <input
          autoComplete="off"
          id="textInput"
          type="text"
          value={value}
          onChange={handleInputChange}
          className={` border border-[#ACACCE] box-border rounded-[10px] w-full focus:outline-none h-12 px-5 text-sm font-medium text-[#161317] leading-4 ${classnameTextdimension}`}
        />
      )}
    </div>
  );
}
