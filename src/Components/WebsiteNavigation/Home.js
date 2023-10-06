import React from 'react';
import './home.css'
import NavBar from '../NavBar';
import Banner from './Banner';

const Home = () => {
    return (
        <div id='homepage'>
            <NavBar/>
            <Banner/>
        </div>
    );
}

export default Home;
