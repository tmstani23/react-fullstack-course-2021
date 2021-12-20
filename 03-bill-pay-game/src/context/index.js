import React, { Component } from 'react';

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
    state = {
        stage: 2,
        players: [],
        result: ''
    }

    render() {
        return(
            <GlobalContext.Provider value={{
                state: this.state
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