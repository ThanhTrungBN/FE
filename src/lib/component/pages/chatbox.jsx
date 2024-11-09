import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import ChatMessage from '../chat/ChatMessage'
const Chatbox = function ({ isSidebarOpen, toggleSidebar }) {


    return (
        <>
            <div style={{ display: 'flex', height: '100%', width: '100%', }}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div
                    className={`h-screen max-h-[100dvh] ${isSidebarOpen ? 'w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden' : 'w-full max-w-full flex flex-col'}`}>
                    <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                    <ChatMessage />
                </div>
            </div >
        </>
    )

}
export default Chatbox