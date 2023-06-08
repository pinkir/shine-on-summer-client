import { Link } from 'react-router-dom';
import error from '../../images/error2.jpg'
import { FaArrowLeft} from "react-icons/fa";
const Error = () => {
    return (
        <div className='relative'>
            <img className='w-1/2 mx-auto' src={error} alt="" />
            <Link to='/' className='btn bg-sky-500 absolute top-60 left-48 text-white '><FaArrowLeft></FaArrowLeft>Back To Home</Link>
        </div>
    );
};

export default Error;