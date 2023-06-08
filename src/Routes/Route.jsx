import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import TeacherInfo from "../pages/TeacherInfo/TeacherInfo";
import Error from "../pages/Error/Error";

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
                path: "/teacherinfo",
                element: <PrivateRoute><TeacherInfo></TeacherInfo></PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },
]);


export default router;