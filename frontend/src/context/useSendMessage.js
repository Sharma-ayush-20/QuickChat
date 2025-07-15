import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation.js'
import axios from 'axios'
import { useAuth } from '../context/AppContext.jsx'

function useSendMessage() {

    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();
    const { backendUrl } = useAuth()

    const sendMessages = async (message) => {
        try {
            setLoading(true)
            const response = await axios.post(`${backendUrl}/api/message/send/${selectedConversation._id}`,
                {message}, { withCredentials: true }
            )

            if (response.data.success) {
                setMessages([...messages, response.data.newMessage])
                setLoading(false)
            }

        } catch (error) {
            console.log("Error in sending Message (useSendMessage.jsx) ", error)
            setLoading(false)
        }

    }


    return { loading, sendMessages }
}

export default useSendMessage