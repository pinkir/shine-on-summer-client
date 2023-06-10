import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, cls) => cls.price + sum, 0)
    return (
        <>
            <h1 className="text-3xl">My Selected Classes</h1>
            <div className="uppercase font-bold flex gap-10 m-8">
                <h4>Classes: {cart.length}</h4>
                <h4> Total: ${total}</h4>
                <button className="btn btn-sm bg-green-500">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Class</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((row, index)=><tr key={row._id}>
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.class_picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                {row.class_name}
                                    
                                    
                                </td>
                                <td className="text-end">${row.price}</td>
                                <td>
                                     <FaTrashAlt className=" text-red-600 text-2xl"></FaTrashAlt>
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

export default MyCart;