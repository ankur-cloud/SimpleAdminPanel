import './newProduct.css'
import React from 'react'

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New User</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type='file' id='file' />
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type='text' placeholder='Gaming Laptop' />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type='text' placeholder='98565xxx' />
                </div>

                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active" className="addProductSelect">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
