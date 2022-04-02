import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt Mania</h2>
            <nav className='nav-item'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='orderreview'>Order Review</CustomLink>
                <CustomLink to='grandpa'>GrandaPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;