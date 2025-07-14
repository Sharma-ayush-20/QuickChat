import React from 'react'
import useConversation from '../../zustand/useConversation.js'

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div className='px-2'>
      <div
        className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer 
        transition-all duration-300 
        ${isSelected ? 'bg-blue-800 shadow-lg' : 'hover:bg-slate-800 hover:shadow-md'}`}
        onClick={() => setSelectedConversation(user)}
      >
        {/* ----------------User Photo----------------------- */}
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full border-2 border-blue-600 shadow-blue-900 shadow-md">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>

        {/* ------------------User name and email------------------- */}
        <div className='text-white'>
          <h1 className='font-semibold text-base'>
            {user.fullname.charAt(0).toUpperCase() + user.fullname.slice(1)}
          </h1>
          <p className='text-sm text-slate-400 truncate'>{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default User
