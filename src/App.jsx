import { useState } from 'react'
import './App.css'
import Buttons from './Components/Buttons'
function App() {
  const [value, setValue] = useState("")
  const [calculate, setCalculate] = useState("")
  let handleClick = (e) => {
    setValue(value + e.target.textContent)
  }
  let handleClickOperater = (e) => {
    setValue(value + e.target.textContent)
  }
  let handleCalculate = () => {
    try {
      setCalculate(eval(value))
    
    } catch (error) {
      if(calculate){
        setCalculate('')
      }
      setTimeout(() => {
        setCalculate('Syntax Erore.... ')
        
      }, 1000);
      
    }
    setValue('')
   
  }
  let handleClear = () => {
    if (value) {
      setValue("")
    }
    else {
      setCalculate('')
    }
  }
  return (
    <>
      <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen w-screen pt-6'>
        <h1 className='border border-black text-center text-7xl mb-4 text-green-800 p-2 '>Calculator</h1>
        <Buttons handleClear={handleClear} value={value} calculate={calculate} handleClick={handleClick} handleClickOperater={handleClickOperater} handleCalculate={handleCalculate}></Buttons>
      </div>
    </>
  )
}

export default App
