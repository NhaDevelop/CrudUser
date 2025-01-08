import React from 'react'
import "./widget.css"
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

export default function WidgetSm() {
  return (
    <div className='widgetsm'>
        <span className='widgetSmTitle'> New join Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img src="https://via.placeholder.com/150" alt="User Avatar" className="widgetSmImg" />
                <div className='widgetSmUser'>
                    <span className="widgetSmUsername">panha</span>
                    <span className="widgetSmUserTitle"> Web Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityRoundedIcon className='widgetSmIcon' />
                display
                </button>
                
            </li>
            <li className='widgetSmListItem'>
                <img src="https://via.placeholder.com/150" alt="User Avatar" className="widgetSmImg" />
                <div className='widgetSmUser'>
                    <span className="widgetSmUsername">panha</span>
                    <span className="widgetSmUserTitle"> Web Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityRoundedIcon  className='widgetSmIcon'/> display
                </button>
                
            </li>
            <li className='widgetSmListItem'>
                <img src="https://via.placeholder.com/150" alt="User Avatar" className="widgetSmImg" />
                <div className='widgetSmUser'>
                    <span className="widgetSmUsername">panha</span>
                    <span className="widgetSmUserTitle"> Web Developer</span>
                </div>
                <button className='widgetSmButton'>
                <VisibilityRoundedIcon  className='widgetSmIcon' /> display
                </button>
                
            </li>
            <li className='widgetSmListItem'>
                <img src="https://via.placeholder.com/150" alt="User Avatar" className="widgetSmImg" />
                <div className='widgetSmUser'>
                    <span className="widgetSmUsername">panha</span>
                    <span className="widgetSmUserTitle"> Web Developer</span>
                </div>
                <button className='widgetSmButton'> 
                <VisibilityRoundedIcon  className='widgetSmIcon' /> display
                </button>
                
            </li>
        </ul>
    </div>
  )
}
