import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // if(loading){
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }
    if (loading) {
        return (
            <div>
            <Skeleton width={200} height={20} />
            <Skeleton count={5} />
            <Skeleton circle={true} width={500} height={500} style={{ backgroundColor: 'black', color: 'white' }} />
        </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;