import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (

    <form className="bg-gray-500" onSubmit={(e) => e.preventDefault()}>
      <div className="flex p-4 items-center justify-start">
        <h3 className="text-teal-400 mr-8">Enter Show: </h3>
        <input
          type="text"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
