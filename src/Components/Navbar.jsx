import React from 'react'

const Navbar = () => {
    return (
        <nav className='p-2 flex justify-between bg-purple-500'>
            <h1 className='p-2 text-white font-bold text-2xl'>Auth APP</h1>
            <div><a className='bg-green-400 py-2 px-4 text-xl font-semibold rounded-md'  href="/login">Login</a>
                <a className='bg-blue-300 rounded-md font-semibold' href="/register">Register</a>
                <button>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
