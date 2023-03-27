import React from 'react';
import logo from '../.././images/Logo.svg';
const Header = () => {
    return (
        <div className='bg-[#1C2B35]'>
            <div className="navbar jm-container">
                <div className="flex-1">
                    <a className="btn normal-case text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a href='/order'>Order</a></li>
                        <li><a href='/order'>Order Review</a></li>
                        <li><a href='/sd'>Manage Inventory</a></li>
                        <li><a href='/s'>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;