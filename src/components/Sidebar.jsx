import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <aside className="h-screen">
                <nav className="h-full w-32 md:w-48 flex flex-col  border-r border-gray-200 shadow-sm">
                    <div className="flex justify-start items-center">
                        {/* <img src="" alt="" /> */}
                        <h1 className="text-xl">Logo </h1>
                    </div>

                    <ul className="flex-1 p-3">
                        <li>Home</li>
                        <Link to='/settings'>Settings</Link>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;