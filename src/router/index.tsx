import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import MainMenu from "../layout/main";
import Login from "../pages/login";

const routes = createBrowserRouter([
   {
     path:"/",
     element:<Login/>,
     index: true
   },
  {
    path: "/",
    element: <MainMenu/>,
    children: [ 
      { path:"home", element: <Home /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
