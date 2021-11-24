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
    
    inputChangeHandler(event) {
        console.log(event.target.value)
    }
    
    inputWithParamsHandler(event, name) {
        console.log(event.target.value)
        console.log(name + event.target.value)
    }
    
    render() {
        return(
            <header
                onClick={() => console.log("header clicked")}
            >
               
                <div className="logo">Logo</div>
                <input onChange={this.inputChangeHandler} type="text" />
                {/* to pass in multiple params must use an encapsulating function and pass in the event */}
                <input onChange={(event) => this.inputWithParamsHandler(event, "Artul")} type="text" />
                
            </header>
            
        )
    }
}

export default Header;