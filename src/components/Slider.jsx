import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalApi from "../assets/services/GlobalApi";
const Slider = () => {
  const Moviepath = "https://image.tmdb.org/t/p/original";
  const [trendingMovies, setTrendingMovies] = useState([]);
  const sliderRef = useRef(null);

  // Fetch trending videos when the component mounts
  useEffect(() => {
    fetchTrendingVideos();
  }, []);

  // Function to scroll the slider
  //   const scrollRight = (element) => {
  //     element.scrollLeft += 800;
  //   };
  //   const scrollLeft = (element) => {
  //     element.scrollLeft -= 800;
  //   };
  const screenWidth = window.innerWidth;
  const scrollRight = (element) => {
    element.scrollBy({
      left: screenWidth - 110, // Amount to scroll
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  const scrollLeft = (element) => {
    element.scrollBy({
      left: -screenWidth - 110, // Amount to scroll in the opposite direction
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Function to fetch trending videos
  const fetchTrendingVideos = async () => {
    const trendingVideos = await GlobalApi.getTrendingVideos();
    console.log(trendingVideos); // Do something with the trending videos
    setTrendingMovies(trendingVideos);
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden sm:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer hover:bg-gray-400 rounded-full m-2"
        onClick={() => scrollLeft(sliderRef.current)}
      />
      <HiChevronRight
        className="hidden sm:block text-white text-[30px] absolute right-0 mx-8 mt-[150px] cursor-pointer"
        onClick={() => scrollRight(sliderRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide transition duration-200 linear"
        ref={sliderRef}
      >
        {trendingMovies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={Moviepath + movie.backdrop_path}
              alt={movie.title}
              className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-gray-400 transition-all duration-100 ease-in"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
