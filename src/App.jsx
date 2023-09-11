import { useState, useEffect, useRef } from 'react'
import './App.css'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function App() {
  // Singn in with Google
  const provider = new GoogleAuthProvider();
  const auth = getAuth()
  const GoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setName(user.displayName)
        setEmail(user.email)
        console.log('User: ', user)
      }).catch((error) => {
        console.log('Some error in google singh in')
      });
  }
  // All Hooks
  const [email, setEmail] = useState()
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
  const UseRef = useRef(null)
  if(UseRef.current){
    UseRef.current.focus()
  }
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
      Name: name,
      Message: meg,
      Email: email
    });
    console.log(chatRef, {
      Name: name,
      Message: meg,
      Email: email
    })
    setMeg('')
    console.log('zain')

  }
  return (
    <>
      {/* Google Login Button */}
      {email ? null : (
        <button onClick={() => GoogleLogin()}>Google Login</button>
      )}

      {/* Main Chat Container */}
      {email ? (
        <div>
          {/* User Info */}
          <div className='border border-red-900 bg-slate-100 fixed w-full p-0'>
            <img
              className='w-10 h-10 border rounded-full float-left m-2'
              src="https://images.pexels.com/photos/7249405/pexels-photo-7249405.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h1 className='text-2xl'>{name}</h1>
            <i className='block'>online</i>
          </div>

          {/* Chat Messages */}
          <div id='scoll' className='app chat-container pt-14 h-[89vh] overflow-y-scroll'>
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container flex ${c.Name === name ? 'flex-row-reverse' : ''}`}
              >
                <p
                  className={`chatbox border-2 border-gray-400 ${c.Name === name
                    ? 'bg-green-400 rounded-l-full rounded-tr-full'
                    : 'ml-7 bg-white rounded-r-full rounded-tl-full'
                    } p-4 my-2 bg-bisque`}
                >
                  {c.Name !== name && (
                    <i>
                      <i className='text-red-400 text-sm'>
                        {c.Name !== name && `+92*********`}
                        {c.Name !== name && <i className='text-slate-400 ml-1'>~{c.Name}</i>}
                      </i>
                      <br />
                    </i>
                  )}
                  <strong>{c.Name} </strong>
                  {c.Message}
                </p>
              </div>
            ))}

            {/* Message Input */}
            {/* // ... (previous code) */}

            <div className='border border-red-900 bg-slate-300 p-3 fixed w-full flex bottom-0'>
              <input
                ref={UseRef}
                className='rounded-lg p-1 flex-grow'
                type="text"
                placeholder='Send Message....'
                value={meg}
                onInput={e => setMeg(e.target.value)}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    sandMeg();
                  }
                }}
              />
              {/* Send Button */}
              <button className="material-symbols-outlined m-2" onClick={() => sandMeg()}>
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>


  )
}

export default App