import React, {useRef, useEffect} from 'react';
import bg from '../../assests/doctorS2.jpg'
import cy from '../../assests/doctorCY.png'
import './can.css'

const CanvasImg = () => {

  useEffect(() => {
    let ctx = myCanvas.current.getContext('2d')
    let img = new Image()
    img.src = bg
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.clip() 
      // ctx.fillStyle = '#fff'
      ctx.fillRect(100, 0, 300, 300)
    }
  })

  let myCanvas = useRef(null)

  return (
    <div className="d">
      <img src={cy} width={'400'} height={'300'} className="d_img"></img>
      <canvas ref={myCanvas} width={'400'} height={'300'}></canvas>
    </div>
  )
}

export default CanvasImg