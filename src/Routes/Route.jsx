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
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageCls from "../pages/Dashboard/ManageCls/ManageCls";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyEnroll from "../pages/Dashboard/MyEnroll/MyEnroll";

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
            },
            {
                path: "addaclass",
                element: <AddAClass></AddAClass>
            },
            {
                path: "addaclass",
                element: <AddAClass></AddAClass>
            },
            {
                path: "myclasses",
                element: <MyClasses></MyClasses>
            },
            {
                path: "managecls",
                element: <ManageCls></ManageCls>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://shine-on-summer-server.vercel.app/carts/${params.id}`)
            },
            {
                path: "myenroll",
                element: <MyEnroll></MyEnroll>
            }


            

            
        ]
    }
    
]);


export default router;