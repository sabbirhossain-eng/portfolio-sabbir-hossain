import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <NavBar/>
            <div className="pt-24 min-h-[calc(100vh-68px)] px-4 lg:px-8">
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;