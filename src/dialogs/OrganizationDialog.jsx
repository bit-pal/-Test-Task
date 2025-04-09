import React, { useState } from "react";
import { Check, X } from "lucide-react";

const OrganizationDialog = ({ organization, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    agreementNumber: organization.contract.no,
    agreementDate: organization.contract.issue_date,
    businessEntity: organization.businessEntity,
    type: [],
  });
  const companyTypes = [
    {
      name: "Funeral Home",
      indicator: "funeral_home"
    },
    {
      name: "Logistics Services",
      indicator: "logistics_services"
    },
    {
      name: "Healthcare Provider",
      indicator: "burial_care_contractor"
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const isSelected = prev.type.includes(option);
      const updatedTypes = isSelected
        ? prev.type.filter((type) => type !== option)
        : [...prev.type, option];
      return { ...prev, type: updatedTypes };
    });
  };


  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 mx-64 md:w-2/3 border border-gray-300 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="font-semibold text-md">Company Details</h2>
        <div className="flex gap-2">
          <button
            onClick={() => onSave(formData)}
            className="flex items-center gap-1 border text-sm px-3 py-1 rounded-lg hover:bg-gray-100"
          >
            <Check size={16} /> Save changes
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-1 border text-sm px-3 py-1 rounded-lg hover:bg-gray-100"
          >
            <X size={16} /> Cancel
          </button>
        </div>
      </div>

      {/* Form grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-2 text-sm text-gray-700">
        {/* Agreement Number */}
        <div>
          <label className="text-gray-500 mb-1 block">Agreement number:</label>
          <input
            type="text"
            name="agreementNumber"
            value={formData.agreementNumber}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Agreement Date */}
        <div>
          <label className="text-gray-500 mb-1 block">Date:</label>
          <input
            type="text"
            name="agreementDate"
            value={formData.agreementDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-1.5"
          />
        </div>

        {/* Business Entity */}
        <div className="col-span-2">
          <label className="text-gray-500 mb-1 block">Business entity:</label>
          <select
            name="businessEntity"
            value={formData.businessEntity}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-1.5"
          >
            <option value="">Select</option>
            <option value="Partnership">Partnership</option>
            <option value="Corporation">Corporation</option>
            <option value="LLC">LLC</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
          </select>
        </div>

        {/* Company Type with Checkboxes */}
        <div className="col-span-2">
          <label className="text-gray-500 mb-1 block">Company type:</label>
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full border rounded-lg px-3 py-1.5 text-left"
          >
            {"Select Company Types"}
          </button>
          {isDropdownOpen && (
            <div className="border rounded-lg p-3">
              {companyTypes.map(
                (type, index) => (
                  <label key={index} className="flex items-center gap-x-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.type.includes(type.indicator)}
                      onChange={() => handleCheckboxChange(type.indicator)}
                      className="rounded text-green-500 focus:ring-green-500"
                    />
                    {type.name}
                  </label>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationDialog;
