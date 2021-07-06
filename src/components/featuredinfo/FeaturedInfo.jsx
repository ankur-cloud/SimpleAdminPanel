import React from 'react'
import './featuredinfo.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs1000000 </span>
                    <span className="featuredMoneyRate">-11.4268<KeyboardArrowDownIcon color='secondary' style={{ fontSize: '24px', marginLeft: '10px', }} /></span>

                </div>
                <span className="featuredSub">compared to last month</span>
            </div>



            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs1000000 </span>
                    <span className="featuredMoneyRate">-11.4268<KeyboardArrowDownIcon color='secondary' style={{ fontSize: '24px', marginLeft: '10px', }} /></span>

                </div>
                <span className="featuredSub">compared to last month</span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Rs1000000 </span>
                    <span className="featuredMoneyRate">-11.4268<KeyboardArrowUpIcon style={{ fontSize: '24px', marginLeft: '10px', color: 'green' }} /></span>

                </div>
                <span className="featuredSub">compared to last month</span>
            </div>


        </div>
    )
}

export default FeaturedInfo;
