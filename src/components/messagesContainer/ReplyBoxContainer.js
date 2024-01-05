import React, { useState } from 'react';
import './replyBoxContainer.css';

function ReplyBoxContainer() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [textFormat, setTextFormat] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleTextFormatClick = (format) => {
    setTextFormat((prevFormat) => (prevFormat === format ? '' : format));
  };

  const handleSendClick = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, id: messages.length, format: textFormat }]);
      setNewMessage('');
      setTextFormat('');
    }
  };

  const handleKeyPress = (e) => {
    // Check if Enter key is pressed
    if (e.key === 'Enter' && newMessage.trim() !== '') {
      handleSendClick();
    }
  };

  return (
    <div className="App">
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.format}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
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
