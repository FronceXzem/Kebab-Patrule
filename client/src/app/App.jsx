import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";


import "./App.css";
import LoginPage from "../pages/LoginPage";
import RegPage from "../pages/RegPage";
import { useState } from "react";
import { useEffect } from "react";
import NotFound from "../pages/NotFound";
import axiosInstance, { SetAccessToken } from "../axiosInstance";

function App() {
  const [user, setUser] = useState(null);



  useEffect(() => {
    axiosInstance.get("/tokens/refresh").then(({ data }) => {
      setUser(data.user);
      SetAccessToken(data.accessToken);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      errorElement: <NotFound />,
      children: [
 
        {
          path: "/log",
          element: <LoginPage setUser={setUser} />,
        },
        {
          path: "/reg",
          element: <RegPage setUser={setUser} />,
        },
      ],
    },
  ]);

return  <RouterProvider router={router} />
}

export default App

