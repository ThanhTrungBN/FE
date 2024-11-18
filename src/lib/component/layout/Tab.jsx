import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Tab = function ({ isSidebarOpen, toggleSidebar }) {
    return (
        <>
            <div className="px-3.5 my-2 bg-transparent backdrop-blur-xl">
                <div className="flex items-center gap-1">
                    <div className={`${isSidebarOpen ? 'md:hidden mr-1 self-center flex flex-none items-center' : 'mr-1 self-center flex flex-none items-center'}`}>
                        <button
                            onClick={toggleSidebar}
                            id="sidebar-toggle-button"
                            className="cursor-pointer p-1.5 flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition"
                            aria-label="Toggle Sidebar">
                            <div className="m-auto self-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="flex scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent/10 backdrop-blur-2xl p-1 touch-auto pointer-events-auto">
                        <Link
                            to="/workspace/model"
                            className="min-w-fit rounded-full p-1.5 px-3 bg-gray-50 dark:bg-gray-850 transition"
                        >
                            Mô hình
                        </Link>
                        <Link
                            to="/workspace/knowledge"
                            className="min-w-fit rounded-full p-1.5 px-3 transition"
                        >
                            Kiến thức
                        </Link>
                        <Link
                            to=""
                            className="min-w-fit rounded-full p-1.5 px-3 transition"
                        >
                            Prompt
                        </Link>
                        <Link
                            to=""
                            className="min-w-fit rounded-full p-1.5 px-3 transition"
                        >
                            Tools
                        </Link>
                        <Link
                            to=""
                            className="min-w-fit rounded-full p-1.5 px-3 transition"
                        >
                            Functions
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tab