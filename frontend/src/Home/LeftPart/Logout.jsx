import React, { useEffect, useState } from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import axios from 'axios'
import Cookies from 'js-cookie'

function Logout() {

  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {

      const response = await axios.post(`http://localhost:3000/api/user/logout`)

      if (response.data.success) {
        alert(response.data.message)
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
    <div className='h-[10vh]'>
      <div>
        <BiLogOutCircle onClick={handleLogout} className='text-5xl hover:bg-slate-700 rounded-full p-2 duration-300 cursor-pointer ml-2 mt-2' />
      </div>
    </div>
  )
}

export default Logout