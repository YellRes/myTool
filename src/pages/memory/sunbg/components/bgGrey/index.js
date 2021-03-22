import React, {useEffect, useRef} from 'react'
import {BgContainer} from '../../../components/index.js'
import bgGrey from '../../../../../assests/doctorS2.jpg'
import './index.css'


const BgGrey = () => {
  let myCanvas = useRef(null)
  let listenerCanvas = showCanvas.bind(this, myCanvas)

  function showCanvas (myCanvas) {

    let ctx = myCanvas.current.getContext("2d")
    myCanvas.current.width = window.innerWidth
    myCanvas.current.height = window.innerHeight

    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    var clearColor = 'rgba(0, 0, 0, .1)'

    // 随机
    function random(min, max) {
      return Math.random() * (max - min) + min
    }

    // 雨滴
    function RainDrop() {}

    function isTopAndRight() {
      if (Math.random() > .5) {
        return [Math.random() * w, 0]
      }  else {
        return [w, Math.random() * h]
      }
    }

    RainDrop.prototype = {
      init: function() {
        [this.x, this.y] = isTopAndRight()
        this.color = 'hsl(180, 100%, 50%)'
        this.ys = Math.random() * 5 - 10
        this.hit = random(h * .8, h * .9)
      },
      draw: function() {
        if (this.y < this.hit) {
          ctx.strokeStyle = this.color
          ctx.beginPath();
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(this.x + this.ys, this.y - this.ys)
          ctx.stroke()
        }
        this.update()
      },
      update: function() {
        if (this.y < h - 10) {
          this.x += this.ys
          this.y -= this.ys
        } else {
          this.init()
        }
      }
    }

    let rainDrops = []

    for (let i = 0; i < 200; i++) {
      let r = new RainDrop()
      r.init()
      rainDrops.push(r)
    }

    function anim(ctx) {
      console.log(ctx, 'ctx is here')
      ctx.clearRect(0, 0, w, h)


      for (let i = 0; i < rainDrops.length; i++) {
        ctx.fillStyle = clearColor
        rainDrops[i].draw()          
      }
      
      requestAnimationFrame(anim.bind(this, ctx))

    }

    anim(ctx)
  }

  useEffect(() => {
    showCanvas(myCanvas)

    window.addEventListener('resize', listenerCanvas)

    return () => {
      window.removeEventListener('resize', listenerCanvas)
    }
  }, [])

  return (
    <BgContainer imgUrl={bgGrey}>
      <canvas ref={myCanvas} ></canvas>
    </BgContainer>
  )
}

export default BgGrey

