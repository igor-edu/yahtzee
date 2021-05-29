import React, { Component } from 'react'
import Score from './Score'
import { scoreIndividualNumber } from './helperFunctions'

export default class Upper extends Component {
    render() {
        return (
            <section className="Upper">
                <h3>Easier...</h3>
                <Score id={1}
                    name='Ones'
                    text='1 point per 1'
                    func={scoreIndividualNumber}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={2}
                    name='Twos'
                    text='2 points per 2'
                    func={scoreIndividualNumber}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={3}
                    name='Threes'
                    text='3 points per 3'
                    func={scoreIndividualNumber}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={4}
                    name='Fours'
                    text='4 points per 4'
                    func={scoreIndividualNumber}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={5}
                    name='Fives'
                    text='5 points per 5'
                    func={scoreIndividualNumber}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={6}
                    name='Sixes'
                    text='6 points per 6'
                    func={scoreIndividualNumber}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
            </section>
        )
    }
}
