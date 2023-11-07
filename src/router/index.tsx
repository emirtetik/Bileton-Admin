import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import MainMenu from "../layout/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "/statisticalData",
      //   element: <StatisticalData />,
      // },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
