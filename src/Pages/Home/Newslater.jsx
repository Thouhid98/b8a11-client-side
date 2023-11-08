import Swal from "sweetalert2";

const Newslater = () => {
    const divStyle = {
        backgroundImage: "url('https://source.unsplash.com/random/640x480')",
        backgroundPosition: 'center center',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover'
    };

    const handleNewslater = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        console.log(email);

        if(email){
            Swal.fire({
                title: 'Success!',
                text: 'Thanks For Subscribing',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    }




    return (
        <div>
            <div className="w-full dark:bg-gray-500" style={divStyle}>
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">Newslater</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>

                    <form onSubmit={handleNewslater}>
                        <div className="flex flex-row">
                            <input type="text" name="email" placeholder="Email" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />

                            <button type="submit" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3  bg-[#FF3811] dark:text-white">Subscribe</button>

                        
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Newslater;