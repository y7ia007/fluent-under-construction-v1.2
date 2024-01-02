import React from 'react'
import MainSidebar from '../components/MainSidebar'
import ChannelsSidebar from '../components/ChannelsSidebar'

const Conversations = () => {
    return (
        <div className='main'>
            <MainSidebar />
            <ChannelsSidebar />
        </div>
    );
}

export default Conversations