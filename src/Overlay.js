import React, { Component } from 'react';
import './Overlay.css';
import { sumAllScores } from './helperFunctions';

export default class Overlay extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.resetGame();
    this.props.rollDice();
  }

  render() {
    const { scores, maxScore, isGameOver } = this.props.state;
    const className = `Overlay ${isGameOver ? '' : 'Overlay-hide'}`;

    return (
      <div className={className}>
        <div className='Overlay-inside'>
          <h2>The Game Is Over!</h2>
          <p>{`Your current score is: ${sumAllScores(scores)}`}</p>
          <p>{`Your previous max score is: ${maxScore}`}</p>
          <button onClick={this.handleClick}>Start New Game</button>
        </div>
      </div>
    );
  }
}
