import About from './Home/About';
import Hero from './Home/Hero'
import Specials from './Home/Specials'
import Testimonials from './Home/Testimonials';
import './Home.css';
function Home() {
  return (
    <>
      <section className='hero'>
        <Hero/>
      </section>
      <section className='specials'>
        <Specials/>
      </section>
      <section className='testimonials'>
        <Testimonials/>
      </section>
      <section id='about' className='about'>
        <About/>
      </section>
    </>
  );
}

export default Home;
