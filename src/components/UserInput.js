import React, {useState} from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../action'

const UserInput = (props) => {
    const [user, setUser] = useState('');
    const onInputChange = (event) => {
        setUser(event.target.value);
     }

    const onFormSubmit = (event) => {
        event.preventDefault();       
        props.fetchUser(user);
        
    }

    return (
        
        <div>
            <form className="ui form container" onSubmit={onFormSubmit}>
                <div className="field">
                    <label> Git User : </label>
                    <input type="text" onChange = {(e)=>onInputChange(e)} name="first-name" placeholder="Name"/>
                </div>
                    <button className="ui button primary" type="submit">Submit</button>
            </form>
            
        </div>
    )
}



export default connect(null, {fetchUser})(UserInput);
 