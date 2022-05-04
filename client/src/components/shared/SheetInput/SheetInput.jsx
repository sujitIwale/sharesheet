import React,{useState} from 'react'
import './SheetInput.css'

const SheetInput = ({rowIndex,columnIndex,value}) => {
    const [Value, setValue] = useState(value ? value : '')

    const changeHandler = (e) => {
        setValue(e.target.value)
    }
  return (
    <input type='text' className='sheet-input' value={Value} onChange={changeHandler}/>
  )
}

export default SheetInput