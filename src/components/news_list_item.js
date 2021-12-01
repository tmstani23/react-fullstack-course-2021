import React from 'react';

const newsListItem = ({item}) => {
    
    const newsItem = (
        <div className="news_item">
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )

    
    
    return (
        <>
          {newsItem}  
        </>
        
    )
}

export default newsListItem;
