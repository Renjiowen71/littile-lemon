import React, { useState, useEffect } from "react";
import SpecialsCard from "../../card/SpecialsCard"; // Ensure this is the correct import for your card
import Fetch from "../../utility/Fetch"; // Ensure this is the correct path to your Fetch function
import "./Carousel.css"; // Add the corresponding CSS

function Carousel() {
  const [items, setItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const display = 3;
  useEffect(() => {
    const fetchData = async () => {
      const data = await Fetch("specialsMenuUrl"); // Replace "specialsMenuUrl" with your API endpoint
      setItems(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once after the initial render

  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (items.length-display+1));
  };

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? items.length - display : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
        {items.length > 3 && (
          <button className="carousel-button left" onClick={prevItems}>
            {'<'}
            {/* &#8592; */}
          </button>
        )}

        <div className="carousel">
            <div className="carousel-track">
            {items.map((item, index) => {
                const offsetSpace = 28;
                var offset = (index - startIndex) * offsetSpace;

                const opacity = offset < 0 ? 0.5 : offset>80? 0.5 : 1;
                const left = offset+8;

                const transitionStyle = {
                    left: `${left}%`,
                    transition: "left 0.5s ease-out, opacity 0.5s ease-in-out",
                    opacity: opacity,
                };

                return (
                <div key={item.id} className="carousel-item" style={transitionStyle}>
                    <SpecialsCard key={item.id} item={item} />
                </div>
                );
            })}
            </div>
        </div>
        {items.length > 3 && (
          <button className="carousel-button right" onClick={nextItems}>
              {'>'}
              {/* &#8594; */}
          </button>
        )}
    </div>
  );
}

export default Carousel;
