import React from 'react';
import NewsListItem from './news_list_item';

const newsList = (props) => {
    
    const news = props.news.map((item) => (
        <NewsListItem key={item.id} item={item} />
    ))
    
    
    return (
        <>
          {news} 
          {props.children} 
        </>
        
    )
}

export default newsList;