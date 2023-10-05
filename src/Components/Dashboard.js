import React, { useState } from 'react'
import NavBar from './NavBar'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import SpeedIcon from '@mui/icons-material/Speed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import './dashboard.css';

export default function Dashboard() {
    const [value,setValue] = useState(1)
  return (
    <div>
        <NavBar login={true}/>
        <div>
            This is my user Dashboard where he will be able to navigate between the tabs ={'>'} Dashboard | Usage | PayBill | UserProfile
        </div>
        <div className='footerBottomNavigation'>
            <BottomNavigation className='footer'
                // showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="DASHBOARD" icon={<SpeedIcon />} />
                <BottomNavigationAction label="USAGE" icon={<ElectricMeterIcon />} />
                <BottomNavigationAction label="PAYBILL" icon={<AttachMoneyIcon />} />
                <BottomNavigationAction label="USERPROFILE" icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    </div>
  )
}
