import React from 'react';
import { Link } from 'react-router-dom';

const Showallblog = ({blog}) => {
    const {_id, title, shortdes, category, date, photo, longdes} = blog;

    return (
        <div>
             <div className="card w-96 bg-gray-100 shadow-xl mb-10">
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

                        {/* New Link  */}
                        {/* <Link to={`/viewdetails/${name}`}>
                        <button className="btn btn-primary bg-yellow-700">View Details</button>
                        </Link> */}
                         {/* New Link  */}

                        {/* Update  */}
                        {/* <Link to={`/updatecar/${_id}`}> */}
                           <button className='btn btn-neutral'>Update Info</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showallblog;