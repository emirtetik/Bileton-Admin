import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AddTicket from "../pages/addTicket";
import UpdateDeleteTicket from "../pages/UpdateDeleteTicket";
import StatisticalData from "../pages/statisticalData";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/addTicket',
        element:<AddTicket/>
    },
    {
        path:'/updateDeleteTicket',
        element:<UpdateDeleteTicket/>
    },
    {
        path:'/statisticalData',
        element:<StatisticalData/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes