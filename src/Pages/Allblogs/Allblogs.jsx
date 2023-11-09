import { useLoaderData } from "react-router-dom";
import Showallblog from "./Showallblog";
import { useState } from "react";


const Allblogs = () => {

    const allblogs = useLoaderData();
    // console.log(allblogs);


    // new code Start for Filter by category
    const [category, setCategory] = useState('');
    console.log(category);

    const handelCategory = () => {

        fetch(`https://b8a11-server-side-seven.vercel.app/blogs/${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategory(data);
            })
    }

    return (
        <div>
            <div className='ml-20 mb-4'>
                {/* <form onSubmit={handelCategory}>
                    <select className="text-md border p-2" name="category" id="" required>
                        <option value="travelblog">Travel Blog</option>
                        <option value="motoblog">Moto Blog</option>
                        <option value="foodblog">Food Blog</option>
                    </select>
                </form> */}

                <select value={category} onChange={handelCategory}>
                    <option value="">Select Category</option>
                    <option value="travelblog">Travel blog</option>
                    <option value="motoblog">Moto blog</option>
                    <option value="foodblog">Food blog</option>
                    {/* Add more categories as needed */}
                </select>


            </div>

            <div className="grid lg:grid-cols-3 gap-4 ml-10">
                {
                    allblogs.map(blog => <Showallblog key={blog._id} blog={blog}></Showallblog>)
                }
            </div>
        </div>
    );
};

export default Allblogs;