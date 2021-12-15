import React, { Component } from 'react';

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
    
    state = {
        users: [
            {id:1, name: 'Francis'},
            {id:2, name: 'Timothy'},
            {id:3, name: 'Loki'}  
          ]
    }
   
    
    render() { 
        return (
            <GlobalContext.Provider value={this.state}> 
               {this.props.children}
            </GlobalContext.Provider>
        );
    }
}
 
export {GlobalContext, GlobalProvider};