import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  console.log('app')
  const [length, setLength] = useState("20")
  const [numberAlow, setNumberAlow] = useState(false)
  const [operaterAlow, setOperaterAlow] = useState(false)
  const [password, setPassword] = useState("t")

  const Passwordref = useRef(null)

   let PasswordGerator = useCallback(
    () => {
      console.log('callback')
      let pass = ""
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numberAlow){
        str += '0123456789'
      }
      if(operaterAlow){
        str += '!@#$%^&*)(|<>'
      }
      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        setPassword(pass)
      }

    },
    [length,numberAlow,operaterAlow],
  )
  let passwordRefFuc= useCallback(
    () => {
      console.log('passwordReffFuc')
      Passwordref.current.select()
      window.navigator.clipboard.writeText(password)
    },
    [password],
  )
  
  useEffect(() => {
    PasswordGerator()
  
  }, [length,numberAlow, operaterAlow])

  return (

    <>
      <div className='bg-black h-screen text-white'>
        <p className='text-2xl text-center'>Hello World</p>
        <div className='border border-white w-1/3 mx-auto bg-orange-700 text-center p-5 m-8'>
          <input ref={Passwordref} value={password} placeholder="Passoword.." readOnly className='text-black rounded-l-lg w-60' type="text" name="" id="" />
          <button className='border border-black bg-red-600 rounded-r-lg' onClick={()=>passwordRefFuc()}>Copy</button>
          <div className='text-black space-x-2 m-4'>
            <input type="range"
             value={length} name=""
             onChange={(e) => setLength(e.target.value)}
             /><span className="text-xl
             text-green-800">{length}</span>

            <label htmlFor="f">Number</label>
            <input defaultChecked={numberAlow}
             onChange={()=>setNumberAlow((Prev)=> !Prev)}
             type="checkbox"
             id="f" />

            <label htmlFor="l">Chracter</label>
            <input type="checkbox"
             onChange={()=>setOperaterAlow((Prev)=>!Prev)}
             name="" id="l" />
          </div>
        </div>
      </div>
    </>

  )
}
export default App

// const copyPasswordToClipboard = useCallback(() => {
//   passwordRef.current?.select();
//   passwordRef.current?.setSelectionRange(0, 999);
//   window.navigator.clipboard.writeText(password)
// }, [password])