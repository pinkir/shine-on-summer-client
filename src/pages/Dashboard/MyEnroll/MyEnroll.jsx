import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyEnroll = () => {
    const { user } = useContext(AuthContext);

    const [enrolled, setEnrolled] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setEnrolled(data)
            })
    }, [user])


    return (
        <>
            <h1 className="text-3xl">My Classes</h1>
            <div className="uppercase font-bold flex gap-10 m-8">
                <h4>Classes: {enrolled.length}</h4>

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
                                <th>Price</th>
                                <th>Date</th>
                                <th>Payment ID</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolled.map((e, index) => <tr key={e._id}>
                                    <td>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={e.clsImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {e.clsName}


                                    </td>
                                    <td className="text-end">
                                        $ {e.price}


                                    </td>
                                    <td>
                                        {e.date}


                                    </td>
                                    <td >${e.transactionId}</td>
                                   
                                    
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default MyEnroll;