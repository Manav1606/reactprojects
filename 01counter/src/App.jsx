import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

let [counter,setcounter]=useState(0)
function addvalue(){
  counter=counter+1
  if(counter>20)
  {
    counter=20
  setcounter(20)
  }
  else
  setcounter(counter)
}
function removevalue()
{
  counter=counter-1

  if(counter<0)
  {
    counter=0
  setcounter(0)
  }
  else
  setcounter(counter)
}
  return (
  <>
    <h1>Veenu </h1>
    <h2>counter: {counter}</h2>
    <button onClick={addvalue}>Add Value: {counter}</button>
    <br />
    <button onClick={removevalue}>Add remove: {counter}</button>
  </>
  )
}

export default App
