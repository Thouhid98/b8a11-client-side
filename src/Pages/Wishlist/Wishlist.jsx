import { useLoaderData } from "react-router-dom";

const Wishlist = () => {
    const wishcollection = useLoaderData();
    console.log(wishcollection);
    return (
        <div>
            
        </div>
    );
};

export default Wishlist;