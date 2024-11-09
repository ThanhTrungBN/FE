import React, { useEffect,useState } from 'react';
import Chat from '../chat/Chat';
import Sidebar from '../layout/Sidebar';
import Chatbox from './chatbox'
import Navbar from '../layout/Navbar';
const Page = ({ isSidebarOpen, toggleSidebar }) => {
  
  useEffect(() => {
    document.title = 'Chat Open AI';
  }, []);
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', }}>
      <Sidebar  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`h-screen max-h-[100dvh] ${isSidebarOpen ? 'w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden' : 'w-full max-w-full flex flex-col'}`}>
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <Chat />
      </div>
    </div>
  );
};
export default Page;
