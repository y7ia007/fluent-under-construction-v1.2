import React from 'react'
import ReplyBoxContainer from './ReplyBoxContainer'

import './middleSidebar.css'

const MiddleSidebar = () => {
  return (
    <div className='midsidebar__container'>
        <div className='midsidebar__header'>
            Header
        </div>
        <div className='midsidebar__content'>
            Content
        </div>
        <div className='midsidebar__replybox'>
            <ReplyBoxContainer />
        </div>
    </div>
  )
}

export default MiddleSidebar