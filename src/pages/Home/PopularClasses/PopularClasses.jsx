import { useEffect, useState } from "react";

const PopularClasses = () => {
    const [populerClass, setPopulerClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/populerClass')
            .then(res => res.json())
            .then(data => setPopulerClass(data))
    }, [])
    return (
        <>

            <div>
                <h3 className="text-center text-sky-600 text-4xl font-bold p-5 mt-40">Popular Classes</h3>
                <p className="text-center text-stone-400 mb-20">Highly sought-after swimming classes, attracting a multitude of eager participants. These popular sessions offer expert instruction, <br /> a supportive environment, and a perfect balance of skill development and enjoyment, making them a top choice for aspiring swimmers of all ages.</p>
            </div>

            <div className="grid md:grid-cols-3 justify-items-center my-8 gap-4">
                {
                    populerClass.map(populer => 
                        <div key={populer._id} className="card w-80 bg-base-100 shadow-xl">
                            <figure><img src={populer.class_picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{populer.class_name}</h2>
                                <p>Students: {populer.students}</p>
                                <p>Seats: {populer.seats}</p>
                                <p>$ {populer.price}</p>
                                
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    );
};

export default PopularClasses;