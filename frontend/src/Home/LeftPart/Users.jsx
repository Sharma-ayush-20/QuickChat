import React from 'react'
import User from './User'

function Users() {
  return (
    <div>

      {/* ---------------Message Heading------------------- */}
      <h1 className='text-white font-medium px-6 py-1 bg-slate-800 rounded-xl '>Messages</h1>

      {/* -------------------User messages---------------------- */}
      <div className='custom-scrollbar overflow-y-auto' style={{maxHeight: "calc(84vh - 10vh)"}}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>


    </div>
  )
}

export default Users