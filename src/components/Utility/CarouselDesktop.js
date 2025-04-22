import React, { useState } from "react";
import SpecialsCard from "../card/SpecialsCard";

function CarouselDesktop({items, innerWidth}) {
  const [startIndex, setStartIndex] = useState(1);
  let display = 3;
  let offsetSpace = 30;
  let lowerThres = -40;
  let upperThres = 100
  let upperHalfThres=80;
  let leftpadding=8;
  if (innerWidth<1000){
    display = 2;
    offsetSpace = 45;
    lowerThres = -40;
    upperThres = 80;
    upperHalfThres = 80;
    leftpadding=6;
  } else if (innerWidth < 1200) {
    display = 2;
    offsetSpace = 38;
    lowerThres = -40;
    upperThres = 100;
    upperHalfThres = 60;
    leftpadding=12;
  }
  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex) % (items.length-display+1)+1);
  };

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex === 1 ? items.length-display+1 : prevIndex-1));
  };

  return (
    <div className="carousel-container">
        {items.length > display && (
          <button className="carousel-button left" onClick={prevItems}>
            {'<'}
            {/* &#8592; */}
          </button>
        )}

        <div className="carousel">
            <div className="carousel-track">
              {items.map((item, index) => {
                const isOverflowing = items.length > display;
                const baseOffset = isOverflowing ? (index - startIndex + 1) * offsetSpace : index * offsetSpace;
                const left = baseOffset + leftpadding;
                const style = { left: `${left}%` };

                let visibility = "visible";
                let disabled = false;

                if (isOverflowing) {
                    if (baseOffset < lowerThres) {
                        visibility = "invisible";
                        disabled = true;
                    } else if (baseOffset < 0) {
                        visibility = "half-visible";
                    } else if (baseOffset > upperThres) {
                        visibility = "invisible";
                        disabled = true;
                    } else if (baseOffset > upperHalfThres) {
                        visibility = "half-visible";
                    }
                }

                return (
                    <div key={item.id} className={`carousel-item ${visibility}`} style={style}>
                        <SpecialsCard key={item.id} item={item} disabled={disabled} />
                    </div>
                );
            })}
            </div>
        </div>
        {items.length > display && (
          <button className="carousel-button right" onClick={nextItems}>
              {'>'}
              {/* &#8594; */}
          </button>
        )}
    </div>
  );
}

export default CarouselDesktop;
