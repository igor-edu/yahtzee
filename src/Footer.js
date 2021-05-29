import React, { Component } from 'react'
import { sumAllScores } from './helperFunctions'
import './Footer.css'

export default class Footer extends Component {
    render() {
        const { scores, maxScore } = this.props.state

        return (
            <footer className="Footer">
                <h3>Scores:</h3>
                <div className="Footer-inside">
                    <p>{`Maximum: ${maxScore}`}</p>
                    <p>{`Current: ${sumAllScores(scores)}`}</p>
                </div>
            </footer>
        )
    }
}
