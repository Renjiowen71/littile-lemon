import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Page/Home';
import Footer from './components/Footer';
import Menu from './components/Page/Menu';

function App() {
  return (
    <Router>
      <AppWithScroll />
    </Router>
  );
}

function AppWithScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/little-lemon" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
