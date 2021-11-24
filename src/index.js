import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header";
import './styles-css/style.css';

const App = () => (
    <>
        <Header />
    </>
)
    
//first param = component and second = where it goes
ReactDOM.render(<App/>, document.getElementById('root'));