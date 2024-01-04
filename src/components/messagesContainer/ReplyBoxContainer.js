import React, { useState } from 'react';
import './replyBoxContainer.css';

function ReplyBoxContainer() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, id: messages.length }]);
      setNewMessage('');
    }
  };

  return (
    <div className="App">
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
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
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}

export default ReplyBoxContainer;
