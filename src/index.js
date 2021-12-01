import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles-css/style.css';
import dbJSON from './styles-css/db.json'

import Header from "./components/header";
import NewsList from 
"./components/news_list.js"
import Footer from "./components/footer";

class App extends Component {
    
    state = {
        news: dbJSON,
        footerText: 'Here is the footer.'
    }

    render() {
        const {news, footerText} = this.state;

        return (
            <>
                <Header />
                <NewsList 
                    news={news}
                />
                <Footer footerText={footerText} />
            </>
        )
        
    }
    
}
    
//first param = component and second = where it goes
ReactDOM.render(<App/>, document.getElementById('root'));