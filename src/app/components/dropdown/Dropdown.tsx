"use client";
import React, { useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  options: string[]; // Array of options for the dropdown
  defaultValue?: string; // Default selected option
  onChange?: (selectedOption: string) => void; // Callback function to handle option changes
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultValue
  );

  // Handler for when the dropdown value changes
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); // Update the selected option in the state
    // Call the onChange callback with the new selected value if provided
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    // Render the select element with options and event handler
    <div className={styles.selectContainer}>
      <select
        value={selectedOption}
        onChange={handleChange}
        className={styles.customSelect}
      >
        <option value={defaultValue} disabled>
          {defaultValue}
        </option>
        {options.map((option, index) => (
          // Map over the options array to create option elemens
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
