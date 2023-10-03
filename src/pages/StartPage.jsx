import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context/ThemeProvider";
import CarImg from '../assets/car.svg'
import Person1 from '../assets/player-1.png'
import Person2 from '../assets/player-2.png'
import Watch from '../assets/watch.png'
import UpcomingImg from '../assets/transcalendar.svg'
import Attended from '../assets/transpeople.svg'
import NotAttended from '../assets/transpeoplewrong.svg'
import Scheduled from '../assets/transscheduled.svg'
import ReScheduled from '../assets/transrescheduled.svg'
import Cancelled from '../assets/transcanceled.svg'
import CalendarImg from '../assets/Group 16186.svg'
import LeftImg from '../assets/left.svg'
import RightImg from '../assets/right.svg'
import { AiOutlineCalendar } from 'react-icons/ai'
import Calendar from "../components/Calendar";
import { AiOutlineClockCircle } from 'react-icons/ai'
import Avatar from "../components/Avatar";

const StartPage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme}>
            <div className="flex">
                <Sidebar />
                <div className="h-screen w-full backgroundLightGray py-20 px-32">
                    <div className="flex justify-center items-center rounded-xl">
                        {/* h-[811px] */}
                        <div className="w-full shadow-md rounded-lg h-screen space-y-5">
                            <div className="flex justify-center items-center">
                                <div className="w-full lg:w-[1100px] h-[60px] flex justify-center items-center p-5 rounded-xl yellowBg gap-3">
                                    <img src={CarImg} alt="" />
                                    <h1 className="secondaryColorText text-sm">Get the most out of your <span className="primaryBg yellowText">Professional Plan!</span></h1>
                                    <h1 className="text-sm">Co-host meetings with your team by adding users to your account!</h1>
                                    <button className="secondaryBg text-white text-sm px-2
                                 py-1 rounded-lg">Invite Teammates</button>
                                </div>
                            </div>

                            <div className="mx-auto flex justify-center items-center">
                                <div className="flex items-center mx-auto justify-center flex-col lg:flex-row gap-5 lg:gap-16">
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
                                        <div>
                                            <Calendar />
                                        </div>
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
                                        <div className="flex justify-center items-center">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {/* Card 1 */}
                                                <div className="flex w-[164px] h-[127px] bg-white shadow-sm p-5 rounded-sm">
                                                    <div className="mb-6">
                                                        <h3>Upcoming</h3>
                                                        <h1 className="secondaryColorText text-xl font-bold">100</h1>
                                                    </div>
                                                    <div className="flex justify-end pt-7">
                                                        <img src={UpcomingImg} alt="" />
                                                    </div>
                                                </div>
                                                {/* Card 2 */}
                                                <div className="flex w-[164px] h-[127px] bg-white shadow-sm p-5 rounded-sm">
                                                    <div className="mb-6">
                                                        <h3>Attended</h3>
                                                        <h1 className="secondaryColorText text-xl font-bold">20</h1>
                                                    </div>
                                                    <div className="flex justify-end pt-7">
                                                        <img src={Attended} alt="" />
                                                    </div>
                                                </div>
                                                {/* Card 3 */}
                                                <div className="flex w-[164px] h-[127px] bg-white shadow-sm p-5 rounded-sm">
                                                    <div className="mb-6">
                                                        <h3>Not Attended</h3>
                                                        <h1 className="secondaryColorText text-xl font-bold">02</h1>
                                                    </div>
                                                    <div className="flex justify-end pt-7">
                                                        <img src={NotAttended} alt="" />
                                                    </div>
                                                </div>
                                                {/* Card 4 */}
                                                <div className="flex w-[164px] h-[127px] bg-white shadow-sm p-5 rounded-sm">
                                                    <div className="mb-6">
                                                        <h3>Scheduled</h3>
                                                        <h1 className="secondaryColorText text-xl font-bold">100</h1>
                                                    </div>
                                                    <div className="flex justify-end pt-7">
                                                        <img src={Scheduled} alt="" />
                                                    </div>
                                                </div>
                                                {/* Card 5 */}
                                                <div className="flex w-[164px] h-[127px] bg-white shadow-sm p-5 rounded-sm">
                                                    <div className="mb-6">
                                                        <h3>Re-scheduled</h3>
                                                        <h1 className="secondaryColorText text-xl font-bold">15</h1>
                                                    </div>
                                                    <div className="flex justify-end pt-7">
                                                        <img src={ReScheduled} alt="" />
                                                    </div>
                                                </div>
                                                {/* Card 6 */}
                                                <div className="flex w-[164px] h-[127px] bg-white shadow-sm p-5 rounded-sm">
                                                    <div className="mb-6">
                                                        <h3>Cancelled</h3>
                                                        <h1 className="secondaryColorText text-xl font-bold">05</h1>
                                                    </div>
                                                    <div className="flex justify-end pt-7">
                                                        <img src={Cancelled} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Upcoming Meetings */}
                                        <div className="flex justify-center items-center">
                                            <div className="whiteBg shadow-sm p-5 h-full w-full space-y-5">
                                                <div className="flex items-center justify-start gap-2 ml-5">
                                                    <img src={CalendarImg} alt="" />
                                                    <h1>Upcoming Meetings</h1>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <div className="grid grid-cols-8 md:grid-cols-8 lg:grid-cols-8 gap-3">
                                                        <div className="flex justify-center items-center">
                                                            <img src={LeftImg} alt="" />
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center backgroundDarkGray h-16 w-14 rounded-xl p-1 text-xs space-y-1 font-medium">
                                                            <p>MON</p>
                                                            <p>6</p>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center backgroundDarkGray h-16 w-14 rounded-xl p-1 text-xs space-y-1 font-medium">
                                                            <p>TUE</p>
                                                            <p>7</p>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center secondaryBg h-16 w-14 rounded-xl p-1 text-xs space-y-1 font-medium text-white">
                                                            <p>WED</p>
                                                            <p>8</p>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center backgroundDarkGray h-16 w-14 rounded-xl p-1 text-xs space-y-1 font-medium ">
                                                            <p>THU</p>
                                                            <p>9</p>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center backgroundDarkGray h-16 w-14 rounded-xl p-1 text-xs space-y-1 font-medium">
                                                            <p>FRI</p>
                                                            <p>10</p>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center backgroundDarkGray h-16 w-14 rounded-xl p-1 text-xs space-y-1 font-medium">
                                                            <p>SAT</p>
                                                            <p>11</p>
                                                        </div>
                                                        <div className="flex justify-center items-center">
                                                            <img src={RightImg} alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center items-center">
                                                    <div className="flex justify-between items-center backgroundDarkGray rounded-md w-full h-11 p-4">
                                                        <h1 className="text-lg secondaryColorText font-medium">Today's Activities</h1>
                                                        <div className="flex justify-center items-center gap-2 text-sm font-thin ">
                                                            <img className="grayText " src={CalendarImg} alt="" />
                                                            <h3>Wednesday, 9 Jun 2023</h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-center">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex flex-col items-center justify-center p-3 rounded-sm w-24 h-16 bg-red-100 text-sm font-medium">
                                                            <h1>12:00 PM</h1>
                                                            <h1 className="uppercase iconTextColor">Cancelled</h1>
                                                        </div>
                                                        <div className="flex flex-col  justify-center p-3 rounded-sm w-full h-full  text-sm font-medium">
                                                            <h1>Logo Designing Discussion</h1>
                                                            <h1>with <span className="secondaryColorText">Monoquinn Tech</span></h1>
                                                        </div>
                                                        <div className="flex flex-col items-center justify-center p-3 rounded-sm w-full h-16  text-sm font-medium iconTextColor">
                                                            <h1>Oops! You missed</h1>
                                                            <h1>this meeting</h1>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex flex-col items-center justify-center p-3 rounded-sm w-24 h-16 bg-green-100 text-sm font-medium">
                                                            <h1>12:00 PM</h1>
                                                            <h1 className="uppercase text-green-400">Scheduled</h1>
                                                        </div>
                                                        <div className="flex flex-col  justify-center p-3 rounded-sm w-full h-full  text-sm font-medium">
                                                            <h1>Logo Designing Discussion</h1>
                                                            <h1>with <span className="secondaryColorText">Monoquinn Tech</span></h1>
                                                        </div>
                                                        <div className="flex items-center justify-center gap-1 p-3 rounded-sm w-full h-16  text-xs font-medium text-gray-400">
                                                            <AiOutlineClockCircle />
                                                            <h1>25 M</h1>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <div className="flex flex-col items-center justify-center p-3 rounded-sm w-24 h-16 bg-yellow-100 text-sm font-medium">
                                                            <h1>12:00 PM</h1>
                                                            <h1 className="uppercase text-yellow-300">Scheduled</h1>
                                                        </div>
                                                        <div className="flex flex-col  justify-center p-3 rounded-sm w-full h-full  text-sm font-medium">
                                                            <h1>Meeting with the team</h1>
                                                            <Avatar />
                                                        </div>
                                                        <div className="flex items-center justify-center gap-1 p-3 rounded-sm w-full h-16  text-xs font-medium text-gray-400">
                                                            <AiOutlineClockCircle />
                                                            <h1>25 M</h1>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <div className="flex flex-col items-center justify-center p-3 rounded-sm w-24 h-16 bg-green-100 text-sm font-medium">
                                                            <h1>12:00 PM</h1>
                                                            <h1 className="uppercase text-green-400">Scheduled</h1>
                                                        </div>
                                                        <div className="flex flex-col  justify-center p-3 rounded-sm w-full h-full  text-sm font-medium">
                                                            <h1>Logo Designing Discussion</h1>
                                                            <h1>with <span className="secondaryColorText">Monoquinn Tech</span></h1>
                                                        </div>
                                                        <div className="flex items-center justify-center gap-1 p-3 rounded-sm w-full h-16  text-xs font-medium text-gray-400">
                                                            <AiOutlineClockCircle />
                                                            <h1>25 M</h1>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex flex-col items-center justify-center p-3 rounded-sm w-24 h-16 bg-green-100 text-sm font-medium">
                                                            <h1>12:00 PM</h1>
                                                            <h1 className="uppercase text-green-400">Scheduled</h1>
                                                        </div>
                                                        <div className="flex flex-col  justify-center p-3 rounded-sm w-full h-full  text-sm font-medium">
                                                            <h1>Logo Designing Discussion</h1>
                                                            <h1>with <span className="secondaryColorText">Monoquinn Tech</span></h1>
                                                        </div>
                                                        <div className="flex items-center justify-center gap-1 p-3 rounded-sm w-full h-16  text-xs font-medium text-gray-400">
                                                            <AiOutlineClockCircle />
                                                            <h1>25 M</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
        </div>
    );
};

export default StartPage;