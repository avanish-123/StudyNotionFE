import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'

export default function Router() {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 font-inter'>
        <Routes>
            <Route path={'/'}  element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
        </Routes>
    </div>
  )
}
