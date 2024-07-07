import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)
  // let counter = 15
  const AddValue = () => {
    setcounter(counter + 1)
  }
  const removeValue = () =>{
    setcounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={AddValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
