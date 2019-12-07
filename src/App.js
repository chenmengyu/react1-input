import React, {useState} from 'react';
import './App.css';
import InputNumber from './InputNumber.js'

function App(){
  const [value,setValue] = useState('aaa')
  return (
    <div>
    <InputNumber value={value} onChange={e=>{setValue(value)}}/>
    <InputNumber defaultValue={value} onChange={e=>{setValue(value)}}/>
    </div>
  )
}
export default App;
