import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className="mb-4 bg-white" onSubmit={(e) => e.preventDefault()}>
      <h2 className="mb-3 text-teal-400 p-4">Search TV Shows: </h2>
      <input
        type="text"
        className="w-full border-teal-400 border-solid"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
