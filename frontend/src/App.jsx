import React from 'react'
import Left from './Home/LeftPart/Left'
import Right from './Home/RightPart/Right'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    // <div className='flex flex-col sm:flex-row h-screen'>
    //   <Left/>
    //   <Right/>
    // </div>
    <div>
      {/* <Signup/> */}
      <Login/>
    </div>
  )
}

export default App