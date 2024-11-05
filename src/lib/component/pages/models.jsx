import React, { useState, useRef, useEffect } from 'react';
import Tab from '../layout/Tab'
import Model from '../workspace/Model'
import Sidebar from '../layout/Sidebar';
const Models = function () {
    return (
        <>
            <div style={{ display: 'flex', height: '100%', width: '100%', }}>
                <Sidebar />
                <div
                    className="h-screen max-h-[100dvh] w-full flex flex-col md:max-w-[calc(100%-260px)] md:overflow-hidden">
                    <Tab />
                    <Model />
                </div>
            </div>
        </>
    )
}
export default Models