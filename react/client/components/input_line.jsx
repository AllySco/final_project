import React from 'react'

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {
      text: ""
    }
  }


  handleTextChange(event) {
    this.setState( { text: event.target.value } )
  }

  handleOnClick() {

  }


  render() {
    return(
      <div id="input-line-container">
      <form>
      <input value={this.state.text} type="text" placeholder="type here...." name="messsage" onChange={this.handleTextChange}/>
      <button type="submit" value="Post" onClick={this.handleOnClick}>Send</button>
      </form>
      </div>
      )

  }
}

export default InputLine