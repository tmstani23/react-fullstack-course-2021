import React, { Component } from 'react';

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
        
    }

    render() {
        return(
            <GlobalContext.Provider value={{
                state: this.state,
                addPlayerHandler: this.addPlayerHandler
            }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export {
    GlobalContext,
    GlobalProvider
}