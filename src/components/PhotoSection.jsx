import React from "react";
import { Plus, Trash2 } from "lucide-react";

const PhotoSection = ({ photos, onUpload, onDelete }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 mb-6 mx-64 md:w-2/3  border border-gray-300 shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-semibold">Photos</h3>
      <button className="border px-3 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-gray-100">
        <Plus size={14} />
        <input type="file" onChange={(e) => onUpload(e.target.files[0])} />
        Add
      </button>
    </div>
    <div className="flex gap-4">
      {photos.map((photo) => (
        <div key={photo.name} className="relative w-1/4 rounded overflow-hidden">
          <img src={photo.thumbpath} alt="thumb" className="w-full h-full object-cover rounded" />
          <button
            className="absolute top-1 right-1 bg-white-500 text-white rounded-full p-1"
            onClick={() => onDelete(photo.name)}
          >
            <Trash2 className="text-gray-600 text-xs"/>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default PhotoSection;