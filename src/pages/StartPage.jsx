import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context/ThemeProvider";
import CarImg from '../assets/car.svg'
import Person1 from '../assets/player-1.png'
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
                        <div className="w-full shadow-md rounded-lg h-[811px]">
                            <div className="w-full h-[60px] flex justify-center items-center p-5 rounded-xl yellowBg gap-3">
                                <img src={CarImg} alt="" />
                                <h1 className="secondaryColorText text-sm">Get the most out of your <span className="primaryBg yellowText">Professional Plan!</span></h1>
                                <h1 className="text-sm">Co-host meetings with your team by adding users to your account!</h1>
                                <button className="secondaryBg text-white text-sm px-2
                                 py-1 rounded-lg">Invite Teammates</button>
                            </div>

                            <div className="flex">
                                {/* left side  */}
                                <div>
                                    {/* Hello Bella */}
                                    <div className="flex relative">
                                        <img src={Person1}
                                            className="w-24 h-32 object-contain"
                                            alt="" />
                                        <div className="secondaryBg flex items-center pl-24 py-4">
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
                                    <div></div>
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
                                <div></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;