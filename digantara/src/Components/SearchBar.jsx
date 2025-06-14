import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(input); 
    }
  };

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search by name or NORAD ID"
      className="w-1/2 rounded-2xl px-4 py-2 border"
    />
  );
}

export default SearchBar;
