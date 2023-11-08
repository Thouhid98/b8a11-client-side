import React from 'react';

const Singlewishlist = () => {
    return (
        <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md my-4 mx-auto  lg:w-[800px]">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-64 w-full object-cover md:w-48" src="/public/thouhid.jpg" alt="Blog Post Image"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category: Web Design</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Your Blog Post Title</a>
                        <p className="mt-2 text-gray-500">Published on: November 8, 2023</p>
                        <p className="mt-2 text-gray-600">This is a short description of your blog post. It provides a brief overview of what readers can expect to find in the post.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlewishlist;