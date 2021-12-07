import React, { Component } from 'react';

class Life extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: 'Bob'
        }
        console.log('1-constructor-fired');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2-getDerivedStateFromProps-fired', state);
        if(state.name === 'Ron') {
            return {name: 'Milhouse'}
        }
        return null;
    }

    componentDidMount() {
        console.log('4-componentDidMount-fired');
    }

    componentWillUnmount() {
        console.log('5-componentWillUnmount-fired');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('x-shouldComponentUpdate-fired');
        console.log(nextState);
        console.log(this.state);

        if(nextState.name === 'Steve') {
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        let age = 20;
        return age;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('x-componentDidUpdate-fired');
        console.log(prevState);
        console.log(this.state, snapshot);
    }


    
    render() { 
        console.log('3-render-fired');
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={() => this.setState({name: 'Ron'})}>
                    Change name
                </div>
               
            </div>
        )
        
    }
}
 
export default Life;