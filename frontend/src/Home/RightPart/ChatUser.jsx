import React from 'react'

function ChatUser() {
    return (
        <div>
            <div className='flex space-x-4 px-8 py-3 h-[8vh] items-center justify-center bg-slate-700 hover:bg-slate-800 duration-200 cursor-pointer'>
                {/* ----------------User Photo----------------------- */}
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
                {/* ------------------User name and email------------------- */}
                <div>
                    <h1 className='font-bold'>Spidy</h1>
                    <span className='text-sm'>Offline</span>
                </div>
            </div>
        </div>
    )
}

export default ChatUser