import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency'

export default function App() {
  const [amout, setAmout] = useState(1)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setconvertedAmount] = useState()
  const usecurrency = useCurrency(from)
  const option = Object.keys(usecurrency)
  console.log(usecurrency)
  console.log(option)
  let conver=()=>{
    setconvertedAmount(amout * useCurrency[to])
  }

  return (
    <>
    <div className='border-2 border-black w-full h-screen'>
      <div className='border-2 border-red-400 w-1/3 mx-auto my-9'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className=' my-6'>
            <InputBox
            currencyOptions={option}
            ></InputBox>
          </div>
          <div className=' my-6'>
            <InputBox
            currencyOptions={option}
            ></InputBox>
          </div>
          <button className=' bg-blue-700 p-5 rounded-lg' onClick={conver}>Convert USD to PKR {convertedAmount}</button>
        </form>
      </div>
    </div>
    </>
  )
}

