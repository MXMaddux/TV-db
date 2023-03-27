import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { shows, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {shows.map((show) => {
        const {
          imdbID: id,
          Poster: poster,
          Title: title,
          Year: year,
          Actors: actors,
          Plot: plot,
          imdbRating: rating,
          totalSeasons: seasons,
          Type:type
        } = show;
        return <Link to={`/movies/${id}`} key={id} className="movie">
          <article>
            <img src={poster === "N/A" ? url : poster} alt={title} />
            <div className="movie-info">
              <h4 className="title">{title}</h4>
              <h4 className="title">{plot}</h4>
            </div>
          </article>
        </Link>;
      })}
    </section>
  );
};

export default Movies;
