import { useLoaderData } from "react-router-dom";
import Showallblog from "./Showallblog";

const Allblogs = () => {

    const allblogs = useLoaderData();
    // console.log(allblogs);

    return (
        <div>
            <h2>All blogs {allblogs.length}</h2>
            <div className="grid lg:grid-cols-3 gap-4 ml-10">
                {
                    allblogs.map(blog =><Showallblog key={blog._id} blog={blog}></Showallblog>)
                }
            </div>
        </div>
    );
};

export default Allblogs;