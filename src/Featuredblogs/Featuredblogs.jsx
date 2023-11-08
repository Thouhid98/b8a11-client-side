import { useLoaderData } from "react-router-dom";
// import FeatureSingle from "./FeatureSingle";


const Featuredblogs = () => {
    const fblogs = useLoaderData()
    console.log(fblogs);

    return (
        <div>

            {/* <div>
                {
                    fblogs.map(bloglater=><FeatureSingle key={bloglater._id} bloglater={bloglater}></FeatureSingle>)
                }
            </div> */}


            <div className="overflow-x-auto h-[500px] my-4 mb-6 ml-20 mr-20">
                <table className="table">

                    <thead>
                        <tr className='text-xl font-semibold'>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fblogs.map(user =>
                                <tr key={user._id}>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.title}</td>
                                    
                                    <td><img className='h-20 w-32' src={user.ownerpic} alt="" /></td>

                                    <td>
                                        <button
                                            className="btn btn-primary text-white bg-[#FF3811]">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>






        </div>
    );
};

export default Featuredblogs;