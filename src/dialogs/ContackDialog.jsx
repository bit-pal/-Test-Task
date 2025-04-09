import React,{useState} from 'react';

const ContactDialog = ({contact, onClose,onSave}) => {
    const [formData, setFormData] = useState({
        person: contact.firstname +" "+ contact.lastname,
        phoneNumber: contact.phone,
        email: contact.email
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="bg-white-500 rounded-xl shadow-sm p-6 mb-6 mx-64 md:w-2/3  border border-gray-300 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900">Contacts</h2>
        <div className="flex gap-2">
          <button className="flex items-center px-3 py-[2px] text-xs font-semibold border border-gray-400 rounded-md hover:bg-gray-100"onClick={()=>onSave(formData)}>
            Save changes
          </button>
          <button className="flex items-center px-3 py-[2px] text-xs font-semibold border border-gray-400 rounded-md hover:bg-gray-100" onClick={()=>onClose()}>
            <span className="text-lg mr-1">✕</span> Cancel
          </button>
        </div>
      </div>
      {/* Form */}
      <div className="mt-3 space-y-2 text-xs text-gray-600">
        <div className="flex items-center">
          <label className="w-[120px]">Responsible person:</label>
          <input
            type="text"
            name="person"
            value={formData.person}
            onChange={handleChange}
            className="flex-1 text-gray-900 text-sm px-3 py-1.5 rounded-md border border-gray-300 outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>
        <div className="flex items-center">
          <label className="w-[120px]">Phone number:</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            className="flex-1 text-gray-900 text-sm px-3 py-1.5 rounded-md border border-gray-300 outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>
        <div className="flex items-center">
          <label className="w-[120px]">E-mail:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="flex-1 text-gray-900 text-sm px-3 py-1.5 rounded-md border border-gray-300 outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactDialog;