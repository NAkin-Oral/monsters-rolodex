// import { Component } from 'react';
import './card.styles.css';

const Card = ({ monster }) => {
  const { login, name, email } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${login.uuid}?set=set2&size=180x180`}
        alt={name}
      />
      <h2>
        {name.title} {name.first} {name.last}
      </h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
