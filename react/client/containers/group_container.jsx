import React from 'react'
import GroupSelect from '../components/group_select'
import GroupInfo from '../components/group_info'

class GroupContainer extends React.Component {

  render() {

    return(
      <div id="group-container">

      <GroupSelect />
      <GroupInfo />

      </div>
      )
  }
}

export default GroupContainer