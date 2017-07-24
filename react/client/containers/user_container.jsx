import React from 'react'
import UserInfo from '../components/user_info'
import OnlineUsers from '../components/online_users'

class UserContainer extends React.Component {


  render() {

    return(
      <div id="user-container">

      <UserInfo />
      <OnlineUsers />

      </div>
      )

  }
}

export default UserContainer