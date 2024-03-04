import './App.css'
import About from './Container/About'
import Profile from './Container/Profile'
import { useState } from 'react'

function App() {

  const [state, setState] = useState('')
  let componet
  if (state === 'about') {
    componet = <About />
  }
  if (state === 'profile') {
    componet = <Profile />
  }

  return (
    <>
      <button onClick={() => setState('about')}>about</button>
      <button onClick={() => setState('profile')}>profile</button>
      {componet}
    </>
  )
}

export default App
