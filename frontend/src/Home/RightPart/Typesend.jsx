import React, { useState } from 'react'
import { IoSend } from "react-icons/io5"
import useSendMessage from '../../context/useSendMessage.js'

function Typesend() {
  const { loading, sendMessages } = useSendMessage()
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return;
    await sendMessages(message)
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className='bg-gray-900 px-4 py-2'>
      <div className='flex items-center space-x-3'>
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow bg-slate-800 text-white rounded-lg px-4 py-2 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-200 shadow-md"
          disabled={loading}
        >
          <IoSend className="text-xl" />
        </button>
      </div>
    </form>
  )
}

export default Typesend
