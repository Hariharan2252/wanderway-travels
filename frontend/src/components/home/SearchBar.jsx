import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() === "") return;

    navigate(`/destinations?search=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white rounded-full shadow-xl overflow-hidden w-full max-w-lg"
    >
      <input
        type="text"
        placeholder="Search destinations..."
        className="flex-1 px-5 py-3 text-gray-700 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </form>
  );
}
