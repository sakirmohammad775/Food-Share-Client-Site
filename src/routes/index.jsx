import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import PrivateRoute from "./PrivateRoute";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:'contact',
                element:<PrivateRoute><Contact></Contact>
                </PrivateRoute>
            }
        ]
    },
    //extra path create for login and register not showing navbar and footer or extra topic
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])
export default routes 