import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component {
  render() {
    // console.log('render');
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map(monster => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
