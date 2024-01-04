import React from 'react';
import { useState } from 'react';

const MessagePreview = (props) => {
    const { image, name, username, incomingChannelIcon, messageContent, watching, slaTime } = props;

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className={`message-item ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
            <div className='image__checkbox'>
                <img src={require(`../../images/${image}`)} alt={name} className="user-image" />
                <input type="checkbox" />
            </div>
            <div className='preview__content'>
                <div className='message__data'>
                    <div className="user-details">
                        <h2>{name}</h2>
                        <p>{username}</p>
                    </div>
                    <div className='incomming__channel'>
                        <img src={require(`../../images/${incomingChannelIcon}`)} alt="Incoming Channel" className="channel-icon" />
                        <div className='badge'>
                            2
                        </div>
                    </div>
                </div>
                <div className='content__preview'>
                    <p>{messageContent}</p>
                </div>
                <div className='sla__watching__agent'>
                    {watching && (
                        <div className='watching'>
                            <div className='avatar__group'>
                                <img src={require(`../../images/${watching}`)} alt="watching" className="watching" />
                                <img src={require(`../../images/${watching}`)} alt="watching" className="watching" />
                                <img src={require(`../../images/${watching}`)} alt="watching" className="watching" />
                            </div>
                            <p>Watching...</p>
                        </div>
                    )}
                    <div className='sla' style={{ marginLeft: 'auto' }}>
                        {slaTime}
                    </div>
                </div>
            </div>      
        </div>
    );
};

export default MessagePreview;
