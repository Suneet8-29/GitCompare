import React, { useEffect } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import { fetchUser } from '../action'
import {url} from '../url/dynamicUrl'



const CardList = (props) => {

    let query = url();

    useEffect(() => {
        const users = query.get('usernames');
        
        if (users) {
            const userList = users.split(',');
            
            userList.forEach(user => {
            props.fetchUser(user);
        })
        }
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    const renderList = (users) => {
        
        if (users.length > 0) {
            const x = users.map(user => {
                return user.login;
            })
             
            window.history.pushState({}, '', `?usernames=${x.toString()}`)
        }
        
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


