import React, { Component } from 'react';

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
    
    state = {
        users: [
            {id:1, name: 'Francis'},
            {id:2, name: 'Timothy'},
            {id:3, name: 'Loki'}  
          ],
          active: true
    }

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    }
   
    
    render() { 
        return (
            <GlobalContext.Provider value={{
                users: this.state.users,
                active: this.state.active,
                toggleActive: this.toggleActive
            }}> 
               {this.props.children}
            </GlobalContext.Provider>
        );
    }
}
 
export {GlobalContext, GlobalProvider};