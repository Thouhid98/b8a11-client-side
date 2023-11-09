import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Wishlist = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const wishcollection = useLoaderData();
    // console.log(wishcollection);
    
    const [users, setUsers] = useState(wishcollection)
    console.log(users);

    const handleDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/fetchwishlist/:email/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Delete Successfull',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })             
                }
                const remainingcart = users.filter(uid => uid._id !== id);
                setUsers(remainingcart);
            })
    }

    return (
        <div className="overflow-x-auto h-[500px] my-4 mb-6 ml-20 mr-20">
        <table className="table">

            <thead>
                <tr className='text-xl font-semibold'>

                    <th>Email</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>ShortDescription</th>
                    <th>Picture</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    wishcollection.map(user =>
                        <tr key={user._id}>

                            <td>{user.email}</td>
                            <td>{user.title}</td>
                            <td>{user.category}</td>
                            <td>{user.shortdes}</td>
                            <td><img className='h-20 w-32' src={user.photo} alt="" /></td>
                            {/* <td>
                                <button onClick={() => handleDelete(user._id)}

                                    className='btn btn-warning'>Delete</button>
                            </td> */}

                            <td>
                                <button onClick={() => handleDelete(user._id)} 

                                className="btn btn-primary text-white bg-[#FF3811]">Delete</button></td>
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
    );
};

export default Wishlist;