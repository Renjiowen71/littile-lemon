import hero from '../../../assets/hero.png';
import { Link } from "react-router-dom";
function Hero(){
    return (
    <>
        <article className='hero-text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className="lead-text">We are a family owned  Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservation" className='button'>Reserve a Table</Link>
        </article>
        <img src={hero} alt='Hero'/>
    </>
    )
}
export default Hero;