import React, { useContext, useEffect, useRef, useState } from 'react'
import Usercontext from '../Context/Usercontext'
function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    let { setUser, user } = useContext(Usercontext)

    let handleSubmit = (e) => {
        e.preventDefault()
        setUser({ name, password })
        setName('')
        setPassword('')
    }
    let MyRef = useRef()
    useEffect(() => {

        if (MyRef.current) {
            MyRef.current.focus()
         }
    }, [])

    return (
        <>
            {user ? null
                : <div className=' rounded-lg p-6 m-5 text-center border border-black w-1/3 mx-auto flex justify-center'>
                    <form action="" className='w-[65%]'>
                        <input
                            ref={MyRef}
                            className=' block w-full my-2 p-2 border border-black rounded-lg'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} placeholder='User Name...'
                        />
                        <input
                            className=' block w-full my-2 p-2 border border-black rounded-lg' type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder='User Password...'
                        />
                        <button className=' font-bold block w-full bg-blue-800 hover:bg-blue-700 my-2 p-2 border border-black rounded-lg' onClick={handleSubmit}>Submite</button>
                    </form>
                </div>}
        </>
    )
}

export default Login