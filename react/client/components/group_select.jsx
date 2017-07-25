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
      <input id="select-group-input" type="text" value={this.state.title} placeholder="New group name" name="new-group" onChange={this.handleTitleChange} />
      </form>
      <input id="group-input-button" type="submit" onClick={ this.handleOnClick } value="Add New Group" />

      </div>
      )
  }
}

export default GroupSelect