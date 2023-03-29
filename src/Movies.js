import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import "./index.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { image, summary, showName, isLoading, cast, genres, premierDate, endDate } = useGlobalContext();
  const { person, character } = cast;

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="h-96">
      <article  className="h-96">
        <div className="bg-gray-500 p-4">
        <img src={image} alt={showName} />
          <p className="text-base text-white"><span className="text-teal-300 text-xl mr-2">Title: </span>{showName}</p>
          <p className="text-base text-white"><span className="text-teal-300 text-xl mr-2">Summary: </span>{summary}</p>
          <p className="text-base text-white"><span className="text-teal-300 text-xl mr-2">Premier Date: </span>{premierDate}</p>
          <p className="text-base text-white"><span className="text-teal-300 text-xl mr-2">End Date: </span>{endDate}</p>
          <div >
          <span className="text-teal-300 text-xl mr-2"> Genres: </span>
            {genres.map((gen, index) => {
              return (
                <div className="items-center">
                <p className="text-base text-white mr-2" key={index}>
                  {gen}  
                </p>
                </div>
              );
            })}
          </div>
          <div className="">
          <span className="text-teal-300 text-xl mr-2"> Cast: </span>
            {cast.map((member, index) => {
              return (
                <p className="text-base text-white" key={index}>
                  {member.person.name} as {member.character.name}, 
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Movies;

// error, id, cast, image, rating, premierDate, summary, endDate, showName, query, setQuery
