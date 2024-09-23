import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiHome, FiDollarSign, FiUsers } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const LeftSideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`font-body bg-white shadow-md p-5 transition-all duration-300 h-[400px] ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end align-center">
        <button onClick={toggleSideBar} className="focus:outline-none">
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-10">
        <div className="space-y-4">
          <Link
            href="/dashboard"
            className={`flex items-center text-black transition-colors duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FiHome className="text-2xl" />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>

          <Link
            href="/checklist"
            className={`flex items-center text-black transition-colors duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <IoMdCheckmarkCircleOutline className="text-2xl" />
            {!isCollapsed && <span className="ml-3">Checklist</span>}
          </Link>

          <Link
            href="/budgeter"
            className={`flex items-center text-black transition-colors duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FiDollarSign className="text-2xl" />
            {!isCollapsed && <span className="ml-3">Budgeter</span>}
          </Link>

          <Link
            href="/guest-list"
            className={`flex items-center text-black transition-colors duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <FiUsers className="text-2xl" />
            {!isCollapsed && <span className="ml-3">Guest List</span>}
          </Link>

          <Link
            href="/vendors"
            className={`flex items-center text-black transition-colors duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <HiOutlineBriefcase className="text-2xl" />
            {!isCollapsed && <span className="ml-3">Vendors</span>}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
