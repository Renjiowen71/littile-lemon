import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/page/Home';
import Footer from './components/Footer';
import Menu from './components/page/Menu';
import Reservation from './components/page/Reservation';
import ConfirmReservation from './components/page/ConfirmReservation';
import Login from './components/page/Login';
import { UserProvider } from './context/UserContext';

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
    <UserProvider>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/little-lemon" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation/confirmed" element={<ConfirmReservation />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </UserProvider>
  );
}

export default App;
