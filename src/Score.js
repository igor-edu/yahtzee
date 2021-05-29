import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      func,
      updateScore,
      checkGameOver,
      endGame,
      resetDice,
      rollDice,
      id,
    } = this.props;

    const { isRolling, scores, dice } = this.props.state;
    const { isUsed } = scores[this.props.id - 1];

    if (isRolling) return;
    if (isUsed) return;

    const amount = func(dice, id);
    console.log('amount:', amount);
    updateScore(id, amount);

    /**  check if game over only after the change of state above */
    setTimeout(() => {
      if (checkGameOver()) {
        setTimeout(() => {
          endGame();
        }, 500);
      } else {
        resetDice();
        rollDice();
      }
    }, 0);
  }

  render() {
    const { name, text } = this.props;
    const { isUsed, value } = this.props.state.scores[this.props.id - 1];
    const className = `Score ${isUsed ? 'isUsed' : ''}`;

    return (
      <div className={className} onClick={this.handleClick}>
        <span>{name}:</span>
        <span>{isUsed ? value : text}</span>
      </div>
    );
  }
}
