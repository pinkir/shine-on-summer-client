import { useEffect, useState } from "react";
import waterBg from '../../../images/waterbg.jpg'
import { FaUser } from "react-icons/fa";

const PopularInstractor = () => {
    const [popularIns, setPopularIns] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/populerIns')
            .then(res => res.json())
            .then(data => setPopularIns(data))
    }, [])
    return (
        <>

            <div>
                <h3 className="text-center text-sky-600 text-4xl font-bold p-5 mt-40">Popular Instructors</h3>
                <p className="text-center text-stone-400 mb-20">Our swimming instructor is highly experienced, patient, and passionate about teaching. <br /> They provide personalized guidance, ensuring students of all levels develop strong swimming skills, water confidence, and a love for the sport. <br /> Their expertise and dedication create a supportive and enjoyable learning environment.</p>
            </div>

            <div className="grid md:grid-cols-3 justify-items-center my-8 gap-4 p-8" style={{backgroundImage: `url(${waterBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                {
                    popularIns.map(popular => 
                        <div key={popular._id} className="card w-80 bg-base-100 shadow-xl">
                            <figure><img className="h-[200px]" src={popular.instractor_picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{popular.instractor_name}</h2>
                                <p className="flex items-center gap-2"><FaUser className="text-sky-600"></FaUser> Total Student: {popular.students}</p>
                                
                                
                                
                            </div>
                        </div>
                    )
                }
            </div>


        </>
    );
};

export default PopularInstractor;