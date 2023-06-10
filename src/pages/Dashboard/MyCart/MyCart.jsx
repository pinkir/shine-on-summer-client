import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    // how reduce works??
    const total = cart.reduce((sum, cls) => cls.price + sum, 0)

    const handleDelete = (cls) => {
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

                fetch(`http://localhost:5000/carts/${cls._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }






    return (
        <>
            <h1 className="text-3xl">My Selected Classes</h1>
            <div className="uppercase font-bold flex gap-10 m-8">
                <h4>Classes: {cart.length}</h4>
                <h4> Total: ${total}</h4>
                <button className="btn btn-sm bg-green-500">Pay</button>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((row, index) => <tr key={row._id}>
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
                                        <FaTrashAlt onClick={() => handleDelete(row)} className=" text-red-600 text-2xl"></FaTrashAlt>
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