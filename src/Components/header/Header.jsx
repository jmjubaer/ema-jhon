import React from 'react';
import logo from '../.././images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-[#1C2B35]'>
            <div className="navbar jm-container">
                <div className="flex-1">
                    <a href='/' className="btn normal-case text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><NavLink className={({ isActive }) => isActive ? "text-orange-500"
                        : "" } to='/'>Shope</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-orange-500"
                        : "" } to='/orders'>Order Review</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-orange-500"
                        : "" } to='/inventory'>Manage Inventory</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-orange-500"
                        : "" } to='/login'>Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;