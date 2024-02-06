import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Home from './containers/Home';
import Description from './components/Description/Description';
import Contacts from './components/Contacts/Contacts';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Description />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
