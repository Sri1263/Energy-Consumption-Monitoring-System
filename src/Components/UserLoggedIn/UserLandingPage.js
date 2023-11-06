import React, { useState } from 'react'
import NavBar from '../WebsiteNavigation/NavBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import './userlandingpage.css';
import Dashboard from './Dashboard';
import Usage from './Usage'; 
import UserProfile from './UserProfile'

export default function UserLandingPage() {
    const [value,setValue] = useState(0)
  return (
    <div>
        <NavBar login={true}/>
        <div>
            {
                {
                    0 : <Dashboard/>,
                    1 : <Usage/>,
                    2 : <UserProfile/>
                }[value]
            }
        </div>
        <div>
            <BottomNavigation className='footer'
                // showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="DASHBOARD" icon={<SpeedIcon />} />
                <BottomNavigationAction label="USAGE" icon={<ElectricMeterIcon />} />
                <BottomNavigationAction label="USERPROFILE" icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    </div>
  )
}
