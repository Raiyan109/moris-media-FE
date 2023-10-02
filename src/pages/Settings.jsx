import SystemLogo from '../assets/Group 16186.svg'
import BrandingLogo from '../assets/branding.svg'
import NotificationLogo from '../assets/notification.svg'
import GroupLogo from '../assets/groups.svg'
import SystemLogo2 from '../assets/system.svg'
import Sidebar from '../components/Sidebar'
import SettingsNavbar from '../components/SettingsNavbar'

const Settings = () => {
    return (
        <div>
            <SettingsNavbar />
            <div className='flex'>
                <Sidebar />
                <div className="h-screen w-full bg-gray-100 py-20 px-32">
                    <div className="flex justify-center items-center rounded-xl">
                        <div className="w-full shadow-md flex rounded-lg border">
                            <div className="w-1/3 h-full bg-gray-200 pt-7 pl-1 md:pl-5 flex flex-col">
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
                            <div className="bg-white w-2/3 h-full p-6">
                                <div className="py-2 px-4 flex items-center gap-1">
                                    <img src={SystemLogo2} alt="" />
                                    <h1 className="font-semibold">System</h1>
                                </div>

                                <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                                    <div className='space-y-1 flex flex-col'>
                                        <label className='text-violet-400'>Language</label>
                                        <input type="text"
                                            className='w-28 md:w-48 h-5 md:h-7 px-1 border focus:border-gray-200 outline-none my-5'
                                        />
                                    </div>
                                    <input type="text" />
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