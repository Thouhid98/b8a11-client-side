import React from 'react';
import { Link } from 'react-router-dom';

const Singlerecentpost = ({recent}) => {
    const { _id, title, shortdes, category, date, photo, longdes } = recent;
   
    return (
        <div>
             <div className="card w-96 lg:h-[600px]  bg-gray-100 shadow-xl mb-10">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="blogs" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-[#FF3811] font-bold">{title}</h2>
                    <p className='text-black font-medium'>Published : {date}</p>
                    <p className='h-[50px]'>{shortdes}</p>

                    <p className='text-black font-medium'>Category: {category}</p>
                    <div className="card-actions">

                        {/* Old Link  */}
                        <Link to={`/blogdetails/${_id}`}>
                            <button className="btn btn-primary text-white bg-[#FF3811]">View Details</button>
                        </Link>
                        {/* Old Link  */}


                        {/* Update  */}                     
                        {/* <button onClick={handleWishlist} className='btn btn-neutral'>Add to Wishlist</button> */}
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlerecentpost;