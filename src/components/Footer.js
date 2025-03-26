import logo from '../assets/footer.png'
import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import Nav from "./utility/Nav";
function Footer() {
  return (
    <footer>
      <img src={logo} alt='Logo'/>
      <section className='text-section'>
        <span className='header'>Doormat Navigation</span>
        <Nav/>
      </section>
      <section className='text-section'>
        <span className='header'>Contact</span>
        <ul>
          <li><a href='https://www.google.com/maps'>12 Lemon Little Street, Chicago</a></li>
          <li><a href='sms:+1234567890'>1234567890</a></li>
          <li><a href='mailto:littlelemon@little.lemon.com'>littlelemon@little.lemon.com</a></li>
        </ul>
      </section>
      <section className='text-section'>
        <span className='header'>Social Media Link</span>
        <ul>
          <li><a href='https://instagram.com'><img src={insta} alt='Insta Icon'/>@LittleLemon</a></li>
          <li><a href='https://facebook.com'><img src={facebook} alt='Facebook Icon'/>LittleLemon</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
