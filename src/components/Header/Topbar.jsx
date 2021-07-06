import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className="logo">Ankur Srivastava Admin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <SettingsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src='https://source.unsplash.com/800x450/?nature,water' className="topAvatar" />

                </div>

            </div>

        </div>
    )
}

export default Topbar;
