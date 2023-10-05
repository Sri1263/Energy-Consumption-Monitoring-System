import React from 'react';
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='bar'>
            <button className='navbutton' onClick={()=>navigate('/home')}>Home</button>
            <button className='navbutton' onClick={()=>navigate('/contact')}>Contact</button>
            <button className='navbutton'>About Us</button>
            <button className='navbutton' onClick={()=>navigate('/login')}>Log In</button>
        </div>
    );
}

export default NavBar;
