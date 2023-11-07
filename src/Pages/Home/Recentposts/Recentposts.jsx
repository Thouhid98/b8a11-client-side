import axios from "axios";
import { useEffect, useState } from "react";
import Singlerecentpost from "./Singlerecentpost";

const Recentposts = () => {
    const [latestblogs, setLatestblogs] = useState([]);
    console.log(latestblogs);

    useEffect(() => {
        // Fetch data from the Node.js server
        axios.get('http://localhost:5000/latestblogs')
            .then((response) => {
                setLatestblogs(response.data);
            });
    }, []);


    return (
        <div>

            {/* <div>
                <h1>Latest Blog Posts</h1>
                <ul>
                    {latestblogs.map((post) => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.date}</p>
                            <p>{post.category}</p>
                            <img src={post.photo} alt="" />
                        </li>
                    ))}
                </ul>
            </div> */}
            <div >

                <div className="grid lg:grid-cols-3 ml-12">
                    {
                        latestblogs.map(recent =><Singlerecentpost key={recent._id} recent={recent}></Singlerecentpost>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Recentposts;