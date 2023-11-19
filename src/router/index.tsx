import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import MainMenu from "../layout/main";
import Login from "../pages/login";
import AddEvent from "../pages/addEvent";

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
      { path:"AddEvent", element: <AddEvent /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
