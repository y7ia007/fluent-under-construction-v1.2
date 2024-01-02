import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Conversations from './pages/Conversations';
import Tickets from './pages/Tickets';
import Contacts from './pages/Contacts';
import HelpCenter from './pages/HelpCenter';
import Performance from './pages/Performance';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Conversations /></div>} />
        <Route path='Tickets' element={<div><Tickets /></div>} />
        <Route path='Contacts' element={<div><Contacts /></div>} />
        <Route path='HelpCenter' element={<div><HelpCenter /></div>} />
        <Route path='Performance' element={<div><Performance /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
