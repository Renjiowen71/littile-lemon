import { Link } from "react-router-dom";
import { useUser } from '../../context/UserContext';

function Nav() {
  const { user, isLoggedIn, logout } = useUser();
  return (
    <ul className='navbar'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/little-lemon#about">About Us</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reservation">Reservation</Link></li>
      <li><Link to="/order">Order Online</Link>
      </li>{!isLoggedIn && (
        <li><Link to="/login">Login</Link></li>
      )}

      {isLoggedIn && (
        <>
          <li><Link to="#" onClick={(e) => {
              e.preventDefault();
              logout();
            }}>
              Logout
            </Link>
          </li>
          <li><Link to="#"
            className="no-hover-link"
            onClick={(e) => {
              e.preventDefault();
            }}>Hi, {user.firstName}!
            </Link></li>
        </>
      )}
    </ul>
  );
}

export default Nav;
