import { useEffect, useState } from "react";
import waterBg from '../../images/waterbg.jpg'

import Class from "./Class";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    
    

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    
    return (
        <>
            <div className="bg-slate-800" style={{ backgroundImage: `url(${waterBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <h3 className="text-center text-white text-4xl font-bold p-5 pt-32 ">Our Classes</h3>
                <p className="text-center text-white mb-10 pb-20">Our swimming instructor is highly experienced, patient, and passionate about teaching. <br /> They provide personalized guidance, ensuring students of all levels develop strong swimming skills, water confidence, and a love for the sport. <br /> Their expertise and dedication create a supportive and enjoyable learning environment.</p>
            </div>
            <div className="grid md:grid-cols-3 justify-items-center my-8 gap-4 p-8" >
                {
                    classes.map(cls => <Class key={cls._id}
                    cls={cls}></Class>
                        
                    )
                }
            </div>
        </>
    );
};

export default Classes;