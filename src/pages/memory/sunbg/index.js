import React from 'react'
import girlF from './assests/fg.png'
import doctorS2 from './assests/doctorS2.jpg'
import './index.css'

const SunBg = () => {
    return (
        <div className="img_container">
            <img src={doctorS2} className="img_width"/>
            <img src={girlF} height="100%"/>
        </div>
    )
}

export default SunBg
