import React from "react";
import { Edit } from "lucide-react";

const ContactDetails = ({ title, fields, onEdit }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 mb-6 mx-64 md:w-2/3 h-1/4 border border-gray-300 shadow-lg">
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <button className="border px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-gray-100" onClick={()=>onEdit()}>            
      <Edit size={14} />
      Edit
    </button>
    
  </div>
  <div className="space-y-2 text-sm text-gray-700">
    {fields.map(({ label, value }, idx) => (
      <p key={idx}>
        <span className="font-medium text-gray-500">{label}</span> {value}
      </p>
    ))}
  </div>
</div>
);

export default ContactDetails;