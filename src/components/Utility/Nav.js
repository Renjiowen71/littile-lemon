import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className='navbar'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/little-lemon#about">About Us</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reservation">Reservation</Link></li>
      <li><Link to="/order">Order Online</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
}

export default Nav;
