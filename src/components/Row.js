import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../contextAPI/Authcontext";

const Row = ({ title, fetchURL, rowID }) => {
  const {slideLeft,slideRight} = UserAuth();

  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relativ"
        >
          {movie?.map((item, id) => (
            <Movies key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;