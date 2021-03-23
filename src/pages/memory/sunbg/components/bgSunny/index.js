import React from 'react'
import {BgContainer} from '../../../components/index.js'
import bgGrey from '../../../../../assests/doctorCY.png'
import './index.css'

const BgSunny = () => {
  return (
    <BgContainer imgUrl={bgGrey}>
      <div className='sun'>
        <div className='sunny'></div>
      </div>
    </BgContainer>
  )
} 

export default BgSunny
