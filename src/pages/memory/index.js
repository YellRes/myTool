import React, {useRef, useEffect} from 'react';

const MyCanvas = () => {
  const canvasEl = useRef(null) 
  // 随机的生成canvas
  // x [0, 400]
  // y [0, 250]
  const randonCanvas = (pathx, type) => {
    let [randomX, randomY] = randomPoint(400, 250)
    let [randomX2, randomY2] = randomPoint(400, 250)
    let [randomX3, randomY3] = randomPoint(400, 250)

    pathx.moveTo(randomX, randomY)
    pathx.quadraticCurveTo(randomX3, randomY3, randomX2, randomY2)
    pathx.lineTo(randomX2, randomY2)
    if (type == 1) {
      pathx.lineTo(0, 250)
      pathx.lineTo(0, 0)
    } else {
      pathx.lineTo(400, 0)
      pathx.lineTo(400, 250)
    }

    return pathx
    
  }

  const randomPoint = (width, height) => {
    return [pointUtil(Math.random() * width) , pointUtil(Math.random() * height)]
  }

  const pointUtil = (val) => {
    return Math.floor(val)
  }


  
  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d')
    let path1 = new Path2D()
    let path2 = new Path2D()


    setInterval(() => {
      // path1 = randonCanvas(path1, 1)
      // path2 = randonCanvas(path2, 2)
  
      // ctx.fillStyle = '#FF7F5C'
      // ctx.strokeStyle = '#FF7F5C'
      // ctx.fill(path1)
  
      // ctx.fillStyle = '#FFD2F0'
      // ctx.fill(path2)
    }, 1000)


    // ctx.stroke()

  })
  return (
    <>
      <canvas ref={canvasEl} width="400" height="250" style={{border: '1px solid #ededed', background: '#5C31A0'}} >
      </canvas>
    </>
  )
}

export default MyCanvas 