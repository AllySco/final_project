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
      historicMessages: [],
      messages: [],
      username: null,
      text: null
    }

    this.socket = io();
    this.socket.on('lobby', this.addMessage.bind(this))

    this.textKeyUp = this.textKeyUp.bind(this)
    this.submitChat = this.submitChat.bind(this)
  }

  componentDidMount() {
    this.getMessages()
  }

  textKeyUp(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitChat(event) {
    event.preventDefault()
    if (this.state.text !== null && this.state.text !== "" ) {
      let newMessage = { username: this.state.username, text: this.state.text }
      event.target.children[0].value = ""
      this.socket.emit('lobby', newMessage)
      this.saveMessage()
    }
  }

  saveMessage() {
    const url = 'http://localhost:5000/api/messages/'
    const request = new XMLHttpRequest()
    request.open("POST", url)
    request.setRequestHeader("Content-Type", "application/json")
    request.onload = () => {
      if (request.status === 201){
        const message = JSON.parse(request.responseText)
        this.props.onSendMessage(message)
      }
    }
    const data = {
      message:{
        text: this.state.text
      }
    }
    request.send(JSON.stringify(data))
  }

  addMessage(message) {
    var messages = this.state.messages
    let newMessages = [...messages, message]
    this.setState({
      messages: newMessages
    })
  }

  getMessages() {
    const url = 'http://localhost:5000/api/messages'
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = () => {
      if (request.status === 200) {
        const allMessages = JSON.parse(request.responseText)
        this.setState({historicMessages: allMessages})
      }
    }
    request.send()
  }


  render() {
    console.log(this.state.messages)
    const last5 = this.state.historicMessages.slice((this.state.historicMessages.length-5), (this.state.historicMessages.length))
     const last5Nodes = last5.map((message, index) => {
     return <NewMessage key={index} username={message.username} text={message.text} />
     })

    const messages = this.state.messages.map((message, index) => {
      return <NewMessage key={index} username={message.username} text={message.text} />
    })


    return(
      <div id="main-and-input-container">
      <h1>H'min Fits 'ih Mineer?!</h1>

      <div id="user-message-group-container">
      <UserContainer />
      <MessagesContainer last5Nodes={last5Nodes} messages={messages} />
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