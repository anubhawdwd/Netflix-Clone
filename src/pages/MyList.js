import React from 'react'
import Modal from '../components/Modal';
import SavedShows from '../components/SavedShows';
import { UserAuth } from '../contextAPI/Authcontext';

const MyList = () => {
   const { showModal } = UserAuth();
  return (
    <>
      {showModal && <Modal />}
      <div className="w-full text-white">
        <img
          className="w-full h-[250px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/eb83fa55-ab10-476a-b103-499eb7c6e022/IN-en-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Natflix Signup"
        />
        {/* black shaded overlay */}
        <div className="bg-black/50 fixed top-0 left-0 w-full h-[550px]  "></div>
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">My List</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default MyList