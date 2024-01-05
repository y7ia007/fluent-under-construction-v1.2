import React from 'react'
import MainSidebar from '../components/MainSidebar'
import MessagesSidebar from '../components/messagesSidebar/MessagesSidebar';
import MiddleSidebar from '../components/messagesContainer/MiddleSidebar';
import ChannelsSidebar from '../components/channelsSidebarComponents/ChannelsSidebar';

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