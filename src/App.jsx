import { useEffect, useState } from 'react'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import './App.css'
function App() {
  console.log('app')
  const [name, setName] = useState('Qalandar')
  const [chat, setChat] = useState([{ Name: "zain", Message: 'Hi! I am zain haree....' }, { Name: "suhan", Message: 'Hi! I am subhan hare....' }])
  const [mess, setMess] = useState('')
  const db = getDatabase();
  const ChatListRef = ref(db, 'CHAT');
  
  useEffect(() => {
    onChildAdded(ChatListRef, (data) => {
      setChat((chat) => [...chat, data.val()]);
    });

  }, [])

  let SendChat = () => {
    const ChatRef = push(ChatListRef);
    set(ChatRef, {
      Name: name, Message: mess
      // ...
    });


  }

  return (
    <>
      <div className='text-black w-screen h-screen bg-slate-400 relative'>
        <h1 className='text-4xl'>Name: {name}</h1>
        <label htmlFor="l">Name:</label>
        <input type="text" onBlur={e => setName(e.target.value)} name="Name" id="l" />
        {
          chat.map((value, i) => <div key={i} className={`border border-black flex ${value.Name == 'me' ? 'flex-row-reverse text-red-800' : " "}`}>
            <p className='border border-red-700 rounded p-3 max-w-xs  bg-blue-600 m-2'><strong>{value.Name}</strong>
              {value.Message}
            </p>
          </div>)
        }
        <div className='bottom-0 absolute'>
          <label htmlFor="f">Message: </label>
          <input onInput={e => setMess(e.target.value)} type="text" value={mess} name="Message" id="f" />
          <button onClick={e => SendChat()}>sand</button>
        </div>
      </div>

    </>
  )
}

export default App
