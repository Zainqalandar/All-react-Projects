import React from 'react'

export default function InputBox({
    currencyOptions
}) {
    return (
        <>
            <div className='flex justify-center border-2 border-green-800'>
                <div className=' border border-red-700 rounded-l-lg bg-yellow-500 p-2'>
                    <label htmlFor="">lable</label><br />
                    <input type="number" name="" id="" />
                </div>
                <div className=' border border-red-700 rounded-r-lg bg-yellow-500 p-2'>
                    <p>Currency Type</p>
                    <select name="" id="">
                        {currencyOptions.map(currency=><option key={currency} value="usd">
                            {currency}
                        </option>)}
                    </select>
                </div>
            </div>
        </>
    )
}
