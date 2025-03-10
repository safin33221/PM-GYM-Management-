import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {
    const { user, signoutUser } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await signoutUser()
        navigate('/')

    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>All Tainer</NavLink></li>
        <li><NavLink>All Classes</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 px-16 mx-auto w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">PM GYM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><NavLink to={`/apply-trainer`}><a>Apply Trainer</a></NavLink></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div> : <Link to={`/sign-In`} ><a className="btn">Get Start</a></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;