import { useState } from 'react'
import { FollowMouse } from './Components/FollowMouse'
import './app.css'


function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse/>}
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? 'desmontar componente' : 'montar componente'}
      </button>
    </main>
  )
}

export default App
