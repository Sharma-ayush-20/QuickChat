import React from 'react'

function Users() {
  return (
    <div className='border h-[80%]'>

      {/* ---------------Message Heading------------------- */}
      <h1 className='text-white font-medium px-6 py-1 bg-slate-800 rounded-xl '>Messages</h1>

      {/* -------------------User messages---------------------- */}

      <div className='flex space-x-4 px-4 py-3 items-center hover:bg-slate-700 duration-200 cursor-pointer'>
        {/* ----------------User Photo----------------------- */}
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        {/* ------------------User name and email------------------- */}
        <div>
          <h1>Spidy</h1>
          <span>Spidy@dev.com</span>
        </div>
      </div>

    </div>
  )
}

export default Users