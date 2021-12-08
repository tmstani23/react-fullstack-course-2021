import React, {useState} from 'react';


const App = ({initialCount}) => {

  
  let [count, setCount] = useState(initialCount);

  const subtractOne = () => {
    setCount(prevCount => {
        return prevCount - 1;
    });
  }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => {setCount(count + 1)}}>Add one</button>
      <button onClick={subtractOne}>Subtract one</button>
      <button onClick={() => setCount(initialCount)}>Reset count</button>
    </>
  );
}

export default App;
