import React from "react";
import { createBrowserRouter, useRoutes } from "react-router-dom";
import App from "../App";
import Contact from "../Pages/Contact";



const routes = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/contact",
    element: <Contact />,
    children: [],
  },
];

const Routers = () => {
  const routing = useRoutes(routes);

  return routing;
};

export default Routers;
