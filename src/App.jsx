import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './helping_components/NavBar'
import MobNavBar from './helping_components/Mob_NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MobNavBar />
      <Home />
    </>
  )
}

export default App
