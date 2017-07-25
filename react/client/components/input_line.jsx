import React from 'react'

const InputLine = ( { onSubmit, textKeyUp, message } ) => {


  return(
    <div id="input-line-container">
      <form onSubmit={onSubmit}>
        <input className="input-message" type="text" placeholder="type here...." onKeyUp={textKeyUp}/>
        <input className="send-button" type="submit" name="submit" value="Send"/>
      </form>
    </div>
    )
}

export default InputLine