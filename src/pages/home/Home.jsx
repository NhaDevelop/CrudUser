import React from 'react'
import './home.css'
import Chart from '../../component/chart/Chart'
import Featuredinfo from '../../component/featuredinfo/Featuredinfo'
import { userdata } from '../../dummyData'
import WidgetSm from '../../component/widgetSm/WidgetSm'
import WidgetLg from '../../component/widgetLg/WidgetLg'
export default function Home() {
  return (
    <div className='home'>
     <Featuredinfo></Featuredinfo>
     <Chart data={userdata} title="User Analytics " grid dataKey="Active User"/>
     <div className='homeWidgets'>
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
     </div>
    </div>
  )
}
