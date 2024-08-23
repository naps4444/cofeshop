import React, { useState } from 'react';
import Image from 'next/image';
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Section3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/car1.svg", alt: "Slide 1" },
    { src: "/s2-1.svg", alt: "Slide 2" },
    { src: "/s2-2.svg", alt: "Slide 3" },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>

          <div className='py-16 w-10/12 container mx-auto'>
          <h1 className='text-[40px] lg:text-[70px] mx-auto md:text-center'>POPULAR COFFEE</h1>
          </div>
      <div id="default-carousel" className="relative py-14 mx-auto w-10/12 lg:w-10/12  container">

        
        {/* Carousel wrapper */}
        <div className="relative  mx-auto h-56 overflow-hidden rounded-lg md:h-[550px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
                index === currentSlide ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-4 h-4 rounded-full  border-2 ${
                index === currentSlide ? 'bg-white' : 'bg-black'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          className="absolute top-0 left-0 lg:-left-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <IoArrowBackOutline className="w-10 h-10 text-[#A3B8D7]" />
        </button>

        <button
          className="absolute top-0 right-0 lg:-right-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
          aria-label="Next"
        >
          <IoArrowForwardOutline className="w-10 h-10 text-[#A3B8D7]" />
        </button>
      </div>
    </>
  );
};

export default Section3;
