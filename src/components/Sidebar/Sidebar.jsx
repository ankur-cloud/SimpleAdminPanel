import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person'; import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MessageIcon from '@material-ui/icons/Message';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ReportIcon from '@material-ui/icons/Report';
import { Storefront } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>

                    <ul className='sidebarList'>
                        <Link className='link' to='/'>

                            <li className="sidebarListItem">
                                <LineStyleIcon className='sidebarIcon' />
                                Home
                            </li>
                        </Link>

                        <Link className='link' to='/analytics'>

                            <li className="sidebarListItem">
                                <TimelineIcon className='sidebarIcon' />
                                Analytics
                            </li>
                        </Link>

                        <Link className='link' to='/sales'>

                            <li className="sidebarListItem">
                                <TrendingUpIcon className='sidebarIcon' />
                                Sales
                            </li>
                        </Link>

                    </ul>





                </div>



                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>

                    <ul className='sidebarList'>
                        <Link className='link' to='/users'>
                            <li className="sidebarListItem">
                                <PersonIcon />
                                Users
                            </li>
                        </Link>
                        <Link className='link' to='/products'>

                            <li className="sidebarListItem">
                                <Storefront />
                                Products
                            </li>
                        </Link>
                        <Link className='link' to='/transactions'>

                            <li className="sidebarListItem ">
                                <AccountBalanceIcon />
                                Transactions
                            </li>
                        </Link>
                        <Link className='link' to='/reports'>

                            <li className="sidebarListItem ">
                                <AssessmentIcon />
                                Reports
                            </li>
                        </Link>

                    </ul>
                </div>





                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>

                    <ul className='sidebarList'>
                        <Link className='link' to='/mail'>

                            <li className="sidebarListItem">
                                <MailIcon />
                                Mail
                            </li></Link>
                        <Link className='link' to='/feedback'>
                            <li className="sidebarListItem">
                                <FeedbackIcon />
                                Feedback
                            </li></Link>
                        <Link className='link' to='/messages'>
                            <li className="sidebarListItem ">
                                <MessageIcon />
                                Messages
                            </li></Link>
                    </ul>
                </div>





                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>

                    <ul className='sidebarList'>
                        <Link className='link' to='/manage'>

                            <li className="sidebarListItem">
                                <BusinessCenterIcon />
                                Manage
                            </li></Link>
                        <Link className='link' to='/analytics'>
                            <li className="sidebarListItem">
                                <TimelineIcon />
                                Analytics
                            </li></Link>
                        <Link className='link' to='/reports'>
                            <li className="sidebarListItem ">
                                <ReportIcon />
                                Reports
                            </li></Link>
                    </ul>
                </div>



            </div>



        </div>








    )
}


export default Sidebar
