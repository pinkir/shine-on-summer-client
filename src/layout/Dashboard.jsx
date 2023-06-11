
import { FaBook, FaHome, FaSearchPlus, FaShoppingCart, FaUser, FaUserGraduate, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";


const Dashboard = () => {

    // const [cart] = useCart();

    // TODO
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  bg-sky-500 text-base-content">

                    {
                        isAdmin
                            ?

                            <>
                                <li><NavLink to='/'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/classes'><FaSearchPlus></FaSearchPlus> Classes</NavLink></li>
                                <li><NavLink to='/instructors'><FaUser></FaUser>Instructors</NavLink></li>
                                <div className="divider"></div>

                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaBook></FaBook> Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>Manage Users</NavLink></li>
                            </>

                            :
                            <>
                                {
                                    isInstructor
                                        ?

                                        <>
                                            <li><NavLink to='/'><FaHome></FaHome>Instructor Home</NavLink></li>
                                            <li><NavLink to='/classes'><FaSearchPlus></FaSearchPlus> Classes</NavLink></li>
                                            <li><NavLink to='/instructors'><FaUser></FaUser>Instructors</NavLink></li>
                                            <div className="divider"></div>

                                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Selected Classes</NavLink></li>
                                            <li><NavLink to='/dashboard/addaclass'><FaBook></FaBook> Add A Class</NavLink></li>
                                            <li><NavLink to='/dashboard/myclasses'><FaUsers></FaUsers>My Classes</NavLink></li>
                                        </>

                                        :

                                        <>
                                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                                            <li><NavLink to='/classes'><FaSearchPlus></FaSearchPlus>Select More Classes</NavLink></li>
                                            <li><NavLink to='/instructors'><FaUser></FaUser>Instructors</NavLink></li>
                                            <div className="divider"></div>

                                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Selected Classes</NavLink></li>
                                            <li><NavLink to='/dashboard/enrolled'><FaUserGraduate></FaUserGraduate>My Enrolled Classes</NavLink></li>
                                        </>
                                }
                            </>

                    }



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;