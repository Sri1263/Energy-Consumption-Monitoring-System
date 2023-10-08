import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='bannerBG'>
            <center>
            <div className='bannerHead'>
            Energy Monitoring System
            </div>
            <div className='bannerParagraph'>
            Welcome to our IoT-powered Energy Consumption Monitoring System! Track electricity usage across our university's various facilities in real-time, promoting efficient energy management and sustainability.
            </div>
            <div className='bannerCardHolder'>
                <div className='bannerCard'>
                    <div className='BannerCardImage'>
                        <img src='https://www.energyly.com/assets/images/icons/installation.png' alt='Image Not Found'/>
                    </div>
                    <h3 className='bannerCardTitle'>Installation</h3>
                    <p>Simple, easy to use and installation time of less than 30 minutes</p>
                </div>
                <div className='bannerCard'>
                    <div className='BannerCardImage'>
                        <img src='https://www.energyly.com/assets/images/icons/config.png' alt='Image Not Found'/>
                    </div>
                    <h3 className='bannerCardTitle'>Configuration</h3>
                    <p>User defined settings for all equipment limits & priority based alert</p>
                </div>
                <div className='bannerCard'>
                    <div className='BannerCardImage'>
                        <img src='https://www.energyly.com/assets/images/icons/monitor.png' alt='Image Not Found'/>
                    </div>
                    <h3 className='bannerCardTitle'>Monitoring</h3>
                    <p>24x7 Real-time energy usage availability via web dashboard & mobile app</p>
                </div>
                <div className='bannerCard'>
                    <div className='BannerCardImage'>
                        <img src='https://www.energyly.com/assets/images/icons/notification.png' alt='Image Not Found'/>
                    </div>
                    <h3 className='bannerCardTitle'>Notifications</h3>
                    <p>Alert users of energy spikes & critical data via SMS, e-mail & Push</p>
                </div>
            </div>
            </center>
        </div>
    );
}

export default Banner;
