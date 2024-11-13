// components/Card.js
import React from 'react';
import CardContainer from './CardContainer';

const Card = ({ title = "Popular Destinations", description = "From historical cities to natural wonders, explore the best of the world!" }) => {
  return (
    <div className="Card-pr">
      <h1 className="txt-card">{title}</h1>
      <p className="para">{description}</p>
      <CardContainer />
    </div>
  );
}

export default Card;
