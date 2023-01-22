import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainWrapper from './components/MainWrapper';
import { loginRoutes, mainAppRoutes } from './routes';

function App() {  
  return (
    <Routes>    
      {loginRoutes.map((entry, i) => {
          return (
            <Route key={i} path={entry.path} element={(
              <div className="App">
                <entry.component />
              </div>
            )}/>             
          );
      })}

      {mainAppRoutes.map((entry, i) => {
          return (
            <Route key={i} path={entry.path} element={(
              <MainWrapper>
                <entry.component />
              </MainWrapper>
            )}/>
          );
      })}
    </Routes>
  )
}

export default App
