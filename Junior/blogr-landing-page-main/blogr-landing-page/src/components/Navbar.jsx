import React from 'react';
import './Navbar.css';
import { hamburger, Logo } from '../assets';
const Navbar = () => {
    return (
        <>
            <header className="flex items-center justify-between px-6 py-8 relative">
                <img src={Logo} alt="Blogr Logo" />
                <nav>
                    {/* <img src={hamburger} alt="Hamburger menu" className='cursor-pointer xl:hidden' /> */}

                </nav>
            </header>
        </>
    );
}

export default Navbar;