import React, { Component } from 'react'
import {
    scoreChance,
    scoreFullHouse,
    scoreLargeStraight,
    scoreSmallStraight,
    scoreThreeOfKind,
    scoreFourOfKind,
    scoreYahtzee
} from './helperFunctions'
import Score from './Score'

export default class Lower extends Component {
    render() {
        return (
            <section className="Lower">
                <h3>Harder...</h3>
                <Score id={7}
                    name='Three of Kind'
                    text='Sum all dice if 3 same'
                    func={scoreThreeOfKind}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={8}
                    name='Four of Kind'
                    text='Sum all dice if 4 same'
                    func={scoreFourOfKind}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={9}
                    name='Full House'
                    text='25 points, 3 + 2 same'
                    func={scoreFullHouse}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={10}
                    name='Small Straight'
                    text='30 points, if 4 in a row'
                    func={scoreSmallStraight}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={11}
                    name='Large Straight'
                    text='40 points, if 5 in a row'
                    func={scoreLargeStraight}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={12}
                    name='Yahtzee'
                    text='50 points, if all same'
                    func={scoreYahtzee}
                    state={this.props.state}
                    updateScore={this.props.updateScore}
                    resetDice={this.props.resetDice}
                    rollDice={this.props.rollDice}
                    checkGameOver={this.props.checkGameOver}
                    endGame={this.props.endGame}
                />
                <Score id={13}
                    name='Chance'
                    text='Sum all dice'
                    func={scoreChance}
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
