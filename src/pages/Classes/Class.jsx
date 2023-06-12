import { FaChair, FaMoneyBill, FaUser } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import useCart from "../../Hooks/useCart";



const Class = ({cls}) => {
    const {_id, class_picture, class_name, instractor_name, seats, price } = cls;


    const [, refetch] = useCart()

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = (cls) => {
        console.log(cls);
        if (user && user.email) {
            const enrollCls = {classId: _id, class_picture, class_name, instractor_name, seats, price, email: user.email }
            fetch('https://shine-on-summer-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(enrollCls)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to add classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }


    }

    // const b = document.getElementById('bd');

    // if(user?.role === 'admin' || user?.role === 'instructor'){
    //     b.disabled = true;
    // }


    return (
        <div  className="card w-80 bg-base-100 shadow-xl">
            <figure><img className="h-[200px]" src={class_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>

                <p className="flex items-center gap-2"><FaUser className="text-sky-600"></FaUser> Instructor:  {instractor_name}</p>
                <p className="flex items-center gap-2"><FaChair className="text-sky-600"></FaChair> Available Seats: {seats}</p>
                <p className="flex items-center gap-2"><FaMoneyBill className="text-sky-600"></FaMoneyBill> Price: ${price}/Person</p>
                {/* <p className="flex items-center gap-2">{cls.description}</p> */}
                <button onClick={() => handleAddToCart(cls)} className="btn btn-ghost border-b-4 border-yellow-400" id="bd">Enroll</button>

            </div>
        </div>
    );
};

export default Class;