import './App.css'
import {Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn'
import ResetForm from './components/ResetForm';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Routes>    
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/forgot' element={<ResetForm />}/>
        <Route path='/redux-test' element={<Counter/>}/>
      </Routes>
    </div>
  )
}

export default App
