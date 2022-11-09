// import { Component } from 'react';
import './card.styles.css';

const Card = ({ monster }) => {
  const { picture, name, email } = monster;
  return (
    <div className="card-container">
      <img src={picture.large} alt={name} />
      <h2>
        {name.title} {name.first} {name.last}
      </h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
