import React from 'react'

class MessagesContainer extends React.Component {


  render() {

    return(
      <div id="messages-container">
        <h3>Foos yer Doos?</h3>
       {this.props.messages}
      </div>
      )

  }
}

export default MessagesContainer