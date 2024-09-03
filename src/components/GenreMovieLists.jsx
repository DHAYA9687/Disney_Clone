import React from "react";
// import GenreLists from "../constants/GenreLists";
import MovieLists from "./MovieLists";
const GenreMovieLists = () => {
  const genere = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  return (
    <div className="text-white">
      {genere.map(
        (item, index) =>
          index < 20 && (
            <div className="p-8 px-8 md:px-16" key={item.id}>
              <h2 className="text-[20px] font-bold">{item.name}</h2>
              <MovieLists genreId={item.id} index={index} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieLists;
