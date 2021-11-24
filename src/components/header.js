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
    
    
    render() {
        return(
            <header>
                <div>
                    <div className="logo">Logo</div>
                    <input type="text" />
                </div>
                
            </header>
            
        )
    }
}

export default Header;