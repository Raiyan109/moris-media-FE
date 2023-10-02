import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { AiOutlineSearch } from 'react-icons/ai'
import '../Styles/SettingNavbar.scss'
import { BsBook } from 'react-icons/bs'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'

const SettingsNavbar = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div className={theme}>
            <div className={`w-full h-[90px] flex justify-center items-center p-5 backgroundDarkGray`}>
                <div className="box">
                    <input type="text"
                        placeholder="Search"
                    />
                    <AiOutlineSearch className="iconTextColor text-xl" />
                </div>
                {/* Theme switch */}
                <div className="ml-32">
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-1 cursor-pointer iconTextColor">
                        <span>Light</span>
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer"
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-orange-600"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                        </span>
                        <span>Dark</span>
                    </label>
                </div>

                <div className="flex gap-2 ml-3">
                    <div className="backgroundLightGray p-1 rounded-full text-sm">
                        <BsBook className="iconTextColor" />
                    </div>
                    <div className="backgroundLightGray p-1 rounded-full text-sm">
                        <AiOutlineBell className="iconTextColor" />
                    </div>
                    <div className="backgroundLightGray p-1 rounded-full text-sm">
                        <AiOutlineMessage className="iconTextColor" />
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <h1>BG</h1>

                </div>
            </div>
        </div>
    );
};

export default SettingsNavbar;