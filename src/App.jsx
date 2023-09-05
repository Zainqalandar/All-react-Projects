
import { useState, useEffect } from 'react'
import './App.css'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  console.log('app')
  const [name, setName] = useState()
  const [chats, setChats] = useState([])
  const [meg, setMeg] = useState('')

  const database = getDatabase();
  const chatListRef = ref(database, 'CHATs');
  const chatRef = push(chatListRef);

  let updatHeight = () => {
    let el = document.getElementById('scoll')
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }
  document.getElementsByTagName('body')[0].style.background = 'RGB(33, 92, 84)'
  useEffect(() => {

    onChildAdded(chatListRef, (data) => {
      setChats(chats => [...chats, data.val()])
      setTimeout(() => {
        updatHeight()
      }, 100);
    });

  }, [])


  let sandMeg = () => {
    set(chatRef, {
      Name: name, Message: meg
    });
    setMeg('')

  }
  return (
    <>
      {name ? null : <div>
        <input className='border' type="text" name="" id="" onBlur={(e) => setName(e.target.value)} />
      </div>}
      {name ? <div >
        <div id='scoll' className='chat-container h-[89vh] overflow-y-scroll'>
          <h1 className='text-4xl text-center'>Name: {name}</h1>
          {
            chats.map((c, i) => <div key={i} className={`container  flex ${c.Name == name ? 'flex-row-reverse ' : ''}`} >
              <p className={`chatbox border-2  border-gray-400 ${c.Name == name ? 'bg-green-400 rounded-l-full rounded-tr-full ' : " ml-7 bg-white rounded-r-full rounded-tl-full"} p-4 my-2  bg-bisque`}>
                <i className='text-red-400 text-sm'>{c.Name !== name && '+92174433473'}{c.Name !== name && <i className=' text-slate-400'>~Asad</i>}</i><br />
                <strong>{c.Name} </strong>
                {c.Message}
              </p>
            </div>)}
          <div className='border border-red-900  bg-slate-300 p-3 fixed w-full flex bottom-0'>
            <input className='rounded-lg p-2 flex-grow' type="text" name="" placeholder='Sand Message....' value={meg} onInput={e => setMeg(e.target.value)} id="" />
            {/* <button  className='' >Sand</button> */}
            <button className="material-symbols-outlined m-2" onClick={() => sandMeg()}>
              send
            </button>
          </div>
        </div>
      </div> : null}
    </>
    
  )
}

export default App
