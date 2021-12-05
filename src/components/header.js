import React from 'react';

//class component with state
const Header = (props) => {
        
    return(

            <header>

               
                <div className="logo">Logo</div>
                <input onChange={props.keywordsFunc} type="text" />
            </header>
            
        )
}

export default Header;