import React from 'react';
import './Cards.css';

const Cards: React.FC = () => {

  const randomPhoto = Math.floor(Math.random() * 11) + 1;
  const images = `../../image/${randomPhoto}.png`;

  return (
    <div className="container mt-5">
      <div className="card main-card">
         <img src={images} className="card-img-top" alt='cardsPhoto'/>
        <div className="card-body">
          <p className="card-text">underground detailing</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
