import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("blue")
  return (
    <>
    <div className='border-2 relative border-black text-center h-screen' style={{ background: color }}>
    <h1 className='text-6xl rounded-lg border-2 border-red-600 w-1/3 mx-auto bg-white p-5' style={{ color: color }}>{color}</h1>
    <div className=' border-2 left-1/4 border-red-800 absolute bottom-5 w-1/2 bg-slate-400 p-3 rounded flex justify-center space-x-5'>
      <button type="button" className="btn bg-green-800 hover:bg-green-400" onClick={() => setColor('green')}>Green</button>
      <button type="button" className="btn bg-red-800 hover:bg-red-400" onClick={() => setColor('red')}>Red</button>
      <button type="button" className="btn bg-gray-800 hover:bg-gray-400" onClick={() => setColor('gray')}>Gray</button>
      <button type="button" className="btn bg-yellow-800 hover:bg-yellow-400" onClick={() => setColor('yellow')}>Yello</button>
    </div>
  </div>
    </>
  )
}

export default App
