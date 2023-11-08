import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-success"></span>
    }
    // if (loading) {
    //     return (
    //         <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
    //             <div className="h-48 rounded-t dark:bg-gray-700"></div>
    //             <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
    //                 <div className="w-full h-6 rounded dark:bg-gray-700"></div>
    //                 <div className="w-full h-6 rounded dark:bg-gray-700"></div>
    //                 <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
    //             </div>
    //         </div>
    //     )
    // }

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;