import './newUser.css'
import React from 'react'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type='text' placeholder='Ankur' />
                </div>
                <div className="newUserItem">
                    <label>FullName</label>
                    <input type='text' placeholder='Ankur Srivastava' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type='email' placeholder='ankur@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type='password' placeholder='-*****65' />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type='number' placeholder='0000033333' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type='text' placeholder='Bangalore' />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type='radio' name='gender' id='male' value='male' />
                        <label htmlFor='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' />
                        <label htmlFor='female'>Female</label>
                        <input type='radio' name='gender' id='others' value='others' />
                        <label htmlFor='others'>Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
