import { Link } from "react-router-dom";
import HomeImg from '../assets/Icon material-home.svg'
import IndiaImg from '../assets/india.png'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Sidebar = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme}>
            <aside className="h-screen whiteBg text">
                <nav className="h-full w-32 md:w-48 flex flex-col  border-r border-gray-200 shadow-sm space-y-8">
                    <div className="flex justify-center items-center pt-6">
                        {/* <img src="" alt="" /> */}
                        <h1 className="text-xl">Logo </h1>
                    </div>

                    <ul className="flex-1 p-3 text-sm">
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors ">
                            <img src={HomeImg} alt="" />
                            <span>Home</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Create an Event</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>Create a Quick Event</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>Create My Event</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Quick Events</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>All Quick Events</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>Create New Quick Event</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Calender</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>My All Calendar</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Schedule Meetings</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>My Meetings</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>Company Meetings</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>Team Meetings</span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            {/* <img src={HomeImg} alt="" /> */}
                            <span>Assigned Meetings</span>
                        </li>
                    </ul>

                    <ul className="flex-1 p-3">
                        <Link to='/settings'>
                            <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                                <img src={HomeImg} alt="" />
                                <span>Settings </span>
                            </li>
                        </Link>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Team </span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Subscription </span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={HomeImg} alt="" />
                            <span>Help & Support </span>
                        </li>
                        <li className="relative flex items-center py-2 px-3 gap-4 my-1 font-medium rounded-md cursor-pointer transition-colors">
                            <img src={IndiaImg} className="w-4 h-4" alt="" />
                            <span>INDIA </span>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;