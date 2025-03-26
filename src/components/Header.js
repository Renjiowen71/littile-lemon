import Nav from './utility/Nav';
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
