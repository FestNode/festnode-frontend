import React from "react";
import { Search, Mic, Building } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center border rounded-xl shadow-md bg-white px-4 py-5">
      {/* Dropdown Section */}
      <div className="flex items-center space-x-2 border-r pr-4">
        <Building className="w-5 h-5 text-gray-500" />
        <button className="text-gray-700 font-medium">Department</button>
        <span className="text-gray-400">&#9662;</span>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search All Events"
        className="flex-1 px-4 text-gray-700 focus:outline-none"
      />

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Mic className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
