import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../zustand/useConversation.js'
import { useAuth } from '../../context/AppContext.jsx'


function Right() {

  const { selectedConversation, setSelectedConversation } = useConversation()
  const { authUser } = useAuth()
  // console.log(authUser)

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [])

  return (
    <div className="sm:w-[70%] h-screen bg-slate-900 text-gray-300">

      {selectedConversation ? <ChatUser /> : ""}

      {selectedConversation ?
        <div className='overflow-y-auto custom-scrollbar' style={{ maxHeight: "calc(92vh - 8vh)" }}>
          <Messages />
        </div>
        : (
          <div className="flex flex-col justify-center items-center text-center h-full px-4">
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
