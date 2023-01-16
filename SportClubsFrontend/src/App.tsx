import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import ResetForm from './components/ResetForm';
import ClubCreationForm from './components/ClubCreationForm';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot" element={<ResetForm />} />
      </Routes>
    </div>
  );
}

export default App;
