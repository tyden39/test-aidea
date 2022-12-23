import React, { useRef, useState } from 'react'
import './index.css'

const Input = (props) => {
  const {clearable, onChange, value} = props
  const ref = useRef()
  const [inputFocus, setInputFocus] = useState(false)

  const handleClear = () => {
    onChange({target: {value: ''}})
    ref.current.focus()
  }

  const handleInputClick = () => {
    ref.current.focus()
    setInputFocus(true)
  }

  const handleBlur = () => {
    setInputFocus(false)
  }

  return (
    <div className={`input ${inputFocus ? 'input--focus' : ''}`} onClick={handleInputClick}>
      <div className="input__prefix-icon"><i className="gg-search"></i></div>
      <input ref={ref} {...props} onBlur={handleBlur}/>
      {clearable && value && <div className='input__clear' onClick={handleClear}></div>}
    </div>
  )
}

export default Input