import React from 'react'

class GroupSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  handleOnClick(event) {

  }

  handleTitleChange(event) {
    this.setState( { title: event.target.value } )
  }


  render() {
    return(
      <div id="group-select-container">
      <h3>Select A Group</h3>
      <ul>
      </ul>
      <form>
      <input type="text" value={this.state.title} placeholder="New group name" name="new-group" onChange={this.handleTitleChange} />
      </form>
      <button type="submit" onClick={ this.handleOnClick }>New Chat</button>

      </div>
      )
  }
}

export default GroupSelect