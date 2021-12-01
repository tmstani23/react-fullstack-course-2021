import React, {Component} from 'react';

//class component with state
class Header extends Component {
    
    state = {
        active: 'active',
        keywords: '',
    }

    inputChangeHandler = (event) => {
        const value = event.target.value === '' ? 'active' : 'not-active';

        this.setState({
            active: value,
            keywords: event.target.value
        })
    }

    
    render() {
        
        //let backgroundSwap = this.state.active ? 'blue' : 'red';
        
        return(
            // <header style={{background: `${backgroundSwap}`}}>
            
            <header className={this.state.active}>

               
                <div className="logo">Logo</div>
                <input onChange={this.inputChangeHandler} type="text" />
                {/* to pass in multiple params must use an encapsulating function and pass in the event */}
                {/* <input onChange={(event) => this.inputWithParamsHandler(event, "Artul")} type="text" /> */}
            </header>
            
        )
    }
}

export default Header;