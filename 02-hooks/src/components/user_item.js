import React, {useContext} from 'react';
import {GlobalContext} from '../context'


const UserItem = () => {
    
    const context = useContext(GlobalContext);
    console.log(context);
    return (
         < >
            User Item
         </>
     )
};

export default UserItem;