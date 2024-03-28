import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

export default function Router() {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 font-inter'>
        <Routes>
            <Route path={'/'}  element={<Home/>}/>
        </Routes>
    </div>
  )
}
