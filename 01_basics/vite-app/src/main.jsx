import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element = (
  <a href='google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'google.com', target: "_blank" },
  "Click me to visit google", anotherUser // Evaluated Expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  reactElement
)
