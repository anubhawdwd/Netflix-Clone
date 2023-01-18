import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { UserAuth } from "../contextAPI/Authcontext";

const SavedShows = () => {
  const {
    movieFetchList,
    removeFromMyList,
    slideLeft,
    slideRight,
    handleMovieID,
  } = UserAuth();

  return (
    <div className="w-full">
      <h2 className="text-white font-bold md:text-xl p-4">My List</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movieFetchList?.map((item) => (
            <div
              key={item.id}
              className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block "
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <p
                  onClick={() => removeFromMyList(item.id)}
                  className="absolute text-2xl top-4 right-4 text-gray-200"
                >
                  <AiOutlineClose />
                </p>
                <p>
                  <FaPlay
                    onClick={() => handleMovieID(item)}
                    className="absolute text-5xl top-[40%] left-[42%]"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default SavedShows;
