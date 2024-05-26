import { useState } from 'react'
import Header from './assets/Header'
import Body from './assets/Body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>

      <Header/>
      <Body/>
    </div>
  )
}

export default App;
