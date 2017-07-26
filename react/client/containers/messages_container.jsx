import React from 'react'

class MessagesContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="messages-container">
        {this.props.last5Nodes}
        <h3>The future ain’t what it used to be</h3>
        {this.props.messages}
      </div>
      )

  }
}

export default MessagesContainer