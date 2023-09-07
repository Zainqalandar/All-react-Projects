import React from 'react'

export const InputBox = ({ 
    label,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyOption = [],
    amount
 }) => {
    console.log(selectCurrency)
    return (
        <>
            <div className='flex justify-center border-2 border-red-800 bg-green-500 my-3'>
                <div className=' bg-slate-400 text-center flex flex-col border-2 border-red-800'>
                    <label htmlFor="">{label}</label>
                    <input 
                    value={amount} 
                    onChange={(e)=> onAmountChange && onAmountChange(e.target.value)} 
                    type="number" />
                </div>
                <div className='border-2 border-red-800 flex flex-col'>
                    <p>Currency Type</p>
                    <select name=""
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                     id="">
                        {
                            currencyOption.map(currency=><option key={currency} value={currency}>
                            {currency}
                        </option>)
                        }
                    </select>
                </div>
            </div>
        </>
    )
}
