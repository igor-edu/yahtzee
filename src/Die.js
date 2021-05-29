import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleSpecificDie(this.props.die.id);
  }

  render() {
    const { value, isFrozen, isRollingForward } = this.props.die;
    const className = `Die ${isFrozen ? 'Die-frozen' : ''}`;

    const text = ['one', 'two', 'three', 'four', 'five', 'six'][value - 1];

    const iClassName = `Die-icon fas fa-dice-${text} 
                ${isRollingForward ? 'Die-icon-rotate' : ''}
            `;

    return (
      <div className={className} onClick={this.handleClick}>
        <i className={iClassName}></i>
      </div>
    );
  }
}
