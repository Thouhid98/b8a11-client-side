import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updateblog = () => {
    const updateblog = useLoaderData();
    console.log(updateblog);
    const { _id, title, shortdes, longdes, date, photo} = updateblog;

    const handleUpdateBlog = e =>{
        
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const shortdes = form.shortdes.value;
        const longdes = form.longdes.value;
        const date = form.date.value;
        const photo = form.photo.value;

        const newupdateBlog ={_id, title, shortdes, longdes, date, photo}
        console.log(newupdateBlog);

        // send Data to server 
        fetch(`http://localhost:5000/updateblog/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newupdateBlog)
        })
        .then(res => res.json())
        .then(data =>{
            Swal.fire({
                title: 'Success!',
                text: 'Update Product Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            console.log(data);
            e.target.reset()

        })

    }
    return (
        <div>
            <div className=" pl-32 pr-20 mb-32 rounded-xl bg-white">
                <h2 className="text-4xl font-bold mb-3">Update Blog</h2>

                <form onSubmit={handleUpdateBlog}>

                    <div className="flex gap-4 justify-center my-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={title} type="text" name="title" required placeholder="title" className="input input-bordered" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={shortdes}  type="text" name="shortdes" placeholder="Short Description" className="input input-bordered" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={longdes}  type="text" name="longdes" placeholder="Long Description" className="input input-bordered" required />
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">

                        {/* <div className="mr-5">
                            <label className="input-group my-2 ">
                                <span className="label-text bg-white">Category</span>
                            </label>

                            <select className="text-md border p-2 " name="category" id="" required>
                                <option value="travelblog">Travel Blog</option>
                                <option value="motoblog">Moto Blog</option>
                                <option value="foodblog">Food Blog</option>
                            </select>
                        </div> */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={date}  type="date" name="date" placeholder="Date" className="input input-bordered" required />
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">

                                <input defaultValue={photo}  type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </label>
                        </div>


                    </div>
                    <button type="submit" name="Add coffee" className="btn text-white bg-[#FF3811] mt-6 lg:ml-[500px]">Update Blog</button>
                </form >

            </div >
        </div>
    );
};

export default Updateblog;