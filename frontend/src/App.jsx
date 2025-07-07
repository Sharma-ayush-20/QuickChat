import React from 'react'
import Left from './Home/LeftPart/Left'
import Right from './Home/RightPart/Right'

function App() {
  return (
    <div className='flex flex-col sm:flex-row h-screen'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App