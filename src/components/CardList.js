import React, { useEffect } from 'react'
import _ from 'lodash'
import {useLocation} from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUser } from '../action'

function x(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return new URLSearchParams(useLocation().search);
}


const CardList = (props) => {

    let query = x();

    useEffect(() => {
        const users = query.get('usernames');
        if (users) {
            const userList = users.split(',');
            console.log(userList);
            userList.forEach(user => {
            props.fetchUser(user);
        })
        }
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderList = (users) => {
        console.log(users)
        
        return users.map(user => {
            return (
                <div key={user.id} className="ui card">
                    <br/>
                    <div className="content">
                        <div style={{float:'right'}}>
                            <i className="user big icon"></i>
                        </div>
                        <div className="header">
                        User Name : {user.login}
                        </div>
                        <div>
                        <div>
                        <div className="description">
                        Followers : {user.followers}
                        </div>
                        <div className="description">
                        Following : {user.following}
                        </div>
                        </div>
                        <div>
                        <div className="description">
                        Public Gists : {user.public_gists}
                        </div>
                        <div className="description">
                        Public Repos : {user.public_repos}
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="extra content">
                         
                      </div>
                </div>
            )
        })
    } 

    return (
        <div className='ui container'>
 
            {renderList(props.user)}
            <br/>
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {user : _.orderBy(Object.values(user), 'followers', 'desc')}
}

export default connect(mapStateToProps, {fetchUser})(CardList);


