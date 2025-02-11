import React, { useEffect } from 'react'

import { Link} from 'react-router'

const Login = () => {


 

    return (
        <>
            <div className='px-20 py-20 w-screen'>

                <div className='flex align-center justify-center   w-full  ' >

                    <div className=' w-1/2  rounded-tl-3xl overflow-hidden'><img className='w-full' src="public/pexels-rakicevic-nenad-233369-1262304.jpg" alt="" />
                    </div>


                    <form action="" className='flex bg-gray-200 hover:bg-gray-300 transition-all duration-500  w-1/2 flex-col rounded-br-3xl  p-10'>
                        <h1 className='align-center justify-center text-4xl font-thin flex '>Welcome<span className='text-green-500 ml-2'>Back</span></h1>


                        <label htmlFor="" className='mt-20'>Email</label>
                        <input type="text" placeholder='Enter Your Email or Username' required className='border border-gray-400 rounded-md mt-1 px-3 py-2' />

                        <label htmlFor="" className='mt-3'>Password</label>
                        <input type="text" placeholder='Enter Password' required className='border border-gray-400 rounded-md mt-1 px-3 py-2' />


                        <button className='bg-black border-black transition-all duration-400 hover:font-semibold cursor-pointer text-white rounded-md text-xl py-2 mt-16 hover:text-black hover:bg-white hover:border placeholder:'>Login</button>

                        <Link to="/register"><h1 className=' flex justify-center items-center  text-center mt-10 text-black font-extralight hover:cursor-pointer hover:text-xl hover:font-bold transition-all duration-500 ease-in-out'><p className='text-4xl mr-2'>☛  </p>  Or Register</h1></Link>
                    </form>

                </div>
            </div></>
    )
}

export default Login
