import React, {useState} from 'react';


// 打乱字符串 结束

const InputCheck = ({sentence, randomSentence}) => {
  let [value, setValue] = useState('')
  let [isCorrect, setIsCorrect] = useState(false)

  const onInputChange = (e) => {
    const value = e.target.value

    setValue(value)
    value.trim() === sentence.trim() && setIsCorrect(true)
    value.trim() !== sentence.trim() && setIsCorrect(false)

  }

  return (
    <>
      {randomSentence}
      <br></br>
      <textarea value={value} onChange={onInputChange}/>
      <div className="input_result" >
        {isCorrect ? '正确✔': '错误❌' }
      </div>

    </>
  )
}

export default InputCheck
