import React, {useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';

import {GlobalContext} from '../context/'

const StageIntro = () => {
    const textInput=useRef();
    const context = useContext(GlobalContext);
    const [error, setError] = useState([false, '']);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = textInput.current.value;
        const validateForm = validateInput(value);

        if(validateForm) {
            // if form is valid add player
            setError([false, '']);
            context.addPlayerHandler(value);

            textInput.current.value = ''
            console.log(context);
        } 
        
    }

    const validateInput = (value) => {
        if (value === '') {
            setError([true, 'Sorry, you need to add something'])
            return false;
        }
        if (value.length <= 2) {
            setError([true, 'Sorry, you need at least 3 characters.'])
            return false;
        }
        return true;
    }

    return (
    <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
            <Form.Control 
                type='text'
                placeholder='Add player name'
                name='player'
                ref={textInput}
            />
        </Form.Group>
        {
            error[0] ? 
                <Alert variant="danger">
                    {error[1]}
                </Alert> 
            : null
        }
        <Button className="miami" variant="primary" type="submit">
            Add Player
        </Button>
        {
            context.state.players && context.state.players.length > 0 ?
                <>
                    <hr />
                    <div>
                        <ul className="list-group">
                            {
                                context.state.players.map((item, idx) => (
                                    <li key={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                                        {item}
                                        <span className="badge badge-danger" onClick={()=> {context.removePlayerHandler(idx)}}
                                        >X</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => context.next()} className="action_button">
                            Next
                        </div>
                    </div>
                </>
            : null
        }
    </Form>
  );
}

export default StageIntro;
