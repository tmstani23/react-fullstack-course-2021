import React, {useState, useEffect} from 'react';

import Post from './post'

const App = ({initialCount}) => {

  let [state, setState] = useState({
    count: initialCount,
    user: "Timothy"
  });

  let [posts, setPosts] = useState([
    {
      name: 'Super awesome post',
      body: 'The content of the post'
    },
    {
      name: 'titanium',
      body: `shoot me down but I won't fall.  I am titanium`
    },
  ])

  const subtractOne = () => {
    setState({
      ...state,
      count: state.count - 1
    });
  }

  const addPosts = () => {
    let newPost = {
      name: 'Legend',
      body: `When I die I want to be a legend.`
    }
    return setPosts([
      ...posts,
      newPost
    ])
  }

  const removePosts = () => {
    setPosts([]);
  }

  useEffect (() => {
    //console.log('change on state and posts')
    // second arg to use effect will specify when it should be triggered.  For example when a state property changes
  }, [state, posts]) 

  useEffect (() => {
    console.log('mounted')
    // similar to component did mount if second arg is empty.  Only updates when component first mounts.
  }, []) 

  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({
        ...state,
        count: state.count + 1
      })}>Add one</button>
      <button onClick={subtractOne}>Subtract one</button>
      <button onClick={removePosts}>Remove a post</button>

      <hr />

      {
        posts.map((item, i) => (
          <Post item={item} key={i}/>
        ))
      }

      <button onClick={addPosts}>
        Add new post
      </button>

    </>
  );
}

export default App;
