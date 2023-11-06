import { useLoaderData } from "react-router-dom";
import Showallblog from "./Showallblog";


const Allblogs = () => {

    const allblogs = useLoaderData();
    // console.log(allblogs);
  

    return (
        <div>
            {/* <div className='ml-20 mb-4'>
                <select className="text-md border p-2" name="category" id="" required>
                    <option value="travelblog">Travel Blog</option>
                    <option value="motoblog">Moto Blog</option>
                    <option value="foodblog">Food Blog</option>
                </select>
            </div> */}

            <div className="grid lg:grid-cols-3 gap-4 ml-10">
                {
                    allblogs.map(blog =><Showallblog key={blog._id} blog={blog}></Showallblog>)
                }
            </div>
        </div>
    );
};

export default Allblogs;