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
import Errorpage from "../Pages/Errorpage/Errorpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Errorpage></Errorpage>,
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
                loader:()=>fetch('https://b8a11-server-side-seven.vercel.app/allblogs')
            },
            {
                path:'/featuredblogs',
                element:<Featuredblogs></Featuredblogs>,
                loader:()=>fetch('https://b8a11-server-side-seven.vercel.app/featuredblogs')
            },
            {
                path:'/blogdetails/:id',
                element:<PrivateRoute><Blogdetails></Blogdetails></PrivateRoute>,
                loader:({params})=>fetch(`https://b8a11-server-side-seven.vercel.app/blogdetails/${params.id}`)
            },
            {
                path:'/updateblog/:id',
                element:<PrivateRoute><Updateblog></Updateblog></PrivateRoute>,
                loader:({params})=>fetch(`https://b8a11-server-side-seven.vercel.app/updateblog/${params.id}`)
            },
            {
                path:'/fetchwishlist/:email',
                element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
                loader:({params})=>fetch(`https://b8a11-server-side-seven.vercel.app/fetchwishlist/${params.email}`)
            },
            
        ]
    },
]);

export default router;
