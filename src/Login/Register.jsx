import bg from '../images/bg2.jpg'
const Register = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-600 bg-opacity-20 my-8">
                    <div className="card-body">
                        <div className="form-control">
                        <h1 className="text-4xl font-bold">Please Sign in!</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" 
                            name="name"
                            className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                            name="email"
                             className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" 
                            name="password"
                            className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="confirm" placeholder="confirm password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;