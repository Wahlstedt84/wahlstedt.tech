import { useState } from 'react'
import dwLogo from './assets/DW.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={dwLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <code>Hack the planet!</code>
    </>
  )
}

export default App
