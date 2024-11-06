import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Greeting from './pages/Greeting'
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/greeting/:name' element={<Greeting />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
