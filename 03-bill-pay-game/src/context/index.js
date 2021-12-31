import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    removePlayerHandler = (idx) => {
        let playerRemovedArray = this.state.players;
        playerRemovedArray.splice(idx, 1);
        
        this.setState({players: playerRemovedArray})
        
    }

    nextHandler = () => {
        const {players} = this.state;

        if(players.length < 2) {
            toast.error("You need more than one player", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000
            })
        } else {
            console.log('move to stage 2');
        }
    }

    render() {
        return(
            <>
                 <GlobalContext.Provider value={{
                    state: this.state,
                    addPlayerHandler: this.addPlayerHandler,
                    removePlayerHandler: this.removePlayerHandler,
                    next: this.nextHandler
                }}>
                    {this.props.children}
                </GlobalContext.Provider>
                <ToastContainer />
            </>
           
        )
    }
}

export {
    GlobalContext,
    GlobalProvider
}