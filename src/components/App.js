import React from 'react'
import UserInput from './UserInput'
import CardList from './CardList'
import { BrowserRouter as Router} from 'react-router-dom'

const App = () => {  
    return (        
        <div className='ui container'>
            <UserInput></UserInput>
            <h3>* Ranked based on number of followers</h3>
            <Router>
                
                    <CardList></CardList>
                 
            </Router>
        </div>
    )
}

export default App;
