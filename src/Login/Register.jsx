import { useForm } from 'react-hook-form';
import bg from '../images/bg2.jpg'
import { useContext, useRef } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link,  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';




const Register = () => {
    const { createUser, updateUserProfile, setRefetch } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/"


    


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit = data => {

        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
                updateUserProfile(data.name, data.photo)

                    .then(() => {
                        setRefetch(true);
                        console.log('user pic')
                        const saveUser = { name: data.name, email: data.email, photo: data.photo}
                        fetch('https://shine-on-summer-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User SignUp successfully',

                                    });
                                    navigate('/')

                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    };


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-600 bg-opacity-20 my-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Please Sign Up!</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name"
                                {...register("name", { required: true })}
                                name="name"
                                className="input input-bordered" />
                            {errors.name && <span className='text-rose-500'>This field is required</span>}
                        </div>
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
                            <input type="password" placeholder="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*[#$@!%&*?])/

                                })}
                                name="password"

                                className="input input-bordered" />
                            {errors.password?.type == 'required' && <span className='text-rose-500'>This field is required</span>}
                            {errors.password?.type == 'minLength' && <span className='text-rose-500'> Add minimum 6 characters</span>}
                            {errors.password?.type == 'minLength' && <span className='text-rose-500'>Add maximum 20 characters</span>}
                            {errors.password?.type == 'pattern' && <span className='text-rose-500'>Password must have one uppercase one lowercase one special character one number.</span>}
                            {errors.password && <p>{errors.password.message}</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password"
                                {...register("confirm", {
                                    required: true,
                                    validate: (value) =>
                                        value === password.current || 'Passwords do not match',
                                })}
                                name='confirm'


                                className="input input-bordered" />
                            {errors.confirm && <p>{errors.confirm.message}</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="photo url"
                                {...register("photo", { required: true })}
                                name='photo'
                                className="input input-bordered" />
                            {errors.photo && <span className='text-rose-500'>This field is required</span>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Sign Up" />

                        </div>
                        <SocialLogin></SocialLogin>
                        <p>Already have an account?? Please <Link to='/login' className='text-blue-600 font-extrabold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;