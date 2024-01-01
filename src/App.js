import React from 'react';
import './App.css';
import MainSidebar from './components/MainSidebar';
import ChannelsSidebar from './components/ChannelsSidebar';

function App() {
  return (
    <div className='main'>
      <MainSidebar />
      <ChannelsSidebar />
    </div>
  );
}

export default App;
