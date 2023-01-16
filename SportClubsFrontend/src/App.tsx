import "./App.css"
import {Routes, Route} from "react-router-dom"

import ClubCreationForm from "./components/ClubCreationForm"
import ResetForm from "./components/ResetForm"
import SignIn from "./components/SignIn"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot" element={<ResetForm />} />
      </Routes>
    </div>
  )
}

export default App
