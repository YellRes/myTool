import React, {useState} from 'react'
import ButtonInfo from './buttonInfo/index'
import InputCheck from './inputCheck/index' 
import {connect} from 'react-redux'

// 打乱字符串
const sentenceSplit = (sentence = '', format = ' ') => {
  return sentence.split(format)
}

const randomArrElement = (arr = []) => {
  let m = arr.length

  while(m > 1) {
    let index = Math.floor(Math.random() * m)
    console.log(index);
    [arr[m], arr[index]] = [arr[index], arr[m]]
    m--
  }

  return arr
}

const arrToSentence = (arr = []) => {
  return arr.join(' ')
}

const config = (sentence = '') => {
  return arrToSentence(randomArrElement(sentenceSplit(sentence))) 
}

const SplitSentenceTest = ({sentenceArr}) => {
  let [index, setIndex] = useState(0)

  const nextSentence = () => {
    if (index === sentenceArr.length - 1) return

    setIndex(++index)
  }

  const previousSentence = () => {
    if (index === 0 ) return

    setIndex(--index)
  }


  return (
    <>
      打乱后来重组👍
      <br></br>
      <InputCheck 
        sentence={sentenceArr[index].sentence}
        randomSentence={config(sentenceArr[index].sentence)}/>
      <ButtonInfo  
        nextSentence={nextSentence}
        previousSentence={previousSentence}/>

      {/* <div className="input_result" >
        {isCorrect ? '正确✔': '错误❌' }
      </div> */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    sentenceArr: state.sentences || []
  }
}

export default connect(mapStateToProps, null)(SplitSentenceTest)