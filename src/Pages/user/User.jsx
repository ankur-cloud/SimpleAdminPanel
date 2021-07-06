import React from 'react'
import './user.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { CalendarToday, CalendarTodayOutlined, LocationSearching, Mail, MailOutline, PhoneAndroid, } from '@material-ui/icons';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';
const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>

            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://source.unsplash.com/400x225/?polarbear" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Ankur Srivastava </span>
                            <span className="userShowUserTitle">Web Developer</span>
                        </div>
                    </div>

                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">akrsvr</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayOutlined className='userShowIcon' />
                            <span className="userShowInfoTitle">December</span>
                        </div>
                        <span className="userShowTitle">Contact  Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">6767552644</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">ankur@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Bangalore</span>
                        </div>
                        <div className="userShowInfo">
                            <Mail className='userShowIcon' />
                            <span className="userShowInfoTitle">Alternate Mail:ankur@gmail.com</span>
                        </div>


                    </div>
                </div>
                {/* //right side  */}

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="" className="userUpdateLabel">UserName</label>
                                <input type='text' placeholder='ankur99' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label htmlFor="" className="userUpdateLabel">FullName</label>
                                <input type='text' placeholder='ankur99' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label htmlFor="" className="userUpdateLabel">Email</label>
                                <input type='email' placeholder='ankur@email.com' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label htmlFor="" className="userUpdateLabel">Phone Number</label>
                                <input type='number' placeholder='99887466221146' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label htmlFor="" className="userUpdateLabel">Address</label>
                                <input type='text' placeholder='Bangalore' className='userUpdateInput' />
                            </div>


                            <div className="userUpdateItem">
                                <label htmlFor="" className="userUpdateLabel">Additional Email</label>
                                <input type='email' placeholder='ankur@email.com' className='userUpdateInput' />
                            </div>


                            {/* ************************************ */}

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://source.unsplash.com/400x225/?polarbear" alt="" className="userUpdateImg" />
                                <label htmlFor="" className="d"><PublishIcon cursor='pointer' /></label>
                                <input type="file" className="userUpload" id='file' style={{ display: 'none' }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}
export default User
