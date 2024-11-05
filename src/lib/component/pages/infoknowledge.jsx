import React, { useState, useRef, useEffect } from 'react';
import Tab from '../layout/Tab'
import { useParams } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import Infoknow from '../workspace/Infoknow';
const Infoknowledge = function () {
    const { id } = useParams();
    return (
        <>
            <div style={{ display: 'flex', height: '100%', width: '100%', }}>
                <Sidebar />
                <div
                    className="h-screen max-h-[100dvh] w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden">
                    <Tab />
                    <Infoknow />
                </div>
            </div>
        </>
    )
}
export default Infoknowledge