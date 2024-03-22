import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        ></img>
      </div>
      <form className="w-80 h-auto absolute p-8 bg-gray-900 text-center my-36 mx-auto rounded-lg left-0 right-0">
        <h2 className="text-white text-3xl font-bold mb-8">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h2>
        <div className="mb-6">
          {!isSignInForm && (
            <input
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:bg-gray-700"
              type="password"
              placeholder="Name"
            />
          )}
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:bg-gray-700"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:bg-gray-700"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 transition duration-300 ease-in-out mb-4"
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <div className="flex items-center ">
          {isSignInForm && (
            <div>
              <input type="checkbox" id="remember-me" className="mr-2 ml-" />
              <label htmlFor="remember-me" className="text-gray-400 text-sm">
                Remember me
              </label>
            </div>
          )}
        </div>
        <div className="ml-0 text-left mt-5">
          <p className=" text-white text-sm " onClick={toggleHandler}>
            {isSignInForm
              ? "New to Netflix! Sign up Now."
              : "Already Registered! Sign in Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
