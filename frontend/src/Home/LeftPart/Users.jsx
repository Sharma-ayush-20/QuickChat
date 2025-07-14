import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'

function Users() {

  const [allUsers, loading] = useGetAllUsers()
  // console.log(allUsers)

  return (
    <div>

      {/* ---------------Message Heading------------------- */}
      <h1 className='text-white font-medium px-6 py-1 bg-slate-800 rounded-xl '>Messages</h1>

      {/* -------------------User messages---------------------- */}
      <div className='py-2 custom-scrollbar overflow-y-auto' style={{maxHeight: "calc(84vh - 10vh)"}}>
       
      {
        allUsers.map((user, index) => (
          <User key={index} user={user}/>
        ))
      }

      </div>


    </div>
  )
}

export default Users