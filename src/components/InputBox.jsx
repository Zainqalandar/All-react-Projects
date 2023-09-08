import React from 'react'

export default function InputBox({
    label,
    currencyOptions,
    onAmountChange,
    defaultCurrency,
    onCurrencyChange,
    amout
}) {
    console.log(amout)
    return (
        <>
            <div className='flex justify-center border-2 border-green-800 ml-2'>
                <div className=' border border-red-700 rounded-l-lg bg-yellow-500 p-2'>
                    <label htmlFor="">{label}</label><br />
                    <input 
                    type="number"
                    value={amout}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                     />
                </div>
                <div className=' border border-red-700 rounded-r-lg bg-yellow-500 p-2'>
                    <p>Currency Type</p>
                    <select name=""
                    value={defaultCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                     id="">
                        {currencyOptions.map(currency=><option key={currency} value={currency}>
                            {currency}
                        </option>)}
                    </select>
                </div>
            </div>
        </>
    )
}
