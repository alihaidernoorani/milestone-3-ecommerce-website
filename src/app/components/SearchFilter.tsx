import React from 'react';

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
}) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full sm:w-[60%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter Dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-[30%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="sale">On Sale</option>
          <option value="new">New Arrivals</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
