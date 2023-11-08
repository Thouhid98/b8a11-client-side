import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Showallblog = ({ blog }) => {
    const { _id, title, shortdes, category, date, photo, longdes } = blog;
    
    const { user } = useContext(AuthContext);
    // console.log(user);

    // Add to Wishlist 
    const email = user?.email;


    const handleWishlist = () =>{
        const addtoWishlist = {_id, title, photo, category, shortdes, longdes, date, email }
        console.log(addtoWishlist);

        // send data to database 
        fetch('http://localhost:5000/addtoWishlist', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addtoWishlist)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: 'Success!',
                text: 'Your Wish Fullfill',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            console.log(data);          
        })

    }

    return (
        <div>
            
            <div className="card w-96 lg:h-[600px] bg-gray-100 shadow-xl mb-10">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="blogs" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-[#FF3811] font-bold">{title}</h2>
                    <p>Published : {date}</p>
                    <p>{shortdes}</p>

                    <p>Category: {category}</p>
                    <div className="card-actions">

                        {/* Old Link  */}
                        <Link to={`/blogdetails/${_id}`}>
                            <button className="btn btn-primary text-white bg-[#FF3811]">View Details</button>
                        </Link>
                        {/* Old Link  */}


                        {/* Update  */}                     
                        <button onClick={handleWishlist} className='btn btn-neutral'>Add to Wishlist</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showallblog;