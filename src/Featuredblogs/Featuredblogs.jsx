import { useLoaderData } from "react-router-dom";


const Featuredblogs = () => {
    const fblogs = useLoaderData()
    console.log(fblogs);
    if(fblogs){
        console.log('fertured blog');
    }
    return (
        <div>
            <h2>Featured blogs {fblogs.length}</h2>
        </div>
    );
};

export default Featuredblogs;