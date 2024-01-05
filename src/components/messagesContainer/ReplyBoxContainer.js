import React, { useState, useEffect } from 'react';
import './replyBoxContainer.css';

function ReplyBoxContainer() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [textFormat, setTextFormat] = useState('');

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
    // You can update the timestamp every minute or as needed
    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        return prevMessages.map((message) => ({
          ...message,
          timeAgo: timeAgo(message.time),
        }));
      });
    }, 60); // Update every minute

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="App">
      <div className="messages-container">
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
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
      </div>
      <div className="send-container">
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
  
}

export default ReplyBoxContainer;
