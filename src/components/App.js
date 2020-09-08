import React from 'react'
import UserInput from './UserInput'
import CardList from './CardList'


const App = (props) => {
    

    return (
        
        <div className='ui container'>
            <UserInput></UserInput>
            <h3>* Ranked based on number of followers</h3>
            <CardList></CardList>
        </div>
    )
}



export default App;
