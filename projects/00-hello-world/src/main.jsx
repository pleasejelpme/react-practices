import React from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
    return(<button>{text}</button>)
}

root.render(
    <React.Fragment>
      <Button text='button 1'/>
      <Button text='button 2'/>
      <Button text='button 3'/>
    </React.Fragment>
)
