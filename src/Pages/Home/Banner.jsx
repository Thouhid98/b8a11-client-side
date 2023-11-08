
const Banner = () => {
    return (
        <div className="pl-12 pr-12 mb-20">
            <div className="hero -mt-10 h-[550px] bg-[url('/bg-1.avif')]" >
                <div className="hero-overlay bg-opacity-60"></div>


                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div>
                        <h1 className="lg:-ml-[500px] text-6xl text-white font-bold lg:w-[380px]">Blogger</h1>
                        <div className="my-4 lg:w-[500px] lg:-ml-[500px] text-white">
                        <p>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        </div>
                       
                        <button className="btn hover-none bg-[#FF3811] border-none text-white rounded-sm mr-4 lg:-ml-[500px] my-3">Discover More</button>
                        

                        <button className="btn btn-outline border-white rounded-sm text-white w-36 my-3">Latest Posts</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;