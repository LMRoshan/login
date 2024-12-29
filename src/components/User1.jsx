// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'


const User1 = () => {
    const {userId, userName,} = useParams()
  return (
    <div className='container'>
      <h4>User Profile</h4>
      <ul>
        <li>User Id: {userId}</li>
        <li>User Name: {userName}</li>
      </ul>
    </div>
  )
}

export default User1
