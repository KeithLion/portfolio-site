import './App.css';
import Main from './Views/Main'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route element={<Main />} path='/' />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
