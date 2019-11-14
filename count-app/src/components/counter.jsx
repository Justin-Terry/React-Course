import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-success btn-sm m-2">+</button>
                <button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-warning btn-sm m-2">-</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    // Using an arrow function here gives access to this because it inherits it

    getBadgeClasses() {
        var classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
