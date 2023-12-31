import React from 'react';
import NavBar from './NavBar';
import './contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Map from './map.png'

const Contact = () => {
    return (
        <div>
            <NavBar/>
            <div className='ContactPageContainer'>
                
                <div className='ContactLeft'>
                    <List>
                    <ListItem dense={false}>
                            <ListItemIcon>
                                <CorporateFareIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText
                                primary="Energy Monitoring Systems Pvt Lt"
                            />
                        </ListItem>
                        <ListItem dense={false}>
                            <ListItemIcon>
                                <EmailIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText
                                primary="ecms@sastra.com"
                            />
                        </ListItem>
                        <ListItem dense={false}>
                            <ListItemIcon>
                                <PhoneIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText
                                primary="+91 99123 99400"
                            />
                        </ListItem>
                        <ListItem dense={true}>
                            <ListItemIcon>
                                <BusinessIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText
                                primary="LTC - 206, SASTRA Deemed University, Thirumalaisamudram, Thanjavur - 613401"
                            />
                        </ListItem>
                    </List>
                </div>

                <div className='ContactRight'>
                    <a href='https://shorturl.at/adjlY' target='_blank' rel='noreferrer'>
                        <img src={Map} className='mapImage' alt='Not Found'/>
                    </a>
                </div>
                
            </div>
        </div>  
    );
}

export default Contact;
