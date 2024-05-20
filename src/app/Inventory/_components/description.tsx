import React, { useState } from 'react';

export default function Description() {
  const [description, setDescription] = useState(''); 

  const handleDescriptionChange = (event:any) => {
    setDescription(event.target.value); 
  };

  return (
    <div className="description-container">
      <textarea
        id="description"
        value={description} // Controlled input: reflect state in value
        onChange={handleDescriptionChange} // Update state on change
        className="border border-[#F5F5F7] rounded-[10px] p-2 w-full focus:outline-none" 
      />
    </div>
  );
}
