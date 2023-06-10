import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Error from "../pages/Error/Error";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Error></Error>

    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>
            },
            
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MyCart></MyCart> 
            },
            {
                path: "allusers",
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);


export default router;