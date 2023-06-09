import aboutWater from '../../../images/aboutwater.jpg'
import Tilt from 'react-parallax-tilt';


const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row p-20  bg-black bg-opacity-90 text-white mt-40">
                <img src={aboutWater} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <Tilt>
                    <h1 className="text-5xl font-bold border-b-2 border-teal-300">We Provide The <br /> Best Swimming Safety</h1>
                    </Tilt>
                    <p className="py-6 text-slate-300">Safety is our utmost priority at our swimming school. We maintain a vigilant and secure environment by adhering to strict safety protocols. Our instructors are certified in CPR and lifeguarding, and our facilities are equipped with proper safety measures. We ensure that all students receive proper supervision, instruction, and support to promote a safe and enjoyable swimming experience for everyone...</p>
                    <button className="btn btn-ghost border-b-4 border-teal-300">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;