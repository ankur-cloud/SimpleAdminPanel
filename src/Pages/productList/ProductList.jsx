


import './productList.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { productrows } from '../../dummy'


const ProductList = () => {
    const [data, setData] = useState(productrows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }



    const columns = [

        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'productname', headerName: 'ProductName', width: 190, renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img src={params.row.image} alt='' className='productListImage' />
                        {params.row.productname}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 230 },

        {
            field: 'status',
            headerName: 'Status',
            width: 100,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={'/product/' + params.row.id}>
                            <button className='productListEdit'>Edit
                            </button>
                        </Link>

                        <DeleteOutlineIcon className='productListDelete' color='secondary' cursor='pointer' onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <div className='productList'>
            <DataGrid rows={data} columns={columns} pageSize={15} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default ProductList





