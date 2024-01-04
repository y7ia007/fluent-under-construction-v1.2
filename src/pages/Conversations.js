import React from 'react'
import MainSidebar from '../components/MainSidebar'
import ChannelsSidebar from '../components/ChannelsSidebar'
import MessagesSidebar from '../components/messagesSidebar/MessagesSidebar';
import MiddleSidebar from '../components/messagesContainer/MiddleSidebar';

const Conversations = () => {
    return (
        <div className='main'>
            <MainSidebar />
            <ChannelsSidebar />
            <MessagesSidebar />
            <MiddleSidebar />
        </div>
    );
}

export default Conversations