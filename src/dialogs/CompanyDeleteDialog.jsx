import React from 'react';

const CompanyDeleteDialog = ({ onCancel, onSave }) => {

  return (
    <div className=" bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="font-semibold text-center text-sm flex-1 mr-4">
            Remove the organization?
          </h2>
        </div>
        <h2>Are you sure you want to remove this organization?</h2>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={()=>onCancel()}
          className="w-[48%] border text-black font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
        >
          No
        </button>
        <button
          onClick={()=>onSave()}
          className="w-[48%] bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Yes, remove
        </button>
      </div>
    </div>
  );
};
export default CompanyDeleteDialog;