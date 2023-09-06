import { useState, useEffect } from 'react'
import './App.css'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  console.log('app')
  const [ok, setOk] = useState()
  const [name, setName] = useState()
  const [number, setNumber] = useState()
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
      Name: name,
      Message: meg,
      Number: number
    });
    setMeg('')

  }
  // <input placeholder='Enter your Name....' className='border p-3  w-1/3 rounded-2xl ' type="text" name="" id="" onBlur={(e) => setName(e.target.value)} />
  return (
    <>
      {ok ? null : <div
        className="block max-w-sm rounded-lg mx-auto my-7 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={(e) => e.preventDefault()} >
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="name"
              onBlur={(e) => setName(e.target.value)}
              className="peer block font-bold min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter name.." />
            <label
              htmlFor="exampleInputEmail2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Enter Name</label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="name"
              onBlur={(e) => setNumber(e.target.value)}
              className="peer block font-bold min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter name.." />
            <label
              htmlFor="exampleInputEmail2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Enter Number</label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              name='password'
              className="peer block min-h-[auto] font-bold w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputPassword2"
              placeholder="Password" />
            <label
              htmlFor="exampleInputPassword2"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password</label
            >
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleCheck2" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck2">
                Remember me
              </label>
            </div>

            <a
              href="#!"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Forgot password?</a>
          </div>

          <button
            onClick={() => setOk('some')}
            type="submit"
            className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>

          <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
            Not a member?
            <a
              href="#!"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >Register</a
            >
          </p>
        </form>
      </div>}
      {ok ? <div >
        {

        }
        <div id='scoll' className='chat-container h-[89vh] overflow-y-scroll'>
          <div className='border border-red-900  bg-slate-100 fixed w-full p-0'>
            <img className='  w-10 h-10 border rounded-full float-left m-2' src="https://images.pexels.com/photos/7249405/pexels-photo-7249405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1 className='text-2xl '>{name}</h1>
            <i className=' block'>online</i>
          </div>
          {
            chats.map((c, i) => <div key={i} className={`container  flex ${c.Name == name ? 'flex-row-reverse ' : ''}`} >
              <p className={`chatbox border-2  border-gray-400 ${c.Name == name ? 'bg-green-400 rounded-l-full rounded-tr-full ' : " ml-7 bg-white rounded-r-full rounded-tl-full"} p-4 my-2  bg-bisque`}>
                {c.Name !== name && <i><i className='text-red-400 text-sm'>{c.Name !== name && `${c.Number}`}{c.Name !== name && <i className=' text-slate-400 ml-1'>~{c.Name}</i>}</i><br /></i>}
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