import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'

function Messages() {

    const { loading, messages } = useGetMessage()
    console.log(messages)

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
                            <Message key={index} message={message}/>
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