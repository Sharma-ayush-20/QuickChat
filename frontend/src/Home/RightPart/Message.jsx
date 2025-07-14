import React from 'react'

function Message({ message }) {

  const authUser = JSON.parse(localStorage.getItem("ChatApp"))
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start"
  const chatColor = itsMe ? "bg-green-700" : "bg-slate-700"

  return (
    <div>
         <div className='p-4'>
                <div className={`chat ${chatName}`}>
                    <div className={`chat-bubble chat-bubble-info text-white ${chatColor}`}>{message.message}</div>
                </div>
               
            </div>
    </div>
  )
}

export default Message