import React, { useState, useEffect } from "react";
import SpecialsCard from "../../card/SpecialsCard";
import "./Carousel.css";

function Carousel({items}) {
  const [startIndex, setStartIndex] = useState(1);

  const display = 3;
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
            {items.length > 3 && items.map((item, index) => {
                const offsetSpace = 28;
                var offset = (index - startIndex) * offsetSpace;

                const visibility = offset<-30? "invisible" :offset < 0 ? "half-visible" : offset>80? offset>100? "invisible" : "half-visible" : "visible";
                const left = offset+8;
                const disabled = offset<-30 || offset> 100;
                const transitionStyle = {
                    left: `${left}%`,
                };

                return (
                <div key={item.id} className={`carousel-item ${visibility}`} style={transitionStyle}>
                    <SpecialsCard key={item.id} item={item} disabled={disabled}/>
                </div>
                );
            })}
            {items.length <= 3 && items.map((item, index) => {
                const offsetSpace = 28;
                var offset = (index) * offsetSpace;
                const left = offset+8;
                const transitionStyle = {
                    left: `${left}%`,
                };

                return (
                <div key={item.id} className={`carousel-item`} style={transitionStyle}>
                    <SpecialsCard key={item.id} item={item}/>
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
