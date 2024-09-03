import React from "react";
const Moviepath = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        key={movie.id}
        src={Moviepath + movie.poster_path}
        alt={movie.title}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] hover:scale-110 border-gray-400 transition-all duration-150 cursor-pointer ease-in"
      />
    </>
  );
};

export default MovieCard;
