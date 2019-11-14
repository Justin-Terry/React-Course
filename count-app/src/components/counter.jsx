import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button onClick={ this.handleIncrement } className="btn btn-success btn-sm m-2">+</button>
                <button onClick={ this.handleDecrement } className="btn btn-danger btn-sm m-2">-</button>
            </div>
        );
    }

    // Using an arrow function here gives access to this because it inherits it
    handleIncrement = () => {
        this.setState({ count: this.state.count+1 });
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count-1 });
    }

    getBadgeClasses() {
        var classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
