import React from 'react'
import UserContainer from 'user_container'
import MessageContainer from 'message_container'
import GroupContainer from 'group_container'
import InputLine from '../components/input_line'

class MainAndInputContainer extends React.Component {

}


render() {

  return(
    <div id="main-and-input-container">

      <div id="user-message-group-container">
      <UserContainer />
      <MessagesContainer />
      <GroupContainer />
      </div>

      <InputLine />

    </div>
    )

}

export default MainAndInputContainer