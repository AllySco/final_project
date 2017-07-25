import React from 'react'

const NewMessage = ({ username, text }) => {
  return (
    <div id="message-text" className="message">
      <h3>{username}:</h3>
      <p>{text}</p>
    </div>
  )
}

export default NewMessage