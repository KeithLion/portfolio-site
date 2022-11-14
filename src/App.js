import './App.css';
import Main from './Views/Main'
import Projects from './Views/Projects'
import AboutMe from './Views/AboutMe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
      <Route element={<Main />} path='/' />
      <Route element={<Projects />} path='/Projects' />
      <Route element={<AboutMe />} path='/AboutMe' />
      {/* <Route element={< />} path='/Experience' /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
