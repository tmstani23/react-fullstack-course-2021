import React, { Component } from 'react';

class Life extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            action: ''
        }
        console.log('1-constructor-fired');
    }

    static getDerivedStateFromProps() {
        console.log('2-getDerivedStateFromProps-fired');
        return null;
    }

    componentDidMount() {
        console.log('4-componentDidMount-fired');
    }

    componentWillUnmount() {
        console.log('5-componentWillUnmount-fired');
    }
    
    render() { 
        console.log('3-render-fired');
        return (
            <div>
                Life
            </div>
        )
        
    }
}
 
export default Life;