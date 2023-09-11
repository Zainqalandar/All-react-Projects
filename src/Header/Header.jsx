import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <header>
                <nav className='border-2 border-black'>
                    <ul className=' flex'>
                        <li className=' p-2 border hover:bg-slate-400'>
                            <Link to=' '>
                                Home
                            </Link>
                        </li>
                        <li className=' p-2 border hover:bg-slate-400'>
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                        <li className=' p-2 border hover:bg-slate-400'>
                            <Link to='/company'>
                                Company
                            </Link>
                        </li>
                        <li className=' p-2 border hover:bg-slate-400'>
                            <Link>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header