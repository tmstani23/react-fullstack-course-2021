import React from 'react';
import {GlobalProvider} from './context/'
import User from './components/user';



const App = () => {

  

    return (    
      <>
        <GlobalProvider>
          <User  />   
        </GlobalProvider>
        
      </>
    )

}

 
export default App;

