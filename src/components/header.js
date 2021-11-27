import React, {Component} from 'react';

//standard functional component
// const Header = () => {
    
//     const getTheYear = () => {
//         const newDate = new Date();
//         return newDate.getFullYear();
//     }
    
//     return (
//         <div>
//             The date is {getTheYear()}
//         </div>
//      )
// };

// CSS styles as object
// let styles = {
//     header: {
//         background: "#03a9fa"
//     },
//     logo: {
//         color: '#fff',
//         fontFamily: 'Open Sans Condensed',
//         textAlign: 'center'
//     }
// }

//class component with state
class Header extends Component {
    
    state = {
        name: 'Tim',
        keywords: '',
        title: 'The keywords are: ',
        count: 0
    }

    hello () {
        console.log('hello world');
    }

    inputChangeHandler = (event) => {
        //console.log(event.target.value)
        // this.hello();
        this.setState({
            keywords: event.target.value
        })
    }
    
    // inputWithParamsHandler(event, name) {
    //     console.log(event.target.value)
    //     console.log(name + event.target.value)
    // }

    addOne() {
        //can do this way or with a callback
        // this.setState({count: this.state.count + 1})
        
        //with callback get access to prevState and props
        this.setState(( state, props) => ({
            count: state.count + 1
        }))
    }
    
    render() {
        return(
            <header
                onClick={() => console.log("header clicked")}
            >
               
                <div className="logo">Logo</div>
                <input onChange={this.inputChangeHandler} type="text" />
                {/* to pass in multiple params must use an encapsulating function and pass in the event */}
                {/* <input onChange={(event) => this.inputWithParamsHandler(event, "Artul")} type="text" /> */}
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
                <br />
                <div>{this.state.count}</div>
                <button onClick={() => this.addOne()}>Add One</button>
            </header>
            
        )
    }
}

export default Header;