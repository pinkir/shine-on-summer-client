import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaBook, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    
    const [myClasses, setMyClasses] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClasses(data)
            })
    }, [user])


    const handleDelete = (myCls) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/classes/${myCls._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myClasses.filter(c => c._id !== myCls._id)
                            setMyClasses(remaining)
                        }
                    })

            }
        })
    }


    return (
        <>
            <h1 className="text-3xl">My Classes</h1>
            <div className="uppercase font-bold flex gap-10 m-8">
                <h4>Classes: {myClasses.length}</h4>
                
            </div>
            <div className="w-full font-semibold">
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className="text-sky-500 font-semibold uppercase">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Class</th>
                                <th>Name</th>
                                <th>Students</th>
                                <th>Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myCls, index) => <tr key={myCls._id}>
                                    <td>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myCls.class_picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {myCls.class_name}


                                    </td>
                                    <td>
                                        {myCls.students}


                                    </td>
                                    <td>
                                        {myCls.seats}


                                    </td>
                                    <td className="text-end">${myCls.price}</td>
                                    <td className="">{myCls.status}</td>
                                    <td>
                                        <FaTrashAlt onClick={() => handleDelete(myCls)} className=" text-red-600 text-2xl"></FaTrashAlt>
                                        <FaBook className=" text-green-500 text-2xl mt-3"></FaBook>
                                    </td>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default MyClasses;