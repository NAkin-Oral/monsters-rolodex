// import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, i) => {
      return <Card monster={monster} key={i} />;
    })}
  </div>
);

export default CardList;
