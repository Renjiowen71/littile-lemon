import Nav from './Utility/Nav';
import logo from '../assets/logo.png';
function Header() {
  return (
    <header>
      <img src={logo} style={{ maxWidth: '200px', height: 'auto', objectFit: 'contain' }} alt='logo'/>
      <Nav/>
    </header>
  );
}

export default Header;
