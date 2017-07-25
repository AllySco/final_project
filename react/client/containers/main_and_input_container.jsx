import React from 'react'
import UserContainer from './user_container'
import MessagesContainer from './messages_container'
import GroupContainer from './group_container'
import InputLine from '../components/input_line'

class MainAndInputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      username: null,
      text: null
    }
  }

  textKeyup(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitChat(event) {
    event.preventDefault()
  }

  addMessage(message) {
    var messages = this.state.messages
    let newMessage = {username: this.state.username, text: this.state.text }
  }


  render() {

    const messages = this.state.messages.map((message, index) => {
        return <Message key={index} username={message.username} text={message.text} />
      });

    return(
      <div id="main-and-input-container">
      <h1>H'min Fits 'ih Mineer?!</h1>

      <div id="user-message-group-container">
      <UserContainer />
      <MessagesContainer />
      <GroupContainer />
      </div>

      <InputLine
      textKeyup={this.textKeyUp}
      onSubmit={this.submitChat}/>

      </div>
      )
  }
}

export default MainAndInputContainer