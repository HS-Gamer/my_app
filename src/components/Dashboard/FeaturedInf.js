
import React from 'react';
import './featuredInf.css'
import {ArrowDownward , ArrowUpward} from "@material-ui/icons"
export default function FeaturedInf() {
    return (
        <div className="featured">
            <div className="featuredItem">
            <span className="featuredTitle"> Revanue </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2.222</span>

            <span className="featuredMoneyRate">

                -11,4 <ArrowDownward className="featuredIcon negative"/></span>

            </div>
            <span className="featuredSub"> Compared to last month</span>
            </div>

            <div className="featuredItem">
            <span className="featuredTitle"> Sales </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2.222</span>

            <span className="featuredMoneyRate">

                -11,4 <ArrowDownward className= "featuredIcon negative" /></span>

            </div>
            <span className="featuredSub"> Compared to last month</span>
            </div>





            <div className="featuredItem">
            <span className="featuredTitle"> Revanue </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2.222</span>

            <span className="featuredMoneyRate">

                1,4 <ArrowUpward className="featuredIcon"/></span>

            </div>
            <span className="featuredSub"> Compared to last month</span>
            </div>



        </div>


        











    )
}
