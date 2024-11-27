import React, { useState, useEffect } from "react";

const Sidebar = ({
  data,
  selectedFilters,
  handleFilterChange,
  allTags,
  selectedTags,
  handleTagSelection,
}) => {
  const [filters, setFilters] = useState({
    categories: [],
    companies: [],
    days: [],
    dates: [],
    seasons: [],
  });

  useEffect(() => {
    const categories = [...new Set(data.map((item) => item.category))].filter(
      Boolean
    );
    const companies = [...new Set(data.map((item) => item.company))].filter(
      Boolean
    );
    const days = [...new Set(data.map((item) => item.day))].filter(Boolean);
    const dates = [...new Set(data.map((item) => item.date))].filter(Boolean);
    const seasons = [...new Set(data.map((item) => item.season))].filter(
      Boolean
    );
    
    setFilters({
      ...(categories.length && { categories }),
      ...(companies.length && { companies }),
      ...(days.length && { days }),
      ...(dates.length && { dates }),
      ...(seasons.length && { seasons }),
    });
  }, [data]);
  useEffect(() => {
    const extractUniqueValues = (key) => 
      [...new Set(data.map((item) => item[key]))].filter(Boolean);
  
    setFilters({
      categories: extractUniqueValues('category'),
      companies: extractUniqueValues('company'),
      days: extractUniqueValues('day'),
      dates: extractUniqueValues('date'),
      seasons: extractUniqueValues('season'),
    });
  }, [data]);
  
  const handleMultiSelectChange = (filterKey, value) => {
    handleFilterChange(
      filterKey,
      selectedFilters[filterKey].includes(value)
        ? selectedFilters[filterKey].filter((val) => val !== value)
        : [...selectedFilters[filterKey], value]
    );
  };

  const handleTagClick = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    handleTagSelection(newTags);
  };

  const handleClearFilters = () => {
    Object.keys(filters).forEach((key) => handleFilterChange(key, []));
    handleTagSelection([]);
  };

  return (
    <section className="w-64 h-full fixed border-r border-gray-200 bg-white shadow-lg overflow-y-auto p-6">
      <div className="mb-2 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Filters</h1>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClearFilters}
          className="text-blue-500 underline hover:text-blue-600 hover:underline-offset-2 transition text-right w-full mb-8"
        >
          Clear Filters
        </button>
      </div>
      {Object.keys(filters).map((filterKey, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-600 mb-3">
            {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
          </h2>
          <div className="space-y-2">
            {filters[filterKey].map((value, i) => (
              <label
                key={i}
                className="flex items-center space-x-2 text-gray-600"
              >
                <input
                  type="checkbox"
                  value={value}
                  checked={selectedFilters[filterKey].includes(value)}
                  onChange={() => handleMultiSelectChange(filterKey, value)}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-sm capitalize">{value}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-600 mb-3">Tags</h2>
        <div className="flex flex-col gap-2">
          {allTags.map((tag, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 text-gray-600"
            >
              <input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => {
                  const newTags = selectedTags.includes(tag)
                    ? selectedTags.filter(t => t !== tag)
                    : [...selectedTags, tag];
                  handleTagSelection(newTags);
                }}
                className="form-checkbox h-4 w-4 text-blue-600 rounded"
              />
              <span className="text-sm capitalize">{tag}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
