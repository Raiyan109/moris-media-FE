import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context/ThemeProvider";
import CarImg from '../assets/car.svg'
import Person1 from '../assets/player-1.png'
import Person2 from '../assets/player-2.png'
import Watch from '../assets/watch.png'
import { AiOutlineCalendar } from 'react-icons/ai'

const StartPage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme}>
            <div className="flex">
                <Sidebar />
                <div className="h-screen w-full backgroundLightGray py-20 px-32">
                    <div className="flex justify-center items-center rounded-xl">
                        <div className="w-full shadow-md rounded-lg h-[811px] space-y-5">
                            <div className="w-full h-[60px] flex justify-center items-center p-5 rounded-xl yellowBg gap-3">
                                <img src={CarImg} alt="" />
                                <h1 className="secondaryColorText text-sm">Get the most out of your <span className="primaryBg yellowText">Professional Plan!</span></h1>
                                <h1 className="text-sm">Co-host meetings with your team by adding users to your account!</h1>
                                <button className="secondaryBg text-white text-sm px-2
                                 py-1 rounded-lg">Invite Teammates</button>
                            </div>

                            <div className="flex">
                                {/* left side  */}
                                <div className="flex-1 items-center space-y-5">
                                    {/* Hello Bella */}
                                    <div className="flex items-center relative">
                                        <div className="absolute -left-9">
                                            <img src={Person1}
                                                className="w-24 h-48 object-contain"
                                                alt="" />
                                        </div>
                                        <div className="secondaryBg flex items-center pl-24 py-4 rounded-lg h-[100px] w-full">
                                            <div>
                                                <h1 className="yellowText">Hello, Bella Gates</h1>
                                                <h1>Welcome back!</h1>
                                                <div className="flex">
                                                    <div className="flex yellowText text-sm">
                                                        <AiOutlineCalendar />
                                                        <h3>Thursday, 1st Jun 2023</h3>
                                                    </div>
                                                    <div className="flex text-sm text-white">
                                                        <AiOutlineCalendar />
                                                        <h3>01:20 PM</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={Watch}
                                                    className="w-24 h-32 object-contain"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Try before */}
                                    <div className="flex ">
                                        <div className="linearBg flex items-center justify-between px-4 py-4 rounded-lg h-[100px] w-full">
                                            <div className="flex items-center gap-5">
                                                <div>
                                                    <h1 className="yellowText uppercase">Try Before you commit:</h1>
                                                    <h1>30-Day Free Trial Awaits</h1>
                                                </div>
                                                <div>
                                                    <button className="uppercase secondaryColorText yellowBg py-1 px-4 font-semibold rounded-md text-sm">Try now</button>
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <img src={Person2}
                                                    className="w-24 h-32 object-contain"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Calender */}
                                    <div></div>
                                    {/* My team */}
                                    <div></div>
                                    {/* Lead pro */}
                                    <div></div>
                                    {/* Add-ons */}
                                    <div></div>
                                </div>
                                {/* right side */}
                                <div className="flex-1 space-y-5">
                                    {/* Upcoming cards */}
                                    <div>

                                    </div>
                                    {/* Upcoming Meetings */}
                                    <div></div>
                                    {/* My Meetings */}
                                    <div></div>
                                    {/* Suggested cards */}
                                    <div></div>
                                    {/* Scheduling */}
                                    <div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;