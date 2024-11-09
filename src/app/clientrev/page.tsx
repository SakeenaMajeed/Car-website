// src/app/clientrev/Client.tsx

import React from 'react';
import '@/styling/ClientRev.css';

const Client = () => {
  const reviews = [
    {
      name: 'John Doe',
      location: 'Washington',
      review: 'Sed ut pers unde omnis iste natus error sit voluptatem accusantium...',
      image: '/c1.png',
    },
    {
      name: 'Tomas Lili',
      location: 'New York',
      review: 'Sed ut pers unde omnis iste natus error sit voluptatem accusantium...',
      image: '/c2.png',
    },
    {
      name: 'Romi Rain',
      location: 'London',
      review: 'Sed ut pers unde omnis iste natus error sit voluptatem accusantium...',
      image: '/c3.png',
    },
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-heading">What Our Clients Say</h2>
      <div className="review-cards">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <p className="review-text">"{review.review}"</p>
            <h3 className="reviewer-name">{review.name}</h3>
            <h4 className="reviewer-location">{review.location}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
