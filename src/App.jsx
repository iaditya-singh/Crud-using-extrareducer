import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'


import Register from './Pages/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
        <ToastContainer />
      </BrowserRouter>


    </>
  )
}


export default App
