import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { UserAuth } from "../contextAPI/Authcontext";
import {
  AiFillCloseCircle,
} from "react-icons/ai";

var APIkey = process.env.REACT_APP_IMDB_API_KEY;
const Modal = () => {
  const { setShowModal, trailerID, setTrailerID } = UserAuth();
  const [video, setVideo] = useState([]);

  const url = `http://api.themoviedb.org/3/movie/${trailerID?.id}/videos?api_key=${APIkey}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setVideo(response.data.results);
    });
  }, [url]);

  return (
    <div
      onClick={() => {
        setShowModal(false);
        setTrailerID(null);
      }}
      className="fixed !top-2 bottom-2 left-0 right-0 z-[110] mx-auto w-full max-w-7xl  overflow-hidden overflow-y-scroll rounded-md scrollbar-hide bg-black/80 flex justify-center "
    >
      <div className="flex-col h-full">
        <div className="">
          <button
            onClick={() => setShowModal(false)}
            className="text-red-700 text-4xl top-4 right-4 absolute "
          >
            <AiFillCloseCircle />
          </button>
          <div className="h-[70vh]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video[0]?.key}`}
              width="100%"
              height="100%"
          
              playing
              muted={true}
            />
          </div>
        </div>
        
        <div className="text-white w-[70vw] mt-5">
            <p className="font-bold">Description:</p>
          <p>{trailerID?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
