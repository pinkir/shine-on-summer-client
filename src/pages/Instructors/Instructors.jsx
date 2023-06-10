import { useEffect, useState } from "react";
import { FaMailBulk, FaUser } from "react-icons/fa";
import waterBg from '../../images/waterbg.jpg'


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (

        <>
            <div className="bg-slate-800" style={{backgroundImage: `url(${waterBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
                <h3 className="text-center text-white text-4xl font-bold p-5 pt-20 ">Our Instructors</h3>
                <p className="text-center text-white mb-10 pb-20">Our swimming instructor is highly experienced, patient, and passionate about teaching. <br /> They provide personalized guidance, ensuring students of all levels develop strong swimming skills, water confidence, and a love for the sport. <br /> Their expertise and dedication create a supportive and enjoyable learning environment.</p>
            </div>
            <div className="grid md:grid-cols-3 justify-items-center my-8 gap-4 p-8" >
                {
                    instructors.map(instructor =>
                        <div key={instructor._id} className="card w-80 bg-base-100 shadow-xl">
                            <figure><img className="h-[200px]" src={instructor.instractor_picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.instractor_name}</h2>
                                <p className="flex items-center gap-2"><FaUser className="text-sky-600"></FaUser> Total Student: {instructor.students}</p>
                                <p className="flex items-center gap-2"><FaMailBulk className="text-sky-600"></FaMailBulk> {instructor.email}</p>
                                <p className="flex items-center gap-2">{instructor.description.slice(0, 90)}...</p>
                                <button className="btn btn-ghost border-b-4 border-yellow-400">Read More</button>

                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Instructors;