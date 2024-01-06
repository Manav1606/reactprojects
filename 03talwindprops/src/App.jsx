// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Help from './Component/Help.jsx'

function App() {
  let myobj={
    Name: "visit me",
    age: "15"
  }

  return (
    <>
      <Help username="manav"  bntext="Buy krla"/>
      <Help username="manav"  bntext="Buy it plzz"/>
      <Help username="manav"  />

    </>
  )
}

export default App
