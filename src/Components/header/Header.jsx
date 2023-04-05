import React from 'react';
import logo from '../.././images/Logo.svg';
import { Link } from 'react-router-dom';
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
                        <li><Link to='/'>Shope</Link></li>
                        <li><Link to='/orders'>Order Review</Link></li>
                        <li><Link to='/inventory'>Manage Inventory</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;