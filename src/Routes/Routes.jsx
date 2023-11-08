import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Addblog from "../Pages/Addblog/Addblog";
import Allblogs from "../Pages/Allblogs/Allblogs";
import Blogdetails from "../Pages/Blogdetails/Blogdetails";
import Wishlist from "../Pages/Wishlist/Wishlist";
import PrivateRoute from "./Privateroute";
import Featuredblogs from "../Featuredblogs/Featuredblogs";
import Updateblog from "../Pages/Updateblog/Updateblog";

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
            },
            {
                path:'/featuredblogs',
                element:<Featuredblogs></Featuredblogs>,
                loader:()=>fetch('http://localhost:5000/featuredblogs')
            },
            {
                path:'/blogdetails/:id',
                element:<PrivateRoute><Blogdetails></Blogdetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/blogdetails/${params.id}`)
            },
            {
                path:'/updateblog/:id',
                element:<Updateblog></Updateblog>,
                loader:({params})=>fetch(`http://localhost:5000/updateblog/${params.id}`)
            },
            {
                path:'/fetchwishlist/:email',
                element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/fetchwishlist/${params.email}`)
            },
            // {
            //     path:'/blogdetails/:id',
            //     element:<PrivateRoute><Blogdetails></Blogdetails></PrivateRoute>,
            //     loader:()=>fetch('http://localhost:5000/getcomments')
            // }
        ]
    },
]);

export default router;
