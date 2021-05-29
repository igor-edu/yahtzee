import React, { Component } from 'react';
import { randomNumber, createDice, sumAllScores } from './helperFunctions';
import './Yahtzee.css';
import Dice from './Dice';
import Upper from './Upper';
import Lower from './Lower';
import Footer from './Footer';
import Overlay from './Overlay';

export default class Yahtzee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dice: createDice(),
      numRollsLeft: 3,
      isRolling: false,
      isGameOver: false,
      maxScore: this.getMaxScoreFromLocalStorage(),
      scores: Array.from({ length: 13 }).map((_a, index) => ({
        id: index + 1,
        value: 0,
        isUsed: false,
      })),
    };

    this.rollDice = this.rollDice.bind(this);
    this.resetDice = this.resetDice.bind(this);
    this.toggleSpecificDie = this.toggleSpecificDie.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.resetDice = this.resetDice.bind(this);
    this.endGame = this.endGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
  }

  getMaxScoreFromLocalStorage() {
    try {
      return +JSON.parse(localStorage.getItem('yahtzeeMaxScore'));
    } catch (error) {
      return 0;
    }
  }

  setMaxScoreToLocalStorage(max) {
    localStorage.setItem('yahtzeeMaxScore', JSON.stringify(max));
  }

  endGame() {
    this.setState({ isGameOver: true });
  }

  checkGameOver() {
    return this.state.scores.every((score) => score.isUsed);
  }

  resetGame() {
    const currentScore = sumAllScores(this.state.scores);
    if (currentScore > this.state.maxScore) {
      this.setMaxScoreToLocalStorage(currentScore);
      this.setState({ maxScore: currentScore });
    }

    this.setState((prevState) => ({
      isGameOver: false,
      numRollsLeft: 3,
      isRolling: false,
      dice: prevState.dice.map((die) => ({
        ...die,
        isFrozen: false,
      })),
      scores: prevState.scores.map((score) => ({
        ...score,
        isUsed: false,
        value: 0,
      })),
    }));
  }

  rollDice() {
    this.setState({ isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 2000);

    /** start spinning dice, css transition for 2 seconds */
    this.setState((prevState) => ({
      dice: prevState.dice.map((die) => {
        if (die.isFrozen) return die;
        return {
          ...die,
          isRollingForward: !die.isRollingForward,
        };
      }),

      numRollsLeft: Math.max(prevState.numRollsLeft - 1, 0),
    }));

    /** change dice values after 1.5 seconds */
    setTimeout(() => {
      this.setState((prevState) => ({
        dice: prevState.dice.map((die) => {
          if (die.isFrozen) return die;
          return {
            ...die,
            value: randomNumber(),
          };
        }),
      }));
    }, 1500);
  }

  resetDice() {
    this.setState((prevState) => ({
      numRollsLeft: 3,
      dice: prevState.dice.map((die) => ({
        ...die,
        isFrozen: false,
      })),
    }));
  }

  componentDidMount() {
    /** delay initial rolling for transition to take effect */
    setTimeout(() => {
      this.rollDice();
    }, 0);
  }

  /** freeze or unfreeze specific die for rolling */
  toggleSpecificDie(id) {
    this.setState((prevState) => ({
      dice: prevState.dice.map((die) => {
        if (die.id !== id) return die;
        return {
          ...die,
          isFrozen: !die.isFrozen,
        };
      }),
    }));
  }

  updateScore(id, amount) {
    this.setState((prevState) => ({
      scores: prevState.scores.map((score) => {
        if (score.id === id)
          return {
            ...score,
            value: amount,
            isUsed: true,
          };
        return score;
      }),
    }));
  }

  render() {
    return (
      <div className='Yahtzee'>
        <Dice
          state={this.state}
          rollDice={this.rollDice}
          toggleSpecificDie={this.toggleSpecificDie}
        />
        <Upper
          state={this.state}
          updateScore={this.updateScore}
          resetDice={this.resetDice}
          rollDice={this.rollDice}
          checkGameOver={this.checkGameOver}
          endGame={this.endGame}
        />
        <Lower
          state={this.state}
          updateScore={this.updateScore}
          resetDice={this.resetDice}
          rollDice={this.rollDice}
          checkGameOver={this.checkGameOver}
          endGame={this.endGame}
        />
        <Footer state={this.state} />
        <button onClick={this.endGame}>End Game</button>
        <Overlay
          resetGame={this.resetGame}
          rollDice={this.rollDice}
          state={this.state}
        />
      </div>
    );
  }
}
