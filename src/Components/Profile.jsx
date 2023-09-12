import React, { useContext, useEffect} from 'react'
import Usercontext from '../Context/Usercontext'
function Profile() {
    let { user } = useContext(Usercontext)
    return (
        <>
            {user ? <div className=' rounded-lg p-6 m-5 text-center border border-black w-1/3 mx-auto'>
                <h1 className=' text-4xl'>User Name: {user.name}</h1>
                <h1 className=' text-4xl'>User Password: {user.password}</h1>
            </div> : null}
        </>
    )
}

export default Profile