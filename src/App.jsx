import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/contact" 
          element={isAuthenticated ? <Contact /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
