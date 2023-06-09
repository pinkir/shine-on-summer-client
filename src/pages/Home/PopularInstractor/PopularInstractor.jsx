import { useEffect, useState } from "react";

const PopularInstractor = () => {
    const [popularIns, setPopularIns] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/populerClass')
            .then(res => res.json())
            .then(data => setPopularIns(data))
    }, [])
    return (
        <>

            <div>
                <h3 className="text-center text-sky-600 text-4xl font-bold p-5 mt-40">Popular Instructors</h3>
                <p className="text-center text-stone-400 mb-20">Highly sought-after swimming classes, attracting a multitude of eager participants. These popular sessions offer expert instruction, <br /> a supportive environment, and a perfect balance of skill development and enjoyment, making them a top choice for aspiring swimmers of all ages.</p>
            </div>

            <div className="grid md:grid-cols-3 justify-items-center my-8 gap-4">
                {
                    popularIns.map(popular => 
                        <div key={popular._id} className="card w-80 bg-base-100 shadow-xl">
                            <figure><img src={popular.instractor_picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{popular.class_name}</h2>
                                <p>Students: {popular.students}</p>
                                <p>Seats: {popular.instractor_name}</p>
                                
                                
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    );
};

export default PopularInstractor;