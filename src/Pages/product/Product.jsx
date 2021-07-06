import './product.css'


import React from 'react'
import { Link } from 'react-router-dom';
import Chart from './../../components/chart/Chart';
import { productdata } from '../../dummy';
import { Publish } from '@material-ui/icons';

const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle"></h1>
                <Link to='/newproduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>



            <div className="productTop">

                <div className="productTopLeft">
                    <Chart data={productdata} dataKey='sales' title='Sales Performance' />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://source.unsplash.com/800x450/?laptop" alt="" className="productInfoImage" />
                        <span className="productName">Good Laptop</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales</span>
                            <span className="productInfoValue">11223</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>


                </div>

            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Gaming Laprop' />
                        <label htmlFor="">Product Name</label>
                        <select name='inStock' id='inStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://source.unsplash.com/800x450/?car" alt="" className="productUploadImage" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{ display: 'none' }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Product
