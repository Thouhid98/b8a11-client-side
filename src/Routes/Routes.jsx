import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Addblog from "../Pages/Addblog/Addblog";
import Allblogs from "../Pages/Allblogs/Allblogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/addblog',
                element:<Addblog></Addblog>
            },
            {
                path:'/allblogs',
                element:<Allblogs></Allblogs>,
                loader:()=>fetch('http://localhost:5000/allblogs')
            }
        ]
    },
]);

export default router;
