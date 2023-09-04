import { useState } from 'react'
import { getDatabase,ref,push,set } from "firebase/database";
import './App.css'
function App() {
  const [state, setState] = useState({
    Name: "",
    Message: ""
  })
  const [chat, setChat] = useState([{ Name: "zain", Message: 'Hi! I am zain hare....' },
  { Name: "suhan", Message: 'Hi! I am subhan hare....' }, { Name: "me", Message: 'Walikum.....' }])

  const db = getDatabase();

  let handleSand = () => {
    console.log(state)
    const chatListRef = ref(db, 'chat');
    const chatRef = push(chatListRef);
    set(chatRef, {
      ...state
      // ...
    });
    setChat([...chat,
      state
    ])

  }

  let handleChange = (e) => {
    setState(
      {
        ...state,
        // Name: 'me',
        Name: 'me',
        [e.target.name]: e.target.value
      }
    )


  }
  return (
    <>
      <div className='text-black w-screen h-screen bg-slate-400 relative'>
        <label htmlFor="l">Name:</label>
        <input type="text" onChange={handleChange} name="Name" id="l" />
        {
          chat.map(value => <div className={`border border-black flex ${value.Name == 'me' ? 'flex-row-reverse text-red-800' : " "}`}>
            <p className='border border-red-700 rounded p-3 max-w-xs  bg-blue-600 m-2'><strong>Name:{value.Name}</strong>
              {value.Message}
            </p>

          </div>)
        }
        <div className='bottom-0 absolute'>
          <label htmlFor="f">Message: </label>
          <input onChange={handleChange} type="text" name="Message" id="f" />
          <button onClick={handleSand}>sand</button>
        </div>
      </div>

    </>
  )
}

export default App
