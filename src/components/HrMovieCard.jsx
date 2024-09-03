import React from "react";
const Moviepath = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        key={movie.id}
        src={Moviepath + movie.backdrop_path}
        alt={movie.title}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px]  border-gray-400 cursor-pointer "
      />
      <h2 className="w-[110px] md:w-[260px] ">{movie.title}</h2>
    </section>
  );
};

export default HrMovieCard;
