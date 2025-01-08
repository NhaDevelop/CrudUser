import React from 'react'
import "./featured.css"
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revanue</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney' >$2.153</span>
                <span className='featuredMoneyRate'> -11.4   <ArrowDownwardRoundedIcon className='featuredIcon negative'/>
                 </span>
            </div>
             <span className='featuredSub'> Compare to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>sales</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney' >$2.153</span>
                <span className='featuredMoneyRate'> -11.4   <ArrowDownwardRoundedIcon className='featuredIcon negative'/>
                 </span>
            </div>
             <span className='featuredSub'> Compare to last month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Cost</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney' >$2.153</span>
                <span className='featuredMoneyRate'> 1.4   <ArrowUpwardRoundedIcon  className='featuredIcon'/>
                 </span>
            </div>
             <span className='featuredSub'> Compare to last month</span>
        </div>
      
    </div>
  )
}
