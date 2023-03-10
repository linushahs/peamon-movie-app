import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Movie from "./Movie";

function Main() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const API_KEY = "e9c1419451fdcd93d09f5ee89353e0ba";

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    );

    const movies = await response.json();
    setTrendingMovies(movies.results);
  };

  useEffect(() => getMovies, []);

  return (
    <div className="w-full bg-black py-8 pr-4 xl:pr-16 pl-[98px] lg:pl-[270px]  xl:pl-[340px] border-r-[0.5px] border-r-gray-dark/50 ">
      <header className="">
        <ul className="flex gap-4">
          <li className="text-gray-light hover:text-white cursor-pointer">
            TV Series
          </li>
          <li className="text-white hover:text-white cursor-pointer">Movies</li>
        </ul>
      </header>
      <main className="mt-4">
        {/* ----------------------------------> */}
        {/* //Latest section of movies slider goes here */}
        <div className="latest relative w-full h-auto bg-cover rounded-xl">
          <img
            src="https://images7.alphacoders.com/901/thumb-1920-901925.jpg"
            alt=""
            className="w-full h-full rounded-3xl opacity-70"
          />
          <div className="details text-white absolute bottom-0 p-8 flex flex-col justify-end h-full">
            <h1 className="uppercase text-xl">Deadpool</h1>
            <p className="uppercase text-gray-light text-sm my-1">
              Action, adventure, sci-fi{" "}
            </p>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-1 rounded-lg bg-red">Watch</button>
              <button className="bg-gray-light/70 px-3 py-1 text-lg rounded-lg">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Latest section of movies ends here -------------->  */}
        {/* Trending movies section starts here ---------------->  */}
        <div className="mt-6 text-white w-full overflow-hidden">
          <header className="mb-4 flex justify-between items-center">
            <h3>Trending Movies</h3>
            <div className="flex gap-2">
              <MdKeyboardArrowLeft className="border-[1.5px] cursor-pointer p-1 text-3xl border-white rounded-full" />
              <MdKeyboardArrowRight className="border-[1.5px] p-1 text-3xl cursor-pointer border-white rounded-full" />
            </div>
          </header>
          <main className="flex flex-wrap gap-4">
            {trendingMovies.map((movie, id) => (
              <Movie
                key={id}
                poster={movie.poster_path}
                title={movie.title || movie.name}
                rating={movie.vote_average.toFixed(1)}
                releaseDate={movie.release_date}
              />
            ))}
          </main>
        </div>
      </main>
    </div>
  );
}

export default Main;
