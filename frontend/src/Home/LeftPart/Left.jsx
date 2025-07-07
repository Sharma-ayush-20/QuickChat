import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className='bg-black sm:w-[30%] text-gray-300'>
        <Search/>
        <Users/>
        <Logout/>
    </div>
  )
}

export default Left