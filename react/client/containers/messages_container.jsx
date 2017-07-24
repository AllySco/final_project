import React from 'react'
import SentMessages from '../components/sent_messages'
import ReceivedMessages from '../components/received_messages'

class MessagesContainer extends React.Component {


  render() {

    return(
      <div id="messages-container">

      <SentMessages />
      <ReceivedMessages />

      </div>
      )

  }
}

export default MessagesContainer