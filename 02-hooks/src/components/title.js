import React from 'react';

const Title = () => {

    console.log('1-title');
  
  return (
    <>
  
        <h1>My App</h1>
        <hr />
    </>
  );
}
// memo will not rerender component if it isn't receiving new props
export default React.memo(Title);
