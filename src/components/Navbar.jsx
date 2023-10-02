import { useState } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState('light')
    return (
        <div>
            <header className={theme}>
                <div className="background w-full h-[30px]">
                    <h1 className="text">Hello</h1>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;