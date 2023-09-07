import React, { useEffect, useState } from 'react'
import { InputBox } from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
export default function App() {
  const [amount, setamount] = useState(0)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState()
  const CurrencyInfo = useCurrencyInfo(from)
  if (CurrencyInfo) {
    var option = Object.keys(CurrencyInfo)
  }
  console.log('(From: '+ from + ') (To ' + to + ')')
  let convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to])
  }
  return (
    <>
      <div className=' w-full h-screen bg-yellow-600'>
        <div className='border-2 border-red-700 w-[50%] mx-auto p-2'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <InputBox
                label='From'
                amount={amount}
                onAmountChange={(amount) => setamount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOption={option}
              ></InputBox>
            </div>
            <div>
              <InputBox
                label='To'
                currencyOption={option}
                selectCurrency={from}
                onCurrencyChange={(currency) => setTo(currency)}
              ></InputBox>
            </div>
            <button onClick={() => convert()} className=' bg-blue-700 rounded-lg p-6'>Conveted USD to PKR {convertedAmount}</button>
          </form>
        </div>
      </div>

    </>
  )
}
