import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div className='h-[10vh] bg-slate-900'>

            {/* --------------search bar-------------- */}
            <div className='flex justify-center items-center py-5'>
                <form className='flex shadow-md rounded-lg overflow-hidden bg-slate-800 border border-slate-700'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='bg-transparent px-6 py-2 text-white placeholder:text-slate-400 text-sm focus:outline-none w-56 md:w-64'
                    />
                    <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 cursor-pointer'>
                        <FaSearch />
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Search
