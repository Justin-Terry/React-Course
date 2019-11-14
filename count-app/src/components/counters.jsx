import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
            { id: 1, value: 3 },
            { id: 2, value: 2 },
            { id: 3, value: 5 },
            { id: 4, value: 19 },
        ]
    }

    render() {
        return(
            <div>
                <button 
                    className={"btn btn-primary btn-sm m-2"}
                    onClick={this.handleReset}s
                    >Reset</button>
                { this.state.counters.map(counter => 
                    <Counter key={counter.id} 
                        counter={counter} 
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement} 
                        onDelete={ this.handleDelete } />)}
            </div>
        );
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value =  0;
            return c;
        });
        this.setState({counters});
    }
}

export default Counters;