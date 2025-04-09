import React from "react"
import {
  Briefcase,
  HardHat,
  Users,
  Settings,
  LogOut,
  Search,
} from "lucide-react";
import logo from '../assets/icon/logo.png'
import account from '../assets/icon/account.png'


const Sidebar = () => {
  return (
    <div className="flex h-full">
      {/* Left mini bar */}
      <div className="w-14 bg-custom-gray text-white flex flex-col justify-between items-center py-6">
        <div className="flex flex-col items-center gap-6">
          <img src = {logo} alt={logo} className="w-9 h-9  flex items-center justify-center" />
          <img src = {account} alt={account} className="w-10 h-10  flex items-center justify-center" />
          <button className="hover:text-gray-300">
            <Search size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-6 text-gray-400 text-xs">
          <button className="hover:text-white">
            <Settings size={18} />
          </button>
          <button className="hover:text-white">
            <LogOut size={18} />
          </button>
        </div>
      </div>
      {/* Sidebar navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
          <div className="p-6">
            <h1 className="font-bold text-lg">Oak Tree Cemetery</h1>
            <p className="text-gray-500 text-sm">Process Manager</p>
          </div>
          <div className="mt-4 px-6 space-y-3">
            <button className="w-full flex items-center gap-3 bg-custom-gray text-white py-2 px-4 rounded">
              <Briefcase size={18} />
              Organizations
            </button>
            <button className="w-full flex items-center gap-3 border py-2 px-4 rounded hover:bg-gray-100">
              <HardHat size={18} />
              Contractors
            </button>
            <button className="w-full flex items-center gap-3 border py-2 px-4 rounded hover:bg-gray-100">
              <Users size={18} />
              Clients
            </button>
          </div>
        </div>
        <div className="p-6 text-sm text-gray-400">
          All Funeral Services © 2015–2025
        </div>
      </div>
    </div>
  );
};
export default Sidebar;