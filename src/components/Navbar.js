import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contextAPI/Authcontext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full fixed bg-gradient-to-b from-black/90  ">
      <div className="flex items-end ">
        <Link to="/">
          <img
            className="mr-4 h-4 sm:h-6 md:h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
        </Link>

        <Link to="/">
          <button className="text-white pr-4 text-xs sm:text-sm">Movies</button>
        </Link>
        <Link to="/MyList">
          <button className="text-white pr-4 text-xs sm:text-sm">Series</button>
        </Link>
        <Link to="/MyList">
          <button className="text-white pr-4 text-xs sm:text-sm">
            My List
          </button>
        </Link>
      </div>
      {user ? (
        <div>
          <Link to="/login">
            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
            >
              LogOut
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">LogIn</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
