import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{
    state = {count: 0};
    increment = () =>{
        this.props.dispatch({types: 'INCREMENT' });
    }

    decrement = () =>{
        this.props.dispatch({types: 'DECREMENT' });
    }

    render() {
        return (
            <div>
                <h2>Center</h2>
                <div>
                    <button onClick={this.decrement}></button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}></button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);