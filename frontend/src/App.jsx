import React from 'react'
import Left from './Home/LeftPart/Left'
import Right from './Home/RightPart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AppContext'
import { Routes, Route, Navigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';

function App() {
  const { authUser } = useAuth()

  return (
    <>
    <Routes>

      {/* Home (protected route) */}
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex flex-col sm:flex-row h-screen">
              <Left />
              <Right />
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

    {/* <Toaster /> */}
    </>
  )
}

export default App
