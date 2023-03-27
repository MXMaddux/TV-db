import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_TVSHOW_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("frasier");

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(data.Response === "True"){
        setShows(data.Search)
        setError({show:false, msg:""})
        setIsLoading(false);
      } else {
        setError({show:true, msg:data.Error})
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&t=${query}`);
  }, [query]);

  return <AppContext.Provider value={{isLoading, error, shows, query, setQuery}}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
