import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <nav >
                <Navbar/>
            </nav>
            <main className="mt-24">
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;