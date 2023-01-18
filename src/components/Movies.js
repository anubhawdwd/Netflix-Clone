import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { UserAuth } from "../contextAPI/Authcontext";
const Movies = ({ item }) => {
  const {
    movieFetchList,
    AddToMyList,
    removeFromMyList,
    handleMovieID,
  } = UserAuth();
  

  const [likedList, setLikedList] = useState(false);
  useEffect(() => {
    try {
      setLikedList(Boolean(movieFetchList?.find((result) => result.id === item?.id)))
      
    } catch (error) {
      console.log(error);
    }
  }, [movieFetchList, item?.id]);


  return (
    <div className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] inline-block cursor-pointer relative mx-2 ">
      <img
        className="w-full h-auto block rounded-md "
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
        {/* *--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- */}
        <p>
          {likedList ? (
            <AiOutlineCheck
              onClick={() => removeFromMyList(item.id)}
              className="absolute text-2xl text-grey-300 top-4 right-4"
            />
          ) : (
            <AiOutlinePlus
              onClick={() => AddToMyList(item)}
              className="absolute text-2xl text-grey-300 top-4 right-4"
            />
          )}
          <FaPlay
            onClick={() => handleMovieID(item)}
            className="absolute text-5xl top-[40%] left-[42%]"
          />
        </p>
      </div>
    </div>
  );
};
export default Movies;
