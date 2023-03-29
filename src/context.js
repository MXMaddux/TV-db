import React, { useState, useContext, useEffect } from "react";
// make sure to use https
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_TVSHOW_API_KEY}`;
const API_ENDPOINT = "https://api.tvmaze.com/singlesearch/shows?";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [showName, setShowName] = useState("");
  const [query, setQuery] = useState(" ");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [premierDate, setPremierDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [id, setId] = useState("");

  const fetchMovies = async (url) => {
    // setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setShowName(data.name);
      setId(data.id);
      setCast(data._embedded.cast);
      setGenres(data.genres)
      setImage(data.image.medium);
      setRating(data.rating.average);
      setSummary(data.summary.replace(/<[^>]*>?/gm, ""));
      setPremierDate(data.premiered);
      setEndDate(data.ended);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error)
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&q=${query}&embed=cast`);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        showName,
        cast,
        genres,
        image,
        rating,
        summary,
        premierDate,
        endDate,
        query,
        id,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
