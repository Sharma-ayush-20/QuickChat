import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';

function Typesend() {

    const { loading, sendMessages } = useSendMessage()
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await sendMessages(message)
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex space-x-2 h-[8vh] text-center bg-gray-800'>
                <div className='w-[70%] mx-4'>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="w-full border-gray-700 border-2 rounded outline-none px-4 py-3 mt-1"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type='submit'>
                    <IoSend className='text-3xl cursor-pointer' />
                </button>
            </div>
        </form>
    )
}

export default Typesend