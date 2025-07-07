import React from 'react'

function User() {
    return (
        <div>
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

export default User