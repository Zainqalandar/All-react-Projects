import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
}) {

    const amoutInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex border-2 border-red-700`}>
            <div className="w-1/2 border-2 border-red-700">
                <label className="text-black/40 mb-2 inline-block"
                    htmlFor={amoutInputId}
                >
                    {label}
                </label>
                <input
                    id={amoutInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right border-2 border-red-700">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={() => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        currencyOption.map((currency) => <option value={currency}>
                            {currency}
                        </option>
                        )
                    }

                </select>
            </div>
        </div>
    );
}

export default InputBox;