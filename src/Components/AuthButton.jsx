import React from 'react'

export default function AuthButton(props) {
    const {label, onclick} = props
  return (
    <div className='text-white bg-richblack-800 rounded-lg border-[1px] border-richblack-600 hover:scale-95 transition-all duration-100'>
        <div className='px-2 py-[6px]'>
            <button onClick={onclick}>{label}</button>
        </div>
    </div>
  )
}
