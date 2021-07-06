import React from 'react'
import './home.css'
import FeaturedInfo from './../components/featuredinfo/FeaturedInfo';
import Chart from './../components/chart/Chart';
import { userData } from '../dummy';
import WidgetSm from './../components/WidgetSm/WidgetSm';
import WidgetLg from './../components/WidgetLg/WidgetLg';

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics of Analytics' grid dataKey='Active User' />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;
