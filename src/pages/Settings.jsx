import SystemLogo from '../assets/Group 16186.svg'
import BrandingLogo from '../assets/branding.svg'
import NotificationLogo from '../assets/notification.svg'
import GroupLogo from '../assets/groups.svg'
import SystemLogo2 from '../assets/system.svg'
import Sidebar from '../components/Sidebar'
import DarkThemeImg from '../assets/dark theme screenshot.jpg'
import LightThemeImg from '../assets/light theme screenshot.png'
import SettingsNavbar from '../components/SettingsNavbar'
import '../Styles/Settings.scss'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Settings = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme}>
            <SettingsNavbar />
            <div className='flex'>
                <Sidebar />
                <div className="h-screen w-full backgroundLightGray py-20 px-32">
                    <div className="flex justify-center items-center rounded-xl">
                        <div className="w-full shadow-md flex rounded-lg border h-[811px]">
                            <div className="w-1/3 h-full backgroundDarkGray pt-7 pl-1 md:pl-5 flex flex-col">
                                <h1 className="font-semibold text-xl">Settings</h1>

                                <div className="border-b border-b-gray-300 mr-6">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-28 md:w-48 h-5 md:h-7 px-1 border focus:border-gray-100 my-5 outline-none"
                                    />
                                </div>

                                <div className="border-b border-b-gray-300 mr-6">
                                    <h1 className="text-gray-400 uppercase text-sm md:text-xl">General</h1>
                                    <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-2">
                                        <img className='w-6 h-4 md:w-6 md:h-5' src={SystemLogo} alt="" />
                                        <h1 className="text-pink-700 font-semibold hidden md:block">System</h1>
                                    </div>
                                </div>

                                <div className="mr-6 space-y-4">
                                    <h1 className="text-gray-400 uppercase text-sm md:text-xl">Calender</h1>
                                    <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-2">
                                        <img src={BrandingLogo} alt="" />
                                        <h1 className=" font-semibold hidden md:block">Branding</h1>
                                    </div>
                                    <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-2">
                                        <img src={NotificationLogo} alt="" />
                                        <h1 className=" font-semibold hidden md:block">Notifications</h1>
                                    </div>

                                    <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-2">
                                        <img src={GroupLogo} alt="" />
                                        <h1 className=" font-semibold hidden md:block">Groups</h1>
                                    </div>
                                </div>
                            </div>

                            {/* System */}
                            <div className="bg-white w-2/3 h-full p-6 space-y-10">
                                <div className="py-2 px-4 flex items-center gap-1">
                                    <img src={SystemLogo2} alt="" />
                                    <h1 className="font-semibold">System</h1>
                                </div>
                                {/* Input group */}
                                <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                                    <div className='space-y-1 flex flex-col'>
                                        <label className='secondaryColorText'>Language</label>
                                        <input type="text"
                                            className='w-28 md:w-48 h-5 md:h-7 px-1 border focus:border-gray-200 outline-none my-5'
                                        />
                                    </div>
                                    <input type="text" />
                                </div>

                                {/* Theme */}
                                <div>
                                    <h1 className='secondaryColorText'>Theme</h1>
                                    <div className='flex items-center py-12 px-8 gap-7'>
                                        {/* Dark */}
                                        <div className='flex flex-col justify-start items-center'>
                                            <label>
                                                <img src={DarkThemeImg}
                                                    className='w-12 h-12 '
                                                    alt="" />
                                            </label>
                                            <input type="radio"
                                            // className='particles-checkbox'
                                            />
                                        </div>
                                        {/* Light */}
                                        <div className='flex flex-col justify-start items-center'>
                                            <label>
                                                <img src={LightThemeImg}
                                                    className='w-12 h-12 '
                                                    alt="" />
                                            </label>
                                            <input type="radio"
                                            // className='particles-checkbox'
                                            />
                                        </div>
                                        {/* White */}
                                        <div className='flex flex-col justify-start items-center'>
                                            <label>
                                                <img src={LightThemeImg}
                                                    className='w-12 h-12 '
                                                    alt="" />
                                            </label>
                                            <input type="radio"
                                            // className='particles-checkbox'
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Date Mode */}
                                <div>
                                    <h1 className='secondaryColorText'>Date Mode</h1>
                                    <div className='flex gap-3'>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" />
                                            <label>Apr 26 2023</label>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" />
                                            <label>26 April 2023</label>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" />
                                            <label>2023/04/26</label>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <input type="radio" />
                                            <label>2023-0426</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;