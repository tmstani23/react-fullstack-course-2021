import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles-css/style.css';
import dbJSON from './styles-css/db.json'

import Header from "./components/header";
import NewsList from 
"./components/news_list.js"
import Footer from "./components/footer";
import Life from "./components/lifecycle";

class App extends Component {
    
    state = {
        news: dbJSON,
        filteredNews: dbJSON,
        footerText: 'Here is the footer.',
        active: true
    }

    getKeywords = (event) => {
        
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            //return the item that contains a user entered keyword in its title
            return item.title.indexOf(keywords) > -1
        })
        this.setState({
            filteredNews: filtered
        })
    }

    render() {
        const {news, filteredNews, footerText} = this.state;

        return (
            <>
                <Header keywordsFunc = {this.getKeywords} />
                <NewsList news={filteredNews}> 
                    <br/>
                    <h1>I am a child of newsList </h1>
                    
                </ NewsList>
                { this.state.active ? <Life /> : null }
                
                <button onClick={(event) => 
                    this.setState({active: !this.state.active})
                }>Action

                </button>
                <Footer footerText={footerText} />
            </>
        )
        
    }
    
}
    
//first param = component and second = where it goes
ReactDOM.render(<App/>, document.getElementById('root'));