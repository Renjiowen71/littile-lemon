import About from './Home/About';
import Hero from './Home/Hero'
import Specials from './Home/Specials'
import Testimonials from './Home/Testimonials';
function Home() {
  return (
    <div className="container">
      <section className='hero'>
        <Hero/>
      </section>
      <section className='specials'>
        <Specials/>
      </section>
      <section className='testimonials'>
        <Testimonials/>
      </section>
      <section className='about'>
        <About/>
      </section>
    </div>
  );
}

export default Home;
