import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const another=(
  <a href="https://www.google.com" target='_blank'>visit google</a>
  // <h1>google</h1>
)
const anothervariable=React.createElement(
  'a',
  {
    href:"https://www.google.com",
    target:'_blank'
  },
  'visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    // another
    <App/>
    // anothervariable
)
