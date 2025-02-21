import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import Loading from '../Components/Loading'
import { toast } from 'react-toastify'
const Register = () => {


    const { user, isLoading, isError, message

    } = useSelector(state => state.auth)

    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            navigate("/")
        }

    }, [user])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (isError && message) {
        return (
            toast.error(message)
        )
    }



    return (
        <div className='px-20 py-20 '>

            <div className='flex align-center justify-center   w-full  ' >

                <div className=' w-1/2  rounded-tl-3xl overflow-hidden'><img className='w-full' src="public/pexels-rakicevic-nenad-233369-1262304.jpg" alt="" />
                </div>


                <form action="" className='flex bg-gray-200 hover:bg-gray-300 transition-all duration-500   w-1/2 flex-col rounded-br-3xl  p-10'>
                    <h1 className='align-center justify-center text-4xl font-thin flex '>Register <span className='text-green-500 ml-2'>Now.</span></h1>


                    <label htmlFor="" className='mt-10'>Name </label>
                    <input type="text" placeholder='Enter Your Name' required className='border border-gray-400 rounded-md mt-1 px-3 py-2' />
                    <label htmlFor="" className='mt-3'>Email</label>
                    <input type="text" placeholder='Enter Your Email' required className='border border-gray-400 rounded-md mt-1 px-3 py-2' />
                    <label htmlFor="" className='mt-3'>Password</label>
                    <input type="text" placeholder='Enter Password' required className='border border-gray-400 rounded-md mt-1 px-3 py-2' />
                    <label htmlFor="" className='mt-3'>Confirm Password</label>
                    <input type="text" placeholder='Confirm Password' required className='border border-gray-400 rounded-md mt-1 px-3 py-2' />

                    <button className='bg-black border-black transition-all duration-400 hover:font-semibold cursor-pointer text-white rounded-md text-xl py-2 mt-16 hover:text-black hover:bg-white hover:border placeholder:'>Register</button>

                    <Link to="/login"><h1 className=' flex justify-center items-center  text-center mt-10 text-black font-extralight hover:cursor-pointer hover:text-xl hover:font-bold transition-all duration-500 ease-in-out'><p className='text-4xl mr-2'>☛  </p>  Or login</h1></Link>
                </form>

            </div>
        </div>
    )
}
export default Register
