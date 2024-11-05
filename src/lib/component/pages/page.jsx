import React, { useEffect } from 'react';
import Chat from '../chat/Chat';
import Sidebar from '../layout/Sidebar';
import Chatbox from './chatbox'
import Navbar from '../layout/Navbar';
const Page = () => {
  useEffect(() => {
    document.title = 'Chat Open AI';
  }, []);

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', }}>
      <Sidebar />
      <div
        className="h-screen max-h-[100dvh] w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden">
        <Navbar />
        <Chat />
      </div>
    </div>
  );
};
export default Page;
