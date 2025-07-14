import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'

function Users() {
  const [allUsers, loading] = useGetAllUsers()

  return (
    <div className="px-3">
      {/* ---------------Message Heading------------------- */}
      <h1 className='text-white font-semibold px-4 py-2 mb-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 shadow-md'>
        Messages
      </h1>

      {/* -------------------User messages---------------------- */}
      <div className='py-2 custom-scrollbar overflow-y-auto' style={{ maxHeight: "calc(84vh - 10vh)" }}>
        {
          allUsers.map((user, index) => (
            <User key={index} user={user} />
          ))
        }
      </div>
    </div>
  )
}

export default Users
