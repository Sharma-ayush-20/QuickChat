import React, { useEffect, useState } from 'react'
import { BiLogOutCircle } from "react-icons/bi"
import axios from 'axios'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AppContext';

function Logout() {
  const [loading, setLoading] = useState(false)
  const { backendUrl } = useAuth()

  const handleLogout = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${backendUrl}/api/user/logout`)

      if (response.data.success) {
        toast.success(response.data.message)
        localStorage.removeItem("ChatApp")
        Cookies.remove("jwt")
        window.location.reload()
        setLoading(false)
      }

    } catch (error) {
      console.log('Error in Logout', error)
    }
  }

  return (
    <div className='h-[10vh] flex items-center px-4'>
      <BiLogOutCircle
        onClick={handleLogout}
        className='text-5xl text-slate-300 cursor-pointer p-2 rounded-full transition-all duration-300 hover:bg-slate-800 hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.4)] hover:text-blue-400'
        title="Logout"
      />
    </div>
  )
}

export default Logout
