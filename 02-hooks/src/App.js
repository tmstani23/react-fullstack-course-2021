import React, {useState} from 'react';


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

  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({
        ...state,
        count: state.count + 1
      })}>Add one</button>
      <button onClick={subtractOne}>Subtract one</button>
      {/* <button onClick={() => setCount(initialCount)}>Reset count</button> */}

      <hr />

      {
        posts.map((item, i) => (
          <div key = {i}>
            <h1>Name: {item.name}</h1>
            <h3>Body: {item.body}</h3>
          </div>
        ))
      }

      <button onClick={addPosts}>
        Add new post
      </button>

    </>
  );
}

export default App;
