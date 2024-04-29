// components/Carousel.tsx
"use client";
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


interface Slide {
    src: string;
    label: string;
    content: string;
  }
  
  interface CarouselProps {
    slides: Slide[];
    interval?: number; // Optional interval prop for specifying time between slide changes (in milliseconds)
  }
  
  const Carousel: React.FC<CarouselProps> = ({ slides, interval = 10000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      }, interval);
  
      return () => clearInterval(intervalId);
    }, [slides, interval]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
  
  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <img src={slide.src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h5 className="text-xl">{slide.label}</h5>
            <p>{slide.content}</p>
          </div>
        </div>
      ))}
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-l focus:outline-none" onClick={prevSlide}>
      <FaChevronLeft />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-r focus:outline-none" onClick={nextSlide}>
      <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
