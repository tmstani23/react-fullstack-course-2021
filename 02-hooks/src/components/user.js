import React, {Component} from 'react';
import UserItem from './user_item';
import {GlobalContext} from '../context';

class User extends Component{
    //can only use one contextType per class ie only one context from the provider
    //static contextType = GlobalContext;

    render() {
        //console.log(this.context)

        return (
            <>
                <GlobalContext.Consumer>
                {
                    context => {
                        console.log(context)
                    }
                }
                </GlobalContext.Consumer>
                <UserItem />
            </>
            
        )
    }
  
};

export default User;