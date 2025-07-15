import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'
import useGetSocketMessage from '../../context/useGetSocketMessage.js'

function Messages() {
    const { loading, messages } = useGetMessage()
    useGetSocketMessage(); //listing incoming messages
    const lastMsgRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            if (lastMsgRef.current) {
                lastMsgRef.current.scrollIntoView({ behavior: "smooth" })
            }
        }, 1000)
    }, [messages])

    return (
        <div className="h-full flex flex-col">
            {/* --------------------Messages-------------------- */}
            {
                loading ?
                    (
                        <Loading />
                    )
                    : (
                        messages.length > 0 && messages.map((message, index) => (
                            <div key={index} ref={lastMsgRef}>
                                <Message message={message} />
                            </div>
                        ))
                    )
            }
            {/* message is not there  */}
            {
                !loading && messages.length === 0 && (
                    <div className="flex-1 flex items-center justify-center">
                        <p className='text-center font-semibold text-slate-400'>Say! Hi to start the conversation</p>
                    </div>
                )
            }
        </div>
    )
}

export default Messages
