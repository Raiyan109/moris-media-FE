import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>
            {/* <header className={theme}>
                <div className="background w-full h-[40px] flex justify-center items-center p-5">
                    <h1 className="text">Try all of Moris' Advanced Features - <span className="font-semibold">1 Month Free Trial</span> <span className="font-semibold text-yellow-400">Try for free</span></h1>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme </button>
                </div>
            </header> */}
            <header className={theme}>
                <div className="w-full h-[40px] flex justify-center items-center p-5 backgroundTopBanner">
                    <h1 className="space-x-4 topBannerText">Try all of Moris' Advanced Features - <span className="font-semibold topBannerText">1 Month Free Trial</span> <span className="font-semibold text-yellow-400">Try for free</span></h1>

                    <div className="ml-32">
                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-white">
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
                </div>
            </header>
        </div>
    );
};

export default Navbar;