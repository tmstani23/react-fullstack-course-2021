import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles-css/style.css';
import dbJSON from './styles-css/db.json'

import Header from "./components/header";
import NewsList from 
"./components/news_list.js"

class App extends Component {
    
    state = {
        news: dbJSON
    }

    render() {
        console.log(this.state.news)
        return (
            <>
                <Header />
                <NewsList 
                    news={this.state.news}
                />
            </>
        )
        
    }
    
}
    
//first param = component and second = where it goes
ReactDOM.render(<App/>, document.getElementById('root'));