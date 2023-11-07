
// const FeatureSingle = ({bloglater}) => {
    // const { _id, title, shortdes, category, date, photo, longdes } = bloglater;
    // const blogcount = bloglater
    // console.log(shortdes);

    // if(longdes.length >= 300){
    //     console.log(longdes);
    // }

//     return (
//         <div className="overflow-x-auto h-[500px] my-4 mb-6 ml-20 mr-20">
//         <table className="table">

//             <thead>
//                 <tr className='text-xl font-semibold'>

//                     <th>Email</th>
//                     <th>Title</th>
//                     <th>Category</th>
//                     <th>ShortDescription</th>
//                     <th>Picture</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     blogcount.map(user =>
//                         <tr key={user._id}>

//                             <td>{user.email}</td>
//                             <td>{user.title}</td>
//                             <td>{user.category}</td>
//                             <td>{user.shortdes}</td>
//                             <td><img className='h-20 w-32' src={user.photo} alt="" /></td>
                            

//                             <td>
//                                 <button 
//                                 className="btn btn-primary text-white bg-[#FF3811]">Delete</button></td>
//                         </tr>
//                     )
//                 }
//             </tbody>

//         </table>
//     </div>
//     );
// };

// export default FeatureSingle;