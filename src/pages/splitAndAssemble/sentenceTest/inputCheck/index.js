import React, {useState} from 'react';

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
// 打乱字符串 结束

const InputCheck = ({sentence}) => {
  let [value, setValue] = useState('')

  const onInputChange = (e) => {
    setValue(e.event.value)
  }

  return (
    <>
      <p>{config(sentence)}</p>
      <input onChange={onInputChange}/>
      <div class="input_result">

      </div>
    </>
  )
}

export default InputCheck
