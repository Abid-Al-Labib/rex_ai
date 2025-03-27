import React from 'react';
import { LayoutDashboard, BarChart2, Settings, MapPin } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 border-r p-4 flex flex-col gap-6">
      {/* Main Menu */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Main Menu</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <LayoutDashboard size={18} />
            Dashboard
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <BarChart2 size={18} />
            Analytics
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <Settings size={18} />
            Settings
          </li>
        </ul>
      </div>

      {/* Locations Menu */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Locations</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <MapPin size={18} />
            Store #1
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <MapPin size={18} />
            Store #2
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <MapPin size={18} />
            Store #3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
