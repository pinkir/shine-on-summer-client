import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ManageCls = () => {
    
    
    const [manage, setManage] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/classes/pending`)
            .then(res => res.json())
            .then(data => {
                setManage(data)
            })
    }, [])
    return (
        <>
        <h1 className="text-3xl">Manage Classes</h1>
        <div className="uppercase font-bold flex gap-10 m-8 text-red-500">
            <h4>Pending Classes: {manage.length}</h4>
            
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
                            manage.map((m, index) => <tr key={m._id}>
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={m.class_picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {m.class_name}


                                </td>
                                <td>
                                    {m.students}


                                </td>
                                <td>
                                    {m.seats}


                                </td>
                                <td className="text-end">${m.price}</td>
                                <td className="">{m.status}</td>
                                <td>
                                <button className="btn btn-sm bg-green-500 ">Approve</button>
                                <button className="btn btn-sm mx-3 bg-rose-400 ">Deny</button>
                                <button className="btn btn-sm bg-yellow-400">Feedback</button>
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

export default ManageCls;