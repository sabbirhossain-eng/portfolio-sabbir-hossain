import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar/>
            <div className="pt-24 min-h-[calc(100vh-68px)] mx-auto px-4 lg:px-8">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;