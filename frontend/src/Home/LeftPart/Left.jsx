import React from 'react'
import Search from './Search'
import Users from './Users'

function Left() {
  return (
    <div className='bg-black sm:w-[30%] text-gray-300'>
        <Search/>
        <Users/>
    </div>
  )
}

export default Left