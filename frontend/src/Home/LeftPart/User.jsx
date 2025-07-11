import React from 'react'

function User({user}) {
    return (
        <div>
            <div className='flex space-x-4 px-8 py-3 items-center hover:bg-slate-700 duration-200 cursor-pointer'>
                {/* ----------------User Photo----------------------- */}
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
                {/* ------------------User name and email------------------- */}
                <div>
                    <h1 className='font-bold'>{user.fullname}</h1>
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    )
}

export default User