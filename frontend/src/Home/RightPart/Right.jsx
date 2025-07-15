import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../zustand/useConversation.js'
import { useAuth } from '../../context/AppContext.jsx'

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const { authUser } = useAuth()

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [])

  return (
    <div className="bg-slate-900 text-gray-300 flex flex-col h-full">
      {selectedConversation ? <ChatUser /> : ""}
      {selectedConversation ?
        <div className='flex-1 overflow-y-auto custom-scrollbar'>
          <Messages />
        </div>
        : (
          <div className="flex flex-col justify-center items-center text-center flex-1 px-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-pulse">
              Welcome <span className="text-blue-400">
                {authUser.user.fullname.charAt(0).toUpperCase() + authUser.user.fullname.slice(1)}
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-md">
              No chat selected. Please start a conversation by selecting a user from your contacts.
            </p>
          </div>
        )}
      {selectedConversation ? <Typesend /> : ""}
    </div>
  )
}

export default Right
