import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation.js';
import axios from 'axios'

function useGetMessage() {

    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            if (selectedConversation && selectedConversation._id) {
                try {

                    const response = await axios.get(
                        `http://localhost:3000/api/message/get/${selectedConversation._id}`,
                        {
                            withCredentials: true 
                        }
                    );
                   
                        setMessages(response.data);
                        setLoading(false)

                } catch (error) {
                    console.log("Error in getting messages", error.response?.data?.message)
                }
            }
        }
        getMessages()
    }, [selectedConversation, setMessages])

    return { loading, messages }
}

export default useGetMessage