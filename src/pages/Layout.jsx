import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="container flex">
                <div className="menuContainer">
                    <Sidebar />
                </div>
                <div className="contentContainer w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;