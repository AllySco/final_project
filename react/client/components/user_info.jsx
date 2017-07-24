import React from 'react'

class UserInfo extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: "",
      email: ""
    }
  }



  render() {
    return(
      <div id="user-info-container">
      <h3>Your Profile</h3>
      <ul>
      <li>Username: { this.username }</li>
      <li>Email: { this.email } </li>
      </ul>
      </div>
      )

  }
}

export default UserInfo