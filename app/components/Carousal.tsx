// components/Carousel.tsx
"use client";
import Image from 'next/image';
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
        <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-100 pointer-events-none'}`}>
          <Image src={slide.src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} layout="fill"/>
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <div className="text-center px-4 py-6">
              <h2 className="text-4xl font-semibold mb-4">{slide.label}</h2>
              <p className="text-lg italic">{slide.content}</p>
              <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Learn More</button>
            </div>
          </div>
        </div>
      ))}
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-l focus:outline-none" onClick={prevSlide} title='prev'>
      <FaChevronLeft />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-r focus:outline-none" onClick={nextSlide} title='next'>
      <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
