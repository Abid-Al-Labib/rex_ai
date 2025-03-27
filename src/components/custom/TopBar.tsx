import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, UserCircle2 } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-white border-b px-6 py-3 shadow-sm">
      
      {/* Left side - Logo and Navigation links */}
      <div className="flex items-center gap-6">
        {/* Main Logo (clickable to homepage) */}
        <Link to="/" className="text-xl font-bold cursor-pointer">
          ReviewMaster
        </Link>

        {/* Placeholder Navigation links */}
        <Link to="#" className="hover:text-gray-600 cursor-pointer">
          Overview
        </Link>
        <Link to="#" className="hover:text-gray-600 cursor-pointer">
          Reports
        </Link>
        <Link to="#" className="hover:text-gray-600 cursor-pointer">
          Integrations
        </Link>
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center gap-4">
        <Settings className="cursor-pointer hover:text-gray-600" />
        <UserCircle2 className="cursor-pointer hover:text-gray-600" />
      </div>

    </div>
  );
};

export default TopBar;
