import React from 'react'
import './channelsSidebar.css';
import { ReactComponent as Plus } from "../../images/plus-icon.svg";


const ListContainer = ({ headerTitle }) => 
{
  return (
    <div className='list__container'>
        <div className='list__header'>
          {headerTitle}
        <div className="icon__item">
          <Plus className="Unassigned" />
        </div>
        </div>
    </div>
    
  )
}

export default ListContainer;