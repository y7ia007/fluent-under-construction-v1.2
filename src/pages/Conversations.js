import React from 'react'
import MainSidebar from '../components/MainSidebar'
import ChannelsSidebar from '../components/ChannelsSidebar'
import MessagesSidebar from '../components/messagesSidebar/MessagesSidebar';
import MessagesContainer from '../components/messagesContainer/MessagesContainer';

const Conversations = () => {
    return (
        <div className='main'>
            <MainSidebar />
            <ChannelsSidebar />
            <MessagesSidebar />
            <MessagesContainer />
        </div>
    );
}

export default Conversations