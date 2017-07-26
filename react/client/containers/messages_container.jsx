import React from 'react'

class MessagesContainer extends React.Component {


  render() {

    return(
      <div id="messages-container">
        {this.props.last5}
        <h3>Fit Like?</h3>
       {this.props.messages}
      </div>
      )

  }
}

export default MessagesContainer