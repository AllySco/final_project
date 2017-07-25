import React from 'react'
import UserContainer from './user_container'
import MessagesContainer from './messages_container'
import GroupContainer from './group_container'
import NewMessage from '../components/new_message'
import InputLine from '../components/input_line'
import io from 'socket.io-client'


class MainAndInputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      username: null,
      text: null
    }

    this.socket = io();
    this.socket.on('lobby', this.addMessage.bind(this))

    this.textKeyUp = this.textKeyUp.bind(this)
    this.submitChat = this.submitChat.bind(this)
  }

  textKeyUp(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitChat(event) {
    event.preventDefault()
    let newMessage = { username: this.state.username, text: this.state.text }
    event.target.children[0].value = ""
    this.socket.emit('lobby', newMessage)


  }

  addMessage(message) {
    var messages = this.state.messages
    let newMessages = [...messages, message]
    this.setState({
      messages: newMessages
    })
  }



  render() {

    const messages = this.state.messages.map((message, index) => {
      return <NewMessage key={index} username={message.username} text={message.text} />
    });

    return(
      <div id="main-and-input-container">
      <h1>H'min Fits 'ih Mineer?!</h1>

      <div id="user-message-group-container">
      <UserContainer />
      <MessagesContainer messages={messages} />
      <GroupContainer />
      </div>

      <InputLine
      textKeyUp={this.textKeyUp}
      onSubmit={this.submitChat}
      />
      </div>
      )
  }
}

export default MainAndInputContainer