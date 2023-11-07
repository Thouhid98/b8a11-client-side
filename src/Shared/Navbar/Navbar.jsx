import { useContext } from 'react';
import logo from '../../assets/Blogger-Logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const {email} = user;
    // console.log(email);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="flex justify-between pr-16 pl-16 pt-8 pb-10  ">
            <div>
                <img className='w-44 -mt-3' src={logo} alt="" />
            </div>
            <div>
                <ul className="flex gap-6 my-6 ml-8 text-xl font-semibold">
                    <Link to='/'>Home</Link>
                    <Link to='/addblog'>Add Blog</Link>
                    <Link to='/allblogs'>All blogs</Link>


                    {/* <NavLink
                        to="/allblogs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-black underline" : "text-black"
                        }
                    >
                        All blogs
                    </NavLink> */}

                    <Link to='/featuredblogs'>Featured Blogs</Link>

                    {/* <Link to={`/fetchwishlist/${email}`}>Wishlist</Link> */}
                    
                    {/* <NavLink
                        to={`/fetchwishlist/${email}`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-slate-300  underline" : "text-black"
                        }
                    >
                        Wishlist
                    </NavLink> */}

                    <Link to='/fetchwishlist/:email'>Wishlist</Link>
                </ul>
            </div>


            <div className="flex gap-4">

                {
                    user?.email ?
                        <>
                            <div className='flex gap-3'>
                                <div className='flex my-3 gap-2'>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={'/thouhid.jpg'} />
                                        </div>
                                    </label>
                                    <p className="text-[#FF3811] my-2">{user.email}</p>
                                </div>

                                {/* old code  */}
                                {/* <Link onClick={handleSignOut} >
                                <button className="btn bg-white  my-3 border-[#FF3811] text-[#FF3811]">Logout</button>
                            </Link> */}
                                {/* old code  */}
                                <NavLink to='/login'>
                                    <button onClick={handleSignOut} className="btn bg-white  my-3 border-[#FF3811] text-[#FF3811]">Logout</button>
                                </NavLink>
                            </div>
                        </>
                        :
                        <>
                            <div className='flex gap-3'>
                                <div className='flex'>
                                    <p className="my-6 mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6516 3.34835C13.9484 2.64509 12.9945 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34833 3.34835C8.64507 4.05161 8.24998 5.00544 8.24998 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.24998C4.09219 21.7502 3.93613 21.7171 3.79193 21.6531C3.64774 21.589 3.51863 21.4953 3.41301 21.3781C3.30738 21.2608 3.2276 21.1227 3.17884 20.9726C3.13008 20.8226 3.11343 20.6639 3.12999 20.507L4.39399 8.507C4.42314 8.23056 4.55361 7.9747 4.76024 7.78876C4.96686 7.60281 5.23501 7.49995 5.51298 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.62498 10.5C8.62498 10.5995 8.58548 10.6948 8.51515 10.7652C8.44482 10.8355 8.34944 10.875 8.24998 10.875C8.15053 10.875 8.05515 10.8355 7.98482 10.7652C7.91449 10.6948 7.87498 10.5995 7.87498 10.5C7.87498 10.4005 7.91449 10.3052 7.98482 10.2348C8.05515 10.1645 8.15053 10.125 8.24998 10.125C8.34944 10.125 8.44482 10.1645 8.51515 10.2348C8.58548 10.3052 8.62498 10.4005 8.62498 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8494 10.875 15.75 10.875C15.6505 10.875 15.5551 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5551 10.1645 15.6505 10.125 15.75 10.125C15.8494 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></p>

                                    <p className="my-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803V15.803Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </p>
                                </div>
                                <div>
                                    <Link to='/login'>
                                        <button className="btn mr-3 bg-white  my-3 border-[#FF3811] text-[#FF3811]">Login</button>
                                    </Link>

                                    <Link to='/register'>
                                        <button className="btn bg-white my-3 border-[#FF3811] text-[#FF3811]">signup</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;