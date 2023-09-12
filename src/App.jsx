import React, { useCallback, useEffect, useRef, useState } from 'react'
function App() {
  const [value, setValue] = useState(10)
  const [password, setPassword] = useState()
  const [number, setNumber] = useState(false)
  const [operater, setOperater] = useState(false)
  let MyRef = useRef(null)

  let MyCopy = useCallback(
    () => {
      MyRef.current.focus()
      MyRef.current.select()
      window.navigator.clipboard.writeText(password)
    }, [password],)
  let PasswordGerate = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (number) {
        str += "0123456789"
      }
      if (operater) {
        str += "!@#$%^&*()?><,."
      }
      for (let i = 0; i < value; i++) {
        var random = Math.floor(Math.random() * str.length)
        pass += str.charAt(random)
      }
      setPassword(pass)
    }, [value, number, operater])

  useEffect(() => {
    PasswordGerate()

  }, [value, number, operater])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <input
        type="text"
        ref={MyRef}
        value={password}
      />
      <button
        onClick={() => MyCopy()}>Copy</button><br
      />
      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor=""
      >Number</label>
      <input
        type="checkbox"
        value={number}
        onChange={() => setNumber((prev) => !prev)} name="" id=""
      />
      <label htmlFor="">Operater</label>
      <input
        type="checkbox"
        value={operater}
        onChange={() => setOperater((prev) => !prev)} name="" id="" />
    </div>


  )
}

export default App