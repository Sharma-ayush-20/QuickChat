import React from 'react'
import { FaSearch } from "react-icons/fa";

function Logout() {
  return (
    <div className='h-[10vh]'>

      {/* --------------Logout Section-------------- */}
      <div className='flex justify-center items-center py-5'>
        <form action="" className='flex'>
          <input
            type="text"
            placeholder='Search...'
            className='outline-none text-white text-sm border border-blue-800 px-14 py-3 rounded-l bg-gray-800 placeholder-gray-400 placeholder:font-medium transition-colors'
          />
          <button className='border border-blue-800 py-3 px-5 rounded-r bg-blue-900 hover:bg-slate-700 text-white transition-colors border-l-0 cursor-pointer'>
            <FaSearch />
          </button>
        </form>
      </div>

    </div>
  )
}

export default Logout