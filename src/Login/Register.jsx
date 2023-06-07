import { useForm } from 'react-hook-form';
import bg from '../images/bg2.jpg'
import { useContext, useRef } from 'react';
import { AuthContext } from '../Providers/AuthProvider';



const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch('password', '');

    const onSubmit = data => {
        reset()
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    };


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-600 bg-opacity-20 my-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Please Sign in!</h1>
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
                                {...register("confirm", { required: true , 
                                validate: (value) =>
                                    value === password.current || 'Passwords do not match',})}
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
                            <button className="btn btn-info">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;