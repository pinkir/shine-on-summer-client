import { useQuery } from "@tanstack/react-query";
import {  useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageCls = () => {

    const [disable, setDisable] = useState(false)
    // const [manage, setManage] = useState([]);



    // useEffect(() => {
    //     fetch(`http://localhost:5000/classes/pending`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setManage(data)
    //             console.log(data)
    //         })
    // }, [])

    const [axiosSecure] = useAxiosSecure()
    const { data: pending = [], refetch } = useQuery(['pending'], async () => {
        const res = await axiosSecure.get('/classes/pending')
        return res.data;
    })



    const handleDeny = (pending) => {
        fetch(`http://localhost:5000/classes/deny/${pending._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setDisable(true)
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    


                }
            })

            
    }

    const handleApprove = (pending) => {
        fetch(`http://localhost:5000/classes/pending/${pending._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })


                }
            })

            
    }



    return (
        <>
            <h1 className="text-3xl">Manage Classes</h1>
            <div className="uppercase font-bold flex gap-10 m-8 text-red-500">
                <h4>Pending Classes: {pending.length}</h4>

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
                                pending.map((m, index) =>
                                    <tr key={m._id}>
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
                                            <button onClick={() => handleApprove(m)}

                                                className="btn btn-sm bg-green-500 ">Approve</button>
                                            <button
                                                onClick={() => handleDeny(m)}
                                                disabled={disable}
                                                className="btn btn-sm mx-3 bg-rose-400 ">Deny</button>
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