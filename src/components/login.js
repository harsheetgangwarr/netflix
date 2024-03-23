import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  //For email and password validation, we can use
  //We can use useRef hook for the reference

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value); //because useRef gives us an object and its value can be access by .curretn.value
    setErrorMessage(message);

    if (message) return; //means that there must be email or password error

    //else, Sign in/ /sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/118396499?v=4",
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-80 h-auto absolute p-8 bg-gray-900 text-center my-36 mx-auto rounded-lg left-0 right-0"
      >
        <h2 className="text-white text-3xl font-bold mb-8">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h2>
        <div className="mb-6">
          {!isSignInForm && (
            <input
              ref={name}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:bg-gray-700"
              type="name"
              placeholder="Name"
            />
          )}
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:bg-gray-700"
            type="email"
            placeholder="Email"
            ref={email}
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:bg-gray-700"
            type="password"
            placeholder="Password"
            ref={password}
          />
        </div>
        <p className="text-red-500 font-bold text-left mb-5">{errorMessage}</p>
        <button
          type="button"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 transition duration-300 ease-in-out mb-4"
          onClick={handleButtonClick}
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
