import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { userrows as rows } from '../../dummy'


const UserList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter((dil, idx) => dil.id !== id))
    }

    const columns = [

        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'userName', headerName: 'Username', width: 190, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img src={params.row.avatar} alt='' className='userListImage' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 230 },
        {
            field: 'age',
            headerName: 'Age',
            width: 90,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={'/user/' + params.row.id}>
                            <button className='userListEdit'>Edit
                            </button>
                        </Link>

                        <DeleteOutlineIcon className='userListDelete' color='secondary' cursor='pointer' onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        },
    ];


    return (
        <div className='userList'>
            <DataGrid rows={data} columns={columns} pageSize={15} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default UserList
