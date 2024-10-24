import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

const CustomSelect = ({
  options,
  onChange,
  name,
  title,
  errors,
  required,
  placeholder,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    value ? { category: value } : null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1); // Track focused option for keyboard navigation
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm("");
    if (onChange) {
      onChange({ target: { name, value: option.id } });
    }
  };

  const filteredOptions = options.filter((option) =>
    option.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOptions = filteredOptions.sort((a, b) => {
    const aStartsWith = a.category
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase());
    const bStartsWith = b.category
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase());
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    return a.category.localeCompare(b.category);
  });

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prevIndex) =>
          prevIndex < sortedOptions.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : sortedOptions.length - 1
        );
        break;
      case "Enter":
        if (focusedIndex !== -1 && sortedOptions[focusedIndex]) {
          handleSelect(sortedOptions[focusedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full" ref={dropdownRef}>
      <label className="text-sm text-[#737373]">
        {title}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div
          className={`flex text-sm font-poppins items-center justify-between p-2 md:p-3 border rounded-md cursor-pointer ${
            errors[name] ? "border-red-500" : "border-gray-300"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`${selectedOption ? "text-gray-900" : "text-gray-400"}`}
          >
            {selectedOption ? selectedOption.category : placeholder}
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-hidden">
            <div className="p-2 border-b">
              <div
                onKeyDown={handleKeyDown} // Add keyboard event listener
                tabIndex={0}
                className="relative"
              >
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  className="w-full pl-10 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
            <ul className="max-h-44 overflow-auto">
              {sortedOptions.map((option, index) => (
                <li
                  key={option.id}
                  className={`p-2 px-3 cursor-pointer hover:bg-gray-100 text-sm ${
                    focusedIndex === index ? "bg-gray-100" : ""
                  }`} // Highlight focused option
                  onClick={() => handleSelect(option)}
                >
                  {option.category}
                </li>
              ))}
              {sortedOptions.length === 0 && (
                <li className="p-2 px-3 text-gray-500 text-sm">
                  No results found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );
};

export default CustomSelect;
