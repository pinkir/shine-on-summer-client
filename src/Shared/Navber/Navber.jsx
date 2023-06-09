import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";



const Navber = () => {
    const { user, logOut, setRefetch } = useContext(AuthContext);
    

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setRefetch(false);
                
            })
            .catch(error => { console.log(error) })

    }
    return (
        <div className="navbar bg-black fixed z-10 bg-opacity-50 text-white max-w-screen-xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/teacherinfo'>teachers</Link></li>
                        {user?.email ?
                            <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>

                            </>
                            :
                            ""}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl text-sky-400 font-extrabold" > Shine<span className='text-amber-300 text-4xl'>On</span> Summer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold ">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/teacherinfo'>teachers</Link></li>
                    {user?.email ?
                        <>
                            <li><Link to='/dashboard'>Dashboard</Link></li>

                        </>
                        :
                        ""}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="avatar online">
                                <div className="w-11 rounded-full">
                                    <img src={user.photoURL} title={user.displayName} />
                                </div>

                            </div>
                            <input onClick={handleLogOut} className="btn  bg-sky-600 ml-2 text-white" type="submit" value="LogOut" />
                            

                        </>
                        :
                        <Link to='/login' className="btn  bg-sky-600 text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navber;