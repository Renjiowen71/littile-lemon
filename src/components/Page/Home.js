import About from './home/About';
import Hero from './home/Hero'
import Specials from './home/Specials'
import Testimonials from './home/Testimonials';
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
