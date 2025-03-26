import Nav from './utility/Nav';
import logo from '../assets/logo.png';
import navMenu from '../assets/hamburger menu.png'
import {useState} from 'react';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header>
      <button className="nav-toggle" onClick={toggleNav}>
        <img className='nav-menu' src={navMenu} alt='logo'/>
      </button>
      <img className='nav-logo' src={logo} alt='logo'/>
      <nav className={isNavOpen ? 'open' : ''}>
        <Nav/>
        <aside>
          <button className="nav-toggle" onClick={toggleNav}>
              <img className='nav-menu' src={navMenu} alt='logo'/>
          </button>
        </aside>
      </nav>
    </header>
  );
}

export default Header;
