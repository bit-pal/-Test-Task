import React from "react";
import {  ChevronLeft, Edit, Trash2 } from "lucide-react";

const CompanyHeader = ({name, onEdit, onDelete}) => {
 
  return (
    <div className="flex items-center justify-between mb-6 mx-64 md:w-2/3 h-1/8">
      <div className="flex items-center gap-2">
        <ChevronLeft className="text-gray-500 " />
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
      <div className="flex items-center gap-4"> 

        <button className="px-6 py-3" onClick={()=>{onEdit()}}>
        <Edit className="text-gray-600 hover:text-black cursor-pointer" />
        </button>

        <button className="px-6 py-3" onClick={()=>{onDelete()}}>
        <Trash2 className="text-red-500 hover:text-red-700 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};
export default CompanyHeader;