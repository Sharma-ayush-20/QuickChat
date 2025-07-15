import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cookies from "js-cookie"
import axios from 'axios'
import { useAuth } from '../context/AppContext.jsx'

function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const { backendUrl } = useAuth()

    useEffect(() => {

        const getUsers = async () => {
            setLoading(true);
            try {
                
                const token = Cookies.get("jwt")

                const response = await axios.get(`${backendUrl}/api/user/allusers`, 
                    {withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                setAllUsers(response.data.allUsers)
                setLoading(false)

            } catch (error) {
                console.log("Error in useGetAllUsers " + error)
            }

        } 
        getUsers()  
    }, [])
    return [allUsers, loading]
}

export default useGetAllUsers