import React from 'react';

const Showallblog = ({blog}) => {
    const {title, shortdes, category, date, photo, longdes} = blog;
    console.log(title);

    return (
        <div>
             <div className="card w-96 bg-gray-100 shadow-xl mb-10">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-yellow-700 font-bold">{title}</h2>
                    <p>{shortdes}</p>
                    <p>$ {longdes}</p>
                    <p>{category}</p>
                    <div className="card-actions">

                        {/* Old Link  */}
                        {/* <Link to={`/viewdetails/${_id}`}> */}
                        <button className="btn btn-primary bg-yellow-700">View Details</button>
                        {/* </Link> */}
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