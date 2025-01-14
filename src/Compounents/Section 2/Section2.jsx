import React, { useState } from 'react';
import './Section2.css'; // For styling (can also be included in the same file using styled-components or inline styles)
import { IoIosArrowBack } from 'react-icons/io';
// import Img1 from '../../assets/S1 Card1.jpg'
const Section2 = () => {
  const slides = [
    { id: 1, src: 'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-18-media-hd.jpg?imwidth=1440', alt: 'Slide 1' },
    { id: 2, src: 'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-16-media-hd.jpg?imwidth=1440', alt: 'Slide 2' },
    { id: 3, src: 'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-13-media-hd.jpg?imwidth=1440', alt: 'Slide 3' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <>
   <div className="sec">
    <div className="t1"><h2>Learn everything about
        <br /> BMW here</h2></div>
  <div className="ma">
  <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="slider-navigation">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="counter">
      <span>{currentIndex + 1}</span> / {slides.length}
      </div>
     
    </div>
  </div>
   
   </div>
   <div className="t2"><h2> <IoIosArrowBack />BMW NEWS</h2></div>
    </>
    

  );
};

export default Section2;
