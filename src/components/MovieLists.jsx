import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import GlobalApi from "../assets/services/GlobalApi";
import HrMovieCard from "./HrMovieCard";
import MovieCard from "./MovieCard";
const MovieLists = ({ genreId, index_ }) => {
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);
  const getMovieByGenreId = () => {
    GlobalApi.getMoviesByGenre(genreId)
      .then((movies) => {
        console.log(movies);
        setMovieList(movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative text-white">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute ${
              index_ % 3 == 0 ? `mt-[80px]` : `mt-[150px]`
            } 
            `}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 pt-5 px-3 pb-10"
      >
        {movieList.map((item, index) => {
          return (
            // <>
            //   {index_ % 3 == 0}?<HrMovieCard />:
            //   <MovieCard key={item.id} movie={item} />
            // </>
            <React.Fragment key={item.id}>
              {index_ % 3 === 0 ? (
                <HrMovieCard movie={item} />
              ) : (
                <MovieCard movie={item} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0  ${index_ % 3 == 0 ? `mt-[80px]` : `mt-[150px]`} 
           `}
      />
    </div>
  );
};

export default MovieLists;
