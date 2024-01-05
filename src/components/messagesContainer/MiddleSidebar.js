import React from 'react'
import ReplyBoxContainer from './ReplyBoxContainer'

import './middleSidebar.css'

const MiddleSidebar = () => {
  return (
    <div className='midsidebar__container'>
        <div className='midsidebar__header'>
          <div className='conversationID'>
            <h1>Conversation ID#</h1>
            <h2>#25685</h2>
          </div>
          <div className='midsidebar__icons'>
            <img src={require("../../images/summerize.png")} alt="summerize icon"/>
            <img src={require("../../images/tracker.png")} alt="tracker icon"/>
            <img src={require("../../images/new-ticket.png")} alt="ticket icon"/>
            <img src={require("../../images/Forward.png")} alt="Forward icon"/>
            <img src={require("../../images/show-system.png")} alt="show system info icon"/>
          </div>
        </div>
        <div className='midsidebar__replybox'>
            <ReplyBoxContainer />
        </div>
    </div>
  )
}

export default MiddleSidebar