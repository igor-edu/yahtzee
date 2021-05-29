import React, { Component } from 'react'
import Die from './Die'
import './Dice.css'

export default class Dice extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.props.state.isRolling) return
        if (this.props.state.numRollsLeft === 0) return
        this.props.rollDice()
    }

    render() {
        const { numRollsLeft, isRolling, dice } = this.props.state
        const { toggleSpecificDie } = this.props

        let text
        if (isRolling) {
            text = 'Rolling...'
        } else {
            text = numRollsLeft === 1 ? '1 Roll Left' : `${numRollsLeft} Rolls Left`
        }

        const disabled = isRolling || numRollsLeft === 0

        return (
            <main className="Dice">
                <h1>Yahtzee Game!!!</h1>
                <div className="Dice-all">
                    <Die die={dice[0]} toggleSpecificDie={toggleSpecificDie} />
                    <Die die={dice[1]} toggleSpecificDie={toggleSpecificDie} />
                    <Die die={dice[2]} toggleSpecificDie={toggleSpecificDie} />
                    <Die die={dice[3]} toggleSpecificDie={toggleSpecificDie} />
                    <Die die={dice[4]} toggleSpecificDie={toggleSpecificDie} />
                </div>
                <button onClick={this.handleClick} disabled={disabled}>
                    {text}
                </button>
            </main>
        )
    }
}
