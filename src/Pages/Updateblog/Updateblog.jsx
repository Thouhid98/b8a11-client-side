
const Updateblog = () => {

    const handleUpdateBlog = e =>{
        
    }
    return (
        <div>
            <div className=" pl-32 pr-20 mb-32 rounded-xl bg-white">
                <h2 className="text-4xl font-bold mb-3">Add Blogs</h2>

                <form onSubmit={handleUpdateBlog}>

                

                    <div className="flex gap-4 justify-center my-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="title" required placeholder="title" className="input input-bordered" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="shortdes" placeholder="Short Description" className="input input-bordered" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Long Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="longdes" placeholder="Long Description" className="input input-bordered" required />
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">

                        <div className="mr-5">
                            <label className="input-group my-2 ">
                                <span className="label-text bg-white">Category</span>
                            </label>

                            <select className="text-md border p-2 " name="category" id="" required>
                                <option value="travelblog">Travel Blog</option>
                                <option value="motoblog">Moto Blog</option>
                                <option value="foodblog">Food Blog</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <label className="input-group">

                                <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                            </label>
                        </div>


                    </div>
                    <button type="submit" name="Add coffee" className="btn text-white bg-[#FF3811] mt-6 lg:ml-[500px]">Add Blog</button>
                </form >
            </div >
        </div>
    );
};

export default Updateblog;