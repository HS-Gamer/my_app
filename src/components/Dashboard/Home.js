import React from 'react'
import "./Home.css"
import FeaturedInf from './FeaturedInf';
import Chart from './Chart'
import {data} from './ChartData'
export default function 
Home() {
    return (
        <div className="home">
            <FeaturedInf />
            <Chart data={data} title ="Account Activity" grid dataKey="Y" />
        </div>
    )
}

