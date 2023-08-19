import { useState, useEffect } from 'react'

export const FollowMouse = () => {

    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({X: 0, Y: 0})
  
    useEffect(() => {
      const handleMove = (event) => {
        const {clientX, clientY} = event
        setPosition({X: clientX, Y: clientY})
      }    
      
      if (enabled) {
        window.addEventListener('pointermove', handleMove)      
      }
  
      return () => {
        window.removeEventListener('pointermove', handleMove)
        setPosition({X: 0, Y: 0})
      }
    }, [enabled])

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: '#09f',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.X}px, ${position.Y}px)`
            }}>
      
            </div>
            <h3>Mouse Follower 🐀</h3>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'desactivar' : 'activar'} puntero
            </button>
        </>
    )
}