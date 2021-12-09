import React, {useEffect} from 'react';


const Post = ({item}) => {

    useEffect(() => {
        console.log('post created');

        return () => {
            console.log('post component unmounted')
        }
    }, [])
    return (
        <div>
            <h1>Name: {item.name}</h1>
            <h3>Body: {item.body}</h3>
        </div>
    )
}

export default Post;