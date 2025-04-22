import { useEffect,useState, useRef } from 'react';
import SpecialsCard from "../card/SpecialsCard";
import "./Carousel.css";

function CarouselMobile({items}) {
  const containerRef = useRef(null);
  const [scrollingDirection, setScrollingDirection] = useState('down');
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const bounceScroll = () => {
      if (container && !isPaused) {
        if (scrollingDirection === 'down') {
          container.scrollBy(0, 2);
        } else if (scrollingDirection === 'up') {
          container.scrollBy(0, -2);
        }

        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          setScrollingDirection('up');
        }

        if (container.scrollTop <= 0) {
          setScrollingDirection('down');
        }
      }
    };

    const scrollInterval = setInterval(bounceScroll, 50);

    return () => clearInterval(scrollInterval);
  }, [scrollingDirection, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    if(!isInteracted) setIsPaused(false);
  };

  const handleInteract = () => {
    setIsInteracted(true);
    handlePause();
    setTimeout(() => {
      setIsInteracted(false);
    }, 3000);
  }

  return (
    <section
      className="carousel-mobile-container"
      ref={containerRef}
      onMouseMove={handlePause}
      onMouseLeave={handleResume}
      onMouseDown={handleInteract}
      onTouchStart={handlePause}
      onTouchMove={handleInteract}
      onTouchEnd={handleResume}
    >
      {items.map((item, index) => {
          return (
            <SpecialsCard key={item.id} item={item}/>
          );
      })}
    </section>
  );
}

export default CarouselMobile;
