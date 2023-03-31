import React from "react";
import { useGlobalContext } from "./context";
import "./index.css";

// const url =
//   "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const {
    image,
    summary,
    showName,
    isLoading,
    cast,
    genres,
    premierDate,
    endDate,
  } = useGlobalContext();
  const { person, character } = cast;

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="bg-gray-200 height-3/4">
        <div className="bg-gray-500 p-4 h-3/4 w-full">
          <img src={image} alt={showName} />
          <div className="mt-4">
            <p className="text-base text-white">
              <span className="text-teal-300 mr-2">Title: </span>
              {showName}
            </p>
            <p className="text-base text-white">
              <span className="text-teal-300 mr-2">Summary: </span>
              {summary}
            </p>
            <p className="text-base text-white">
              <span className="text-teal-300 mr-2">Premier Date: </span>
              {premierDate}
            </p>
            <p className="text-base text-white">
              <span className="text-teal-300 mr-2">End Date: </span>
              {endDate}
            </p>
          </div>
          <div>
            <span className="text-teal-300 mr-2"> Genres: </span>
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
            <span className="text-teal-300 text-l mr-2"> Cast: </span>
            {cast.map((member, index) => {
              return (
                <p className="text-base text-white" key={index}>
                  {member.person.name} as {member.character.name},
                </p>
              );
            })}
          </div>
        </div>
    </section>
  );
};

export default Movies;

// error, id, cast, image, rating, premierDate, summary, endDate, showName, query, setQuery
