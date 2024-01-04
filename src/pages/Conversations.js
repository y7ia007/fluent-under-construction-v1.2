import React from 'react'
import MainSidebar from '../components/MainSidebar'
import ChannelsSidebar from '../components/ChannelsSidebar'
import MessagesSidebar from '../components/messagesSidebar/MessagesSidebar';

const Conversations = () => {
    return (
        <div className='main'>
            <MainSidebar />
            <ChannelsSidebar />
            <MessagesSidebar />
        </div>
    );
}

export default Conversations