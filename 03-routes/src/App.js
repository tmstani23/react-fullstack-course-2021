import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import Home from './components/home'
import Profile from './components/profile'
import Posts from './components/posts'

const App = () => {
 

  return (
    <BrowserRouter>
      <header>
       <h2>Header</h2>
        <Link to="/">Home</Link> 
        {/* Add hashtag and query string to the url at location */}
        <Link to={{
          pathname:"/profile",
          hash: '#winmode',
          search: '?true=enabled'
          }}>Profile</Link>
        <Link to="/posts">Posts</Link>
        <hr />
      </header>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App;
