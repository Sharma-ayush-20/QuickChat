import React from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx'

function ChatUser() {
  const { selectedConversation } = useConversation()

  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline" 
  }

  return (
    <div className='bg-slate-800 hover:bg-slate-700 transition-all duration-300 cursor-pointer px-4 py-2 shadow-md'>
      <div className='flex items-center space-x-4'>
        {/* User Photo */}
        <div className={`avatar ${getOnlineUsersStatus(selectedConversation._id) === "Online" ? "avatar-online" : "avatar-offline"}`}>
          <div className="w-12 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" alt="User" />
          </div>
        </div>

        {/* Name and Status */}
        <div className='flex flex-col'>
          <h1 className='font-semibold text-white text-md'>
            {selectedConversation?.fullname.charAt(0).toUpperCase() + selectedConversation?.fullname.slice(1)}
          </h1>
          <span className='text-sm text-gray-400'>{getOnlineUsersStatus(selectedConversation._id)}</span>
        </div>
      </div>
    </div>
  )
}

export default ChatUser
