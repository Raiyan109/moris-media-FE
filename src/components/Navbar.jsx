import { useState } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    return (
        <div>
            {/* <header className={theme}>
                <div className="background w-full h-[40px] flex justify-center items-center p-5">
                    <h1 className="text">Try all of Moris' Advanced Features - <span className="font-semibold">1 Month Free Trial</span> <span className="font-semibold text-yellow-400">Try for free</span></h1>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme </button>
                </div>
            </header> */}
            <header>
                <div className="w-full h-[40px] flex justify-center items-center p-5 bg-violet-800 text-white">
                    <h1 className="space-x-4">Try all of Moris' Advanced Features - <span className="font-semibold">1 Month Free Trial</span> <span className="font-semibold text-yellow-400">Try for free</span></h1>
                    {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme </button> */}
                </div>
            </header>
        </div>
    );
};

export default Navbar;