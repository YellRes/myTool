import React from 'react'
import './index.less'
import bg from '../../../../assests/doctorCY.png'

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const ClipImgItem = (props) => {
  const {
    imgUrl,
    selectedIndexArr = []
  } = props

  const bgObj = {
    backgroundImage: `url(${imgUrl})`
  }

  return (
    <div className="clip_img_con"  >
      {
        Array(8).fill().map( (_, index) => (
          
            selectedIndexArr.includes(index) 
            ? <div className={`clip_item_item item_${index} `} style={bgObj}></div> 
            : <div className={`clip_item_item`}></div>
          
        ))
      }

    </div>
  )   
}

const KeyBoardItem = (props) => {
  const {
    value,
    selected
  } = props

  return (
    <div className={`keyboard_item ${selected ? 'selected_orange' : ''} `} >
      {value}
    </div>
  )
} 

// 键盘
const KeyBoard = (props) => {

  const {} = props


  return (
    <div className={'keyboard_con'}>
      {
        arr.map(item => (
          <KeyBoardItem
            onClick={() => {}}
            value={item}/>
        ))
      }
    </div>
  )
}

const ClipImg = () => {

  
  return (
    <>
      <ClipImgItem
        imgUrl={bg}/>


      <KeyBoard/>
    </>
  )
}

export default ClipImg 