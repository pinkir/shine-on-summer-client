import { useEffect, useState } from "react";
import { FaChair, FaMoneyBill, FaUser } from "react-icons/fa";

const PopularClasses = () => {
    const [populerClass, setPopulerClass] = useState([]);

    useEffect(() => {
        fetch('https://shine-on-summer-server.vercel.app/populerClass')
            .then(res => res.json())
            .then(data => setPopulerClass(data))
    }, [])
    return (
        <>

            <div>
                <h3 className="text-center text-sky-600 text-4xl font-bold p-5 mt-40">Popular Classes</h3>
                <p className="text-center text-stone-400 mb-20">Highly sought-after swimming classes, attracting a multitude of eager participants. These popular sessions offer expert instruction, <br /> a supportive environment, and a perfect balance of skill development and enjoyment, making them a top choice for aspiring swimmers of all ages.</p>
            </div>

            <div className="grid md:grid-cols-3 justify-items-center my-8 ">
                {
                    populerClass.map(populer => 
                        <div key={populer._id} className="card w-96 bg-gradient-to-l from-sky-200 to-transparent shadow-xl mb-4">
                            <figure><img src={populer.class_picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{populer.class_name}</h2>
                                <p className="flex items-center gap-2"><FaUser className="text-sky-600"></FaUser> Students: {populer.students}</p>
                                <p className="flex items-center gap-2"><FaChair className="text-sky-600"></FaChair> Seats: {populer.seats}</p>
                                <p className="flex items-center gap-2"><FaMoneyBill className="text-sky-600"></FaMoneyBill> ${populer.price} /Person</p>
                                
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    );
};

export default PopularClasses;