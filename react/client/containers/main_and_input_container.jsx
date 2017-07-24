import React from 'react'
import UserContainer from './user_container'
import MessagesContainer from './messages_container'
import GroupContainer from './group_container'
import InputLine from '../components/input_line'

class MainAndInputContainer extends React.Component {


  render() {

    return(
      <div id="main-and-input-container">
      <h1>H'min Fits 'ih Mineer?!</h1>

      <div id="user-message-group-container">
      <UserContainer />
      <MessagesContainer />
      <GroupContainer />
      </div>

      <InputLine />

      </div>
      )
  }
}

export default MainAndInputContainer