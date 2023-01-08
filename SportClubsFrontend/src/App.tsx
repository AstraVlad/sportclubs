import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>    
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </div>
  )
}

export default App
