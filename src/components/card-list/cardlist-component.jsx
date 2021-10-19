import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => {
return <div className="card-list">
    {/* change state to props, the element property has the state already being used as prop , see App.js / card.component.jsx*/}
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
      ))}
</div>
};