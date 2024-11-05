import React from 'react';
import Auth from "./lib/component/auth/auth";
import Register from './lib/component/auth/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './lib/component/pages/page.jsx';
import Addknowledge from './lib/component/pages/addknowledge.jsx';
import Infoknowledge from './lib/component/pages/infoknowledge.jsx';
import Knowkedges from './lib/component/pages/workspace.jsx';
import Models from './lib/component/pages/models.jsx';
import Chatbox from './lib/component/pages/chatbox.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Page />} />
        <Route path="/chat/:id" element={<Chatbox />} />
        <Route path="/workspace/knowledge" element={<Knowkedges />} />
        <Route path="/workspace/model" element={<Models />} />
        <Route path="/workspace/create" element={<Addknowledge />} />
        <Route path="/workspace/knowledge/:id" element={<Infoknowledge />} />
      </Routes>
    </Router>
  );
};
export default App;