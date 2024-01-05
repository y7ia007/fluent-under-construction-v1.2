import React, { useState, useEffect, useRef } from 'react';
import './replyBoxContainer.css';

function ReplyBoxContainer() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [textFormat, setTextFormat] = useState('');

  const messagesContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const timeAgo = (timestamp) => {
    const currentTimestamp = new Date().getTime();
    const messageTimestamp = new Date(timestamp).getTime();
    const timeDifference = currentTimestamp - messageTimestamp;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} sec ago`;
    } else if (minutes < 60) {
      return `${minutes} min ago`;
    } else if (hours < 24) {
      return `${hours} hr ago`;
    } else {
      return `${days} d ago`;
    }
  };

  const handleSendClick = () => {
    if (newMessage.trim() !== '') {
      const currentTime = new Date().toISOString();
      const channelTitle = "DM To @alt_care";
      const agentName = "Ahmed bin Said";

      setMessages([
        ...messages,
        {
          text: newMessage,
          id: messages.length,
          format: textFormat,
          agentName: agentName,
          time: currentTime,
          channelTitle: channelTitle,
        },
      ]);

      setNewMessage('');
      setTextFormat('');
    }
  };

  useEffect(() => {
    // Update the timestamp every minute or as needed
    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        return prevMessages.map((message) => ({
          ...message,
          timeAgo: timeAgo(message.time),
        }));
      });
    }, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, [messages]);

  // Scroll to the bottom of the messages container whenever it is updated
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="messages-container" ref={messagesContainerRef}>
        {messages.map((message) => (
          <div key={message.id} className={`message-container ${message.format}`}>
            <div className="message-content">
              <div className="message-text">
                <div className="message-info">
                  <div className="agent-name">{message.agentName}</div>
                  <div className="message-time">{message.timeAgo}</div>
                </div>
                {message.text}
                <div className="channel-title">{message.channelTitle}</div>
                <div className="icons-container">
                  <span className="icon">
                    <img src={require("../../images/open-original.png")} alt="agent open original" />
                  </span>
                  <span className="icon">
                    <img src={require("../../images/more-options.png")} alt="more options" />
                  </span>
                </div>
              </div>
              <div className="avatar">
                <img src={require("../../images/avatar3.png")} alt="agent avatar" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <div className='reply__tabs'>
          <div className='reply__active'>
            Reply
          </div>
          <div className='reply'>
            Note
          </div>
          <div className='reply'>
            Close
          </div>
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Write your reply here ... start with / to use canned responce"
        />
        <div className="send-container">
          <div className='reply__options'>
            <div className="item">
              <img src={require("../../images/A.png")} alt="text format" />
            </div>
            <div className="item">
              <img src={require("../../images/emote-smile.png")} alt="emoji" />
            </div>
            <div className="item">
              <img src={require("../../images/image-1.png")} alt="Image Attachement" />
            </div>
            <div className="item">
              <img src={require("../../images/gif.png")} alt="GIF" />
            </div>
            <div className="item">
              <img src={require("../../images/microphone.png")} alt="send voice" />
            </div>
            <div className="item">
              <img src={require("../../images/attachment.png")} alt="attachment" />
            </div>
            <div className="item">
              <img src={require("../../images/list-pointers.png")} alt="list" />
            </div>
            <div className="item">
              <img src={require("../../images/AI.png")} alt="AI" />
            </div>
          </div>
          <button className='primary__button' onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ReplyBoxContainer;
