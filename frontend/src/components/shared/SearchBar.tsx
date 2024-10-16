import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative">
        <input
          type="text"
          className="p-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          
        />
        <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MdSearch className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
