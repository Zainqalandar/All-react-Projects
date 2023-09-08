import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency'

export default function App() {
  const [amout, setAmout] = useState(1)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setconvertedAmount] = useState()
  const usecurrency = useCurrency(from)
  const option = Object.keys(usecurrency)
  console.log(usecurrency)
  console.log(option)
  let conver=()=>{
    setconvertedAmount(amout * usecurrency[to])
  }
  // console.log(convertedAmount)
  console.log('From:'+ from +' To '+ to)
  let swap=()=>{
    setFrom(to)
    setTo(from)
    setAmout(convertedAmount)
    setconvertedAmount(amout)
  }

  return (
    <>
    <div className='border-2 border-black w-full h-screen'>
      <div className='border-2 border-red-400 w-1/3 mx-auto my-9 relative'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className=' my-6'>
            <InputBox
            label='From'
            currencyOptions={option}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amout)=>setAmout(amout)}
            amout={amout}
            defaultCurrency={from}
            ></InputBox>
          </div>
            <button className=' bg-red-700 p-3 rounded-full absolute  left-1/2 top-20'  onClick={()=>swap()}>Swap</button>
          <div className=' my-6'>
            <InputBox
            currencyOptions={option}
            label='To'
            defaultCurrency={to}
            amout={convertedAmount}
            onCurrencyChange={(currency)=>setTo(currency)}
            ></InputBox>
          </div>
          <button className=' bg-blue-700 p-5 rounded-lg  ml-[30%]' onClick={conver}>Convert USD to PKR</button>
        </form>
      </div>
    </div>
    </>
  )
}

