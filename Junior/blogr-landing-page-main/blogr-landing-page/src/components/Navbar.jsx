import React from 'react';
import './Navbar.css';
import { hamburger, Logo } from '../assets';

const Navbar = () => {
    return (
        <>
            <header className="flex items-center justify-between px-4 py-8 relative">
                <img src={Logo} alt="Blogr Logo" />
                <nav>
                    <img src={hamburger} alt="Hamburger menu" className='cursor-pointer' />
                </nav>
            </header>
        </>
    );
}

export default Navbar;