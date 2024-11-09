// components/NewestCar.js
"use client"
import Image from 'next/image';
import { useState } from 'react';
import '@/styling/NewCar.css'; // Regular CSS import

const cars = [
  {
    id: 1,
    name: 'Chevrolet Camaro ZA100',
    description: 'Duis aute irure dolor in reprehenderit...',
    image: '/ncm1.png',
  },
  {
    id: 2,
    name: 'Ford Mustang GT',
    description: 'Excepteur sint occaecat cupidatat non proident...',
    image: '/ncm2.png',
  },
  {
    id: 3,
    name: 'Dodge Charger SXT',
    description: 'Sed ut perspiciatis unde omnis iste natus error...',
    image: '/ncm3.png',
  },
];

export default function NewestCar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index : any) => {
    setCurrentIndex(index);
  };

  return (
    <section id="newcar">
      <div className="honey">
        <p>Checkout the Latest Cars</p>
        <h2>Newest Cars</h2>
        <div className="underline"></div>
      </div>
      <div className="sliderContainer">
        <div className="carContainer">
          <div className="carImage">
            <Image
              src={cars[currentIndex].image}
              alt={cars[currentIndex].name}
              width={400}
              height={250}
            />
          </div>
          <div className="carDetails">
            <h3>{cars[currentIndex].name}</h3>
            <p>{cars[currentIndex].description}</p>
            <button className="detailsButton">View Details</button>
          </div>
        </div>
        <div className="dots">
          {cars.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
