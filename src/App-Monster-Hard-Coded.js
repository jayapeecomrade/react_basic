import React, { Component } from 'react';
import './App.css';

class AppMonster extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Dragula',
          id: 'asc1'
        },
        {
          name: 'Zombie',
          id: 'asc2'
        },
        {
          name: 'Franken Stein',
          id: 'asc3'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(
            monster =>
              (
                <h4 key={monster.id}><strong>{monster.name}</strong></h4>
              )
          )
        }
      </div>
    );
  }
}

export default AppMonster;