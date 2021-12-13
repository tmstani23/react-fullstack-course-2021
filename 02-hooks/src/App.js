import React, {useState, useCallback} from 'react';

import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/count_btn';
import Age from './components/age';
import AgeBtn from './components/age_btn';

const App = () => {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  //useCallback prevents the function from being recreated unless the a dependency prop is updated
  let handleCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    // since we are updating the previous state the dependency array doesn't update.  This will prevent the function from re-rendering
  }, []); 

  let handleAge = useCallback(() => {
    setAge(prevAge => prevAge + 1);
  }, []);

  return (
    <>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={handleCount} />
      <Age age={age} />
      <AgeBtn handleAge={handleAge} />
    </>
  );
}

export default App;
