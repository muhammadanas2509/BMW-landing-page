import React, { useState } from "react";
import "./Section4.css";
import "../../index.css"
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Amazing product description goes here.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    description: "High-quality product for your needs.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Best in class performance and features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Compact and stylish design.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Reliable and durable for everyday use.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Affordable and packed with features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Product 6",
    description: "Affordable and packed with features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Product 6",
    description: "Affordable and packed with features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Product 6",
    description: "Affordable and packed with features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Product 6",
    description: "Affordable and packed with features.",
    image: "https://via.placeholder.com/150",
  },
];

const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const updateButtons = () => ({
    disablePrev: currentIndex === 0,
    disableNext: currentIndex >= products.length - 4,
  });

  const { disablePrev, disableNext } = updateButtons();

  return (
    <>
    <div className="s4-main">
        <div className="s4-text">
     <h1>The BMW <br />Podcast: <br />Changing <br /> Lanes</h1>
     <p>Changing Lanes is the official podcast from <br /> BMW. In these audio series, we take you <br /> with us on new journeys through the BMW <br /> universe. Find out more about <br /> sustainability, innovation, technology, <br /> mobility and the latest trends. You can find <br /> and subscribe to Changing Lanes on all <br /> major podcast platforms, so tune in!

</p>
        </div>
        <div className="slider-container">
      <button
        className={`slider-button prev ${disablePrev ? "disabled" : ""}`}
        onClick={slidePrev}
        disabled={disablePrev}
      >
        ‹
      </button>
      <div className="slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`slider-button next`}
        onClick={slideNext}
      >
        ›
      </button>
    </div>
    </div>
    </>
  );
};

export default Section4;
