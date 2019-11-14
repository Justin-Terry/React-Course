import React, { Component } from 'react';

class Counter extends Component {
    state = {
        id: this.props.counter.id,
        value: this.props.counter.value,
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick={ this.handleIncrement } className="btn btn-success btn-sm m-2">+</button>
                <button onClick={ this.handleDecrement } className="btn btn-warning btn-sm m-2">-</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">X</button>
            </div>
        );
    }

    // Using an arrow function here gives access to this because it inherits it
    handleIncrement = () => {
        this.setState({ value: this.state.value+1 });
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value-1 });
    }

    getBadgeClasses() {
        var classes = "badge m-2 ";
        classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
