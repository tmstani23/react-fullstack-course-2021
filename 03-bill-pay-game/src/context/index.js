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
            this.setState({
                stage: 2
            }, ()=> {
                setTimeout(() => {
                    this.generateLoser();
                }, 1000);
            })
        }
    }

    generateLoser = () => {
        const {players} = this.state;

        this.setState({
            result: players[Math.floor(Math.random() * players.length)]
        })
    }

    resetGameHandler = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ''
        })
    }

    render() {
        return(
            <>
                 <GlobalContext.Provider value={{
                    state: this.state,
                    addPlayerHandler: this.addPlayerHandler,
                    removePlayerHandler: this.removePlayerHandler,
                    next: this.nextHandler,
                    getNewLoser: this.generateLoser,
                    resetGame: this.resetGameHandler
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