import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <>
        <h1>hello1</h1>
        <h2>hello1</h2>
    </>
)
    
//first param = component and second = where it goes
ReactDOM.render(<App/>, document.getElementById('root'));