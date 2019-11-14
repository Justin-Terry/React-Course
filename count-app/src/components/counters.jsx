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
                { this.state.counters.map(counter => <Counter key={counter.id} counter={counter} onDelete={ this.handleDelete } />)}
            </div>
        );
    }

    handleDelete = (counterId) => {
        console.log(counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
}

export default Counters;