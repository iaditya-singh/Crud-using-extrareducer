import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {

    let user = null;


    return (
        <nav className='p-2 flex justify-between  bg-gradient-to-r from-black via-slate-300 to-gray-300 '>
            <Link to="/"> <h1 className='p-2 text-white text-2xl flex items-end justify-center font-thin' > <img src="public/letter-a (1).png" className='bg-white  rounded-3xl' width={40} alt="" /> uth App</h1></Link>

            <div className='mt-4'>
                {
                    !user ? (
                        <>
                            <Link className=' text-white bg-gradient-to-r from-green-400 via-green-700 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2' to="/login">Login</Link>
                            <Link className='text-white bg-gradient-to-r from-cyan-300 via-cyan-700 to-cyan-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2' to="/register">Register</Link></>
                    ) : (
                        <button className='text-white bg-gradient-to-r from-red-400 via-red-700 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2'>Logout</button>
                    )
                }


            </div>
        </nav>

    )
}

export default Navbar
