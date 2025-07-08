import React from 'react'
import { IoSend } from "react-icons/io5";

function Typesend() {
    return (
        <div className='flex space-x-2 h-[8vh] text-center bg-gray-800'>
            <div className='w-[70%] mx-4'>
                <input type="text" placeholder="Type here" className="w-full border-gray-700 border-2 rounded outline-none px-4 py-3 mt-1" />
            </div>
            <button>
                <IoSend className='text-3xl cursor-pointer'/>
            </button>
        </div>
    )
}

export default Typesend