import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../contextAPI/Authcontext";
import requests from "../Request";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [readmore, setReadmore] = useState(false);

  const {
    AddToMyList,
    removeFromMyList,
    movieFetchList,
    handleMovieID,
  } = UserAuth();

  const fetchmovie = () => {
    try {
      axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  useEffect(() => {
    try {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    } catch (error) {
      console.log(error);
    }
  }, [movies]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return `${str.slice(0, num)}  ...`;
    } else {
      return str;
    }
  };

  const [likedList, setLikedList] = useState(false);
  useEffect(() => {
    try {
      setLikedList(
        Boolean(movieFetchList?.find((result) => result.id === movie?.id))
      );
    } catch (error) {
      console.log(error);
    }
  }, [movieFetchList, movie?.id]);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>

          {readmore ? (
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
              {movie?.overview}{" "}
              <span
                onClick={() => setReadmore(false)}
                className="cursor-pointer bg-white/20 text-black rounded"
              >
                less
              </span>
            </p>
          ) : (
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
              {truncateString(movie?.overview, 100)}{" "}
              <span
                onClick={() => setReadmore(true)}
                className="cursor-pointer bg-white/20 text-black rounded"
              >
                more
              </span>
            </p>
          )}

          <div>
            <button
              onClick={() => handleMovieID(movie)}
              className="border bg-red-600 text-white py-2 px-5 rounded-md w-36 "
            >
              Play
            </button>
            {likedList ? (
              <button
                onClick={() => removeFromMyList(movie.id)}
                className="border text-white py-2 px-5 ml-4 rounded-md w-36"
              >
                Added
              </button>
            ) : (
              <button
                onClick={() => AddToMyList(movie)}
                className="border text-white py-2 px-5 ml-4 rounded-md w-36"
              >
                Watch Later
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
