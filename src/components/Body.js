import React from "react";
import Login from "./login";
import Browsed from "./Browsed";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browsed />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
