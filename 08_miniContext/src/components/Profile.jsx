import React from 'react'
import { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(userContext);
    if (!user) return <div>Please Login first</div>
    return <div>Welcome {user.username}</div>
}

export default Profile