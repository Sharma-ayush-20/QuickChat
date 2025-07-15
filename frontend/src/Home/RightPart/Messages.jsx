import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'
import useGetSocketMessage from '../../context/useGetSocketMessage.js'

function Messages() {

    const { loading, messages } = useGetMessage()
    // console.log(messages)

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
        <div style={{ minHeight: "calc(92vh - 8vh)" }}>

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
                    <div>
                        <p className='text-center mt-[20%] font-semibold text-slate-400'>Say! Hi to start the conversation</p>
                    </div>
                )
            }


        </div>
    )
}

export default Messages