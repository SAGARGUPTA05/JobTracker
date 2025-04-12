import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentJobTracker from './components/StudentJobTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StudentJobTracker></StudentJobTracker>
    </div>
  )
}

export default App
