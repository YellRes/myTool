import React, { useState, memo} from 'react'
import bg from '../../../../assests/doctorCY.png'
import {connect} from 'react-redux'
import * as imgReducer from './reducer'
import './index.less'

const {actionType, actions} = imgReducer
const arr = Array(8).fill()

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
        arr.map( (_, index) => (
          
            selectedIndexArr.includes(index) 
            ? <div key={index} className={`clip_item_item item_${index} `} style={bgObj}></div> 
            : <div key={index} className={`clip_item_item`}></div>
          
        ))
      }

    </div>
  )   
}

const mapStateToPropsClipImgItem = (state) => {
  return {
    selectedIndexArr: state.clipImg
  }
} 

const ConnectedClipImgItem = connect(mapStateToPropsClipImgItem, null)(ClipImgItem)

// 键盘单个 按钮 1 ~ 8
const KeyBoardItem = (props) => {
  const {
    value,
    selected,
    addSelectedArr,
    deleteSelectedArr
  } = props

  const changeSelectedArr = (val) => {
    !selected && addSelectedArr(val)
    selected && deleteSelectedArr(val)
  }

  return (
    <div 
      className={`keyboard_item ${selected ? 'selected_orange' : ''} `} 
      onClick={() => changeSelectedArr(value)}>
      {value}
    </div>
  )
} 
// const KeyBoardItemMemo = memo(KeyBoardItem)


// 键盘
// 数组变化 每次都要重新渲染一遍 所有的组件
const KeyBoard = (props) => {

  const {selectedIndexArr, deleteSelectedArr, addSelectedArr} = props

  console.log(deleteSelectedArr);
  console.log(addSelectedArr);

  return (
    <div className={'keyboard_con'} >
      {
        arr.map((item, index) => (
          <KeyBoardItem
            key={index}
            selected={selectedIndexArr.includes(index)}
            value={index}
            deleteSelectedArr={deleteSelectedArr}
            addSelectedArr={addSelectedArr}
            />
        ))
      }
    </div>
  )

}
// const KeyBoardMemo = memo(KeyBoard)

const mapStateToPropsKeyBoard = (state) => {
  return {
    selectedIndexArr: state.clipImg
  }
} 

const mapDispatchToPropsKeyBoard = (dispatch) => {
  return {
    addSelectedArr: (val) => {
      dispatch(actions.addImgArr(val))
    },
    deleteSelectedArr: (val) => {
      dispatch(actions.deleteImgArr(val))
    }
  }
} 

const ConnectedKeyBoard = connect(mapStateToPropsKeyBoard, mapDispatchToPropsKeyBoard)(KeyBoard)

const ClipImg = () => {

  // let [imgSelected, setImgSelect] = useState([])

  // const setSelect = (value) => {
  //   console.log(value, 'value')
  //   if (imgSelected.includes(value)) {

  //     return setImgSelect(imgSelected.filter(item => item !== value))
  //   } else {
  //     setImgSelect([...imgSelected, value])
  //   }
    
    
  // }
  
  return (
    <>
      <ConnectedClipImgItem
        imgUrl={bg}/>

      <ConnectedKeyBoard />

    </>
  )
}

export default ClipImg 