import React, { useState, useRef, useEffect } from 'react';
import Tab from '../layout/Tab'
import { useParams } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Infoknow from '../workspace/Infoknow';
const Infoknowledge = function ({ isSidebarOpen, toggleSidebar }) {
    const { id } = useParams();
    return (
        <>
            <div style={{ display: 'flex', height: '100%', width: '100%', }}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div
        className={`h-screen max-h-[100dvh] bg-white dark:bg-gray-900 ${isSidebarOpen ? 'w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden' : 'w-full max-w-full flex flex-col'}`}>
                    <Tab isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                    <Infoknow />
                </div>
            </div>
        </>
    )
}
export default Infoknowledge