import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
  return (
    <div className='h-[10vh]'>
      <div>
        <BiLogOutCircle className='text-5xl hover:bg-slate-700 rounded-full p-2 duration-300 cursor-pointer ml-2 mt-2'/>
      </div>
    </div>
  )
}

export default Logout