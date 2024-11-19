import React, { useState } from 'react'
import Auth from "./lib/component/auth/auth";
import Register from './lib/component/auth/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './lib/component/pages/page.jsx';
import Addknowledge from './lib/component/pages/addknowledge.jsx';
import Infoknowledge from './lib/component/pages/infoknowledge.jsx';
import Knowkedges from './lib/component/pages/workspace.jsx';
import Models from './lib/component/pages/models.jsx';
import Chatbox from './lib/component/pages/chatbox.jsx';
import SettingLayout from './lib/component/layout/setting.jsx';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/setting" element={<SettingLayout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Page isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        <Route path="/chat/:id" element={<Chatbox isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />     
      </Routes>
    </Router>
  );
};
export default App;