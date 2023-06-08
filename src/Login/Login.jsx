import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import bg from '../images/bg2.jpg'
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [passwordShown, setPasswordShown] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        reset()
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    icon: 'success',
                    title: 'User login successfully',

                })
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error)
            });

    };

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-600 bg-opacity-20 my-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                
                                {...register("email", { required: true })}
                                name="email"
                                className="input input-bordered" />
                            {errors.email && <span className='text-rose-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordShown ? "text" : "password"} placeholder="password"
                                
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*[#$@!%&*?])/

                                })}
                                name="password"


                                className="input input-bordered" />

                            {errors.password?.type == 'required' && <span className='text-rose-500'>This field is required</span>}
                            <FaEye onClick={togglePasswordVisiblity}></FaEye>



                        </div>


                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Login" />

                        </div>
                        <p>New to shine on summer?? Please <Link to='/register' className='text-blue-600 font-extrabold'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;