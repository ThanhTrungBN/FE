import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import ChatMessage from '../chat/ChatMessage'
const Chatbox = function () {
    return (
        <>
            <div style={{ display: 'flex', height: '100%', width: '100%', }}>
                <Sidebar />
                <div
                    className="h-screen max-h-[100dvh] w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden">
                    <Navbar />
                    <ChatMessage />
                </div>
            </div >
        </>
    )

}
export default Chatbox