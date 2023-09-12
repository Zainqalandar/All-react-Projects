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
  useEffect(() => {
    if (UseRef.current) {
      UseRef.current.focus()
    }

  }, [email])

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
        <div className=' border border-black  mx-auto text-center'>
          <p className="text-4xl font-extrabold text-gray-900 dark:text-white text-center  my-2">Welcome to Chat</p>
          <div className=' w-1/3 mx-auto m-12'>
            <a className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" style={{ backgroundColor: '#3b5998' }} href="#!" role="button" data-te-ripple-init data-te-ripple-color="light">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Continue with Facebook
            </a>
            <button onClick={() => GoogleLogin()} className=" text-black mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]" style={{ backgroundColor: 'white' }} href="#!" role="button" data-te-ripple-init data-te-ripple-color="light">
              {/* Twitter */}
              <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" className='  w-5 mr-3' alt="" />
              Continue with google
            </button>
          </div>
        </div>
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