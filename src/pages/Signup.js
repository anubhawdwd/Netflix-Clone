import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contextAPI/Authcontext";

const Signup = () => {
  const { signUp } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/eb83fa55-ab10-476a-b103-499eb7c6e022/IN-en-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Natflix Signup"
        />
        <div className="bg-black/40 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/70 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold  ">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm ">
                  <p>
                    <input type="checkbox" /> Remember Me
                  </p>
                  <p>Need Help</p>
                </div>
                <p className="py-6">
                  <span className="text-gray-500">
                    Already Subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">LogIn</Link>
                </p>
                <p className="font-semibold">Dummy Acc for Testing:</p>
                <p className="text-yellow-600">
                  user1@gmail.com | pswd: 123456
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
