"use-client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = ({ value, onChange, placeholder, ...props }: any) => (
  <input
    type="text"
    value={value || placeholder}
    onChange={onChange}
    placeholder={placeholder}
    style={{ fontSize: "14px", lineHeight: "16px", maxWidth: "94px" }} // Inline styles
    {...props}
  />
);

const CustomDatePicker = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: any;
  setSelectedDate: any;
}) => {
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="flex flex-grow flex-col gap-4">
        <div className="text-sm font-medium leading-4">Shipment Date</div>
        <div className="datepicker-wrapper flex max-w-[156px] flex-row rounded-md border border-[#ACACCE]">
          <div className="flex flex-row gap-[7px] p-2">
            <div className="flex h-[16.8px] w-[16.8px] items-center justify-center pt-2">
              <img src="../assets/calendar.png" alt="calendarImage" />
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              customInput={<CustomInput placeholder="dd/mm/yyyy" />}
            />
            <button>
              <img src="../assets/arrow-down.png" alt="arrowDown" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDatePicker;
