import React, { useEffect, useState } from 'react';
import Generalsettings from '../setting/generalsettings';
import Interfacesettings from '../setting/interfacesettings';
const SettingLayout = () => {
    const [activeTab, setActiveTab] = useState('general');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    let content;
    switch (activeTab) {
        case 'general':
            content = <Generalsettings />;
            break;
        case 'interface':
            content = <Interfacesettings />;
            break;
        default:
            content = null;
    }
    return (
        <>
            <div className="modal fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-[9999] overflow-hidden overscroll-contain">
                <div className="m-auto max-w-full w-[48rem] mx-2 shadow-3xl max-h-[100dvh] overflow-y-auto scrollbar-hidden bg-gray-50 dark:bg-gray-900  rounded-2xl svelte-fq1rhy">
                    <div className="text-gray-700 dark:text-gray-100">
                        <div className="flex justify-between dark:text-gray-300 px-5 pt-4 pb-1">
                            <div className="text-lg font-medium self-center">Cài đặt</div> <button className="self-center"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path
                                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z">
                                </path>
                            </svg></button>
                        </div>
                        <div className="flex flex-col md:flex-row w-full px-4 pt-2 pb-4 md:space-x-4">
                            <div id="settings-tabs-container"
                                className="tabs flex flex-row overflow-x-auto space-x-1 md:space-x-0 md:space-y-1 md:flex-col flex-1 md:flex-none md:w-40 dark:text-gray-200 text-xs text-left mb-3 md:mb-0 svelte-1vx7r9s">
                                <button onClick={() => handleTabClick('general')}
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition bg-gray-100 dark:bg-gray-800">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Cài đặt chung</div>
                                </button> <button onClick={() => handleTabClick('interface')}
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                        fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M2 4.25A2.25 2.25 0 0 1 4.25 2h7.5A2.25 2.25 0 0 1 14 4.25v5.5A2.25 2.25 0 0 1 11.75 12h-1.312c.1.128.21.248.328.36a.75.75 0 0 1 .234.545v.345a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-.345a.75.75 0 0 1 .234-.545c.118-.111.228-.232.328-.36H4.25A2.25 2.25 0 0 1 2 9.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-7.5Z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Giao diện</div>
                                </button> <button
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Cá nhân hóa</div>
                                </button> <button
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                        fill="currentColor" className="w-4 h-4">
                                        <path
                                            d="M7.557 2.066A.75.75 0 0 1 8 2.75v10.5a.75.75 0 0 1-1.248.56L3.59 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.59l3.162-2.81a.75.75 0 0 1 .805-.124ZM12.95 3.05a.75.75 0 1 0-1.06 1.06 5.5 5.5 0 0 1 0 7.78.75.75 0 1 0 1.06 1.06 7 7 0 0 0 0-9.9Z">
                                        </path>
                                        <path
                                            d="M10.828 5.172a.75.75 0 1 0-1.06 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 1 0 1.06 1.06 4 4 0 0 0 0-5.656Z">
                                        </path>
                                    </svg></div>
                                    <div className="self-center">Âm thanh</div>
                                </button> <button
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                        fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M8 2C4.262 2 1 4.57 1 8c0 1.86.98 3.486 2.455 4.566a3.472 3.472 0 0 1-.469 1.26.75.75 0 0 0 .713 1.14 6.961 6.961 0 0 0 3.06-1.06c.403.062.818.094 1.241.094 3.738 0 7-2.57 7-6s-3.262-6-7-6ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Chat</div>
                                </button> <button
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                        fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Tài khoản</div>
                                </button> <button
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor" className="size-4">
                                        <path fillRule="evenodd"
                                            d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Cài đặt hệ thống</div>
                                </button> <button
                                    className="px-2.5 py-2 min-w-fit rounded-lg flex-1 md:flex-none flex text-left transition  hover:bg-gray-100 dark:hover:bg-gray-850">
                                    <div className="self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                                            clipRule="evenodd"></path>
                                    </svg></div>
                                    <div className="self-center">Giới thiệu</div>
                                </button>
                            </div>
                            {content}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default SettingLayout;