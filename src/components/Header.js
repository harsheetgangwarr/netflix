import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser; //since user is not updated yet, zo we use 'auth.currentUser' instead of user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  });

  return (
    <div className="flex justify-between absolute px-9 py-2  z-10 bg-gradient-to-b from-black w-screen contrast-150">
      <img
        className="w-44 ml-40"
        src={
          "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        }
        alt="netflix-logo"
      ></img>
      {user && (
        <div className="flex space-x-3 items-center">
          <img
            className="h-8 w-8 rounded-md "
            alt="user-icon"
            src={user?.photoURL}
          ></img>
          <button
            className=" bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-1 rounded"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
