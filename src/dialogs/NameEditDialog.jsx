import React, { useState } from 'react';

const Dialog = ({ name, onCancel, onSave}) => {
    const [inputValue, setInputValue] = useState(name);

    const handleChange = (event) => {
       const newValue = event.target.value;
       setInputValue(newValue);
   };
  return (
    <div className=" bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="font-semibold text-center flex-1 mr-4">
            Specify the Organization&apos;s name
          </h1>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          // defaultValue="d"
          className="w-full border rounded-lg px-4 py-2 mt-2 text-center font-medium text-gray-800 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={()=>onCancel()}
          className="w-[48%] border text-black font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={()=>onSave(inputValue)}
          className="w-[48%] bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};
export default Dialog;