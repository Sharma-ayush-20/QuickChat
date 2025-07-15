import React from 'react'
import Left from './Home/LeftPart/Left'
import Right from './Home/RightPart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AppContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  const { authUser } = useAuth()
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="drawer lg:drawer-open">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col h-screen">
                  
                  <div className="p-3 bg-slate-800 flex justify-between items-center shadow-lg border-b border-slate-700 relative z-10">
                    <label htmlFor="my-drawer" className="btn btn-sm btn-outline btn-primary drawer-button lg:hidden flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.66-.4c-.54-.18-1.12-.3-1.34-.48L7 21l1.9-1.9c.18-.22.3-.8.48-1.34A8.955 8.955 0 019 15c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                      </svg>
                      Chats
                    </label>
                    <h2 className='text-blue-400 font-bold text-lg tracking-wide'>QuickChat</h2>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <Right />
                  </div>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <div className="menu p-0 w-80 min-h-full bg-black text-base-content relative z-40">
                    <Left />
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Login */}
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        {/* Signup */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
