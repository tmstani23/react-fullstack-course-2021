import React, {useContext} from 'react';
import {GlobalContext} from '../context'


const UserItem = () => {
    
    const context = useContext(GlobalContext);
    
    return (
         < >
            { context.active ?
                context.users.map((item) => {
                    return(
                        <div key={item.id}>
                            <div>
                                Name: {item.name}
                            </div>
                        </div>
                    )
                    
                })
                :null  
            }
            <hr />
            <button onClick = {context.toggleActive}>Toggle active</button>
         </>
     )
};

export default UserItem;