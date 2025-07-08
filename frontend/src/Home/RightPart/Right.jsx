import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'

function Right() {
  return (
    <div className='bg-slate-900 sm:w-[70%] text-gray-300'>
      <ChatUser />
      <div className='overflow-y-auto custom-scrollbar' style={{maxHeight: "calc(92vh - 8vh)"}}>
        <Messages />
      </div>
      <Typesend />
    </div>
  )
}

export default Right