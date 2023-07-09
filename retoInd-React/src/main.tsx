import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import Home from "./Pages/Home";
import PostDetail from "./Pages/PostDetail";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/createPost",
    element: <h1>Crea tu post</h1>,
  },
  {
    path: "/detailPost",
    element: <PostDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
