import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Blogdetails = () => {
    const { user } = useContext(AuthContext)

    const blogdetails = useLoaderData()
    // console.log(blogdetails);
    const { _id, name, email, title, shortdes, category, date, photo, longdes } = blogdetails;
    // console.log(blogdetails?.email);


    // Add Comments 
    const [comments, setComments] = useState(null)
    console.log(comments);

    useEffect(() => {
        axios.get('http://localhost:5000/getcomments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }, [])

    const handleComments = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        console.log(comment);

        const currentuseremail = user?.email;

        const allcomment = { currentuseremail, comment }

        // send data to database 
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allcomment)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Comment Successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                console.log(data);
                e.target.reset()
            })



    }

    return (
        <div className="lg:ml-64 mb-28">


            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#FF3811] uppercase">
                        {date}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h4>
                    <h4 className="text-lg font-medium mb-3">{category}</h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {shortdes}
                    </p>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {longdes}
                    </p>


                    <div>
                        {
                            (user?.email == blogdetails?.email) ?

                                <Link to={`/updateblog/${_id}`}>
                                    <button className="btn btn-primary mb-4 text-white bg-[#FF3811]">Update Blog</button>
                                </Link>

                                :
                                <a className="inline-block" href="#">
                                    <button
                                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#FF3811] uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                    >
                                        Comments
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            ></path>
                                        </svg>
                                    </button>
                                </a>

                        }

                    </div>

                    <div className="">
                        {
                            (user?.email !== blogdetails?.email) ?
                                <>
                                    <form onSubmit={handleComments}>
                                        <textarea className="border ml-2 p-4" name="comment" id="" cols="30" placeholder="Add Comments" rows="1"></textarea><br />
                                        <button className="btn btn-primary bg-[#FF3811] text-white ml-2">Submit</button>
                                    </form>
                                </>
                                :
                                'No Comment'
                        }
                    </div>

                    <div className="mt-3">
                        <table>
                            <thead className="">
                                <tr className='text-xl font-semibold'>  
                                    <th className="">Email</th>             
                                    <th>Comments</th>                                   
                                </tr>
                            </thead>
                        
                        <tbody className="ml-3">
                            {
                                comments?.map(usercomment => 
                                    <tr key={usercomment?._id}>

                                        <td className="pr-12 mb-2" >{usercomment?.currentuseremail}</td>
                                        <td className="ml-20">{usercomment?.comment}</td>

                                    </tr>
                                
                                )
                            }
                        </tbody>
                        
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogdetails;