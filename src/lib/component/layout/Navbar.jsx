import React, { useState, useRef, useEffect } from 'react';
import UserTab from './UserTab';
import Selector from './Selector';
import ChevronDown from '../icons/ChevronDown';
import Plus from '../icons/Plus';
import Control from '../icons/Control'
const Navbar = function ({ isSidebarOpen, toggleSidebar }) {
    const [isUserMenu, setIsUserMenu] = useState(false);
    const [isleSelector, setToggleSelector] = useState(false);
    const sidebarRef = useRef(null);
    const selectorRef = useRef(null)
    const toggleSidebarMenu = () => {
        setIsUserMenu(!isUserMenu);
    };
    const toggleSelector = () => {
        setToggleSelector(!isleSelector);
    };
    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsUserMenu(false);
        }
        if (selectorRef.current && !selectorRef.current.contains(event.target)) {
            setToggleSelector(false);
        }
    };
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Kiểm tra trạng thái dark mode đã lưu trong localStorage
        return localStorage.getItem('darkMode') === 'true';
    });
    const handleToggle = () => {
        setIsDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('darkMode', newMode); // Lưu lại trạng thái
            return newMode;
        });
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.documentElement.classList.toggle('dark', isDarkMode);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDarkMode]);
    const customStyle = {
        position:'absolute',top: '7%',height:'36%',right:0
    }
    return (
        <>
            <div className="sticky top-0 z-30 w-full px-1 py-2 -mb-8 flex items-center">
                <div className="bg-gradient-to-b via-50% from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent pointer-events-none absolute inset-0 -bottom-7 z-[-1] blur"></div>
                <div className="flex max-w-full w-full mx-auto px-2 pt-0.5 bg-transparent">
                    <div className="flex items-center w-full max-w-full">
                        <div className={`${isSidebarOpen ? 'md:hidden mr-2 self-start flex flex-none items-center text-gray-600 dark:text-gray-400' : 'mr-2 self-start flex flex-none items-center text-gray-600 dark:text-gray-400'} `}>
                            <button
                                onClick={toggleSidebar}
                                id="sidebar-toggle-button"
                                className="cursor-pointer px-2 py-2 flex rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition"
                                aria-label="Toggle Sidebar">
                                <div className="m-auto self-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="size-5">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="flex-1 overflow-hidden max-w-full">
                            <div className="flex flex-col w-full items-start">
                                <div className="flex w-full max-w-fit">
                                    <div className="overflow-hidden w-full">
                                        <div className="mr-1 max-w-full">
                                            <button aria-controls="SHnEtbdIND" aria-expanded="false" data-state="closed"
                                                id="model-selector-0-button" tabIndex="0" data-melt-dropdown-menu-trigger=""
                                                data-menu-trigger=""
                                                onClick={toggleSelector}
                                                type="button"
                                                className="relative w-full font-primary"
                                                aria-label="Chọn mô hình">
                                                <div className="flex w-full text-left px-0.5 outline-none bg-transparent truncate text-lg justify-between font-medium placeholder-gray-400 focus:outline-none dark:text-white svelte-141e0sl">
                                                    Arena Model
                                                    <ChevronDown />
                                                </div>
                                            </button>                                        
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="absolute text-left mt-[1px] ml-1 text-[0.7rem] text-gray-500 font-primary">
                                <button>Đặt làm mặc định</button>
                            </div>
                        </div>
                        
                        <div className="self-start flex flex-none items-center text-gray-600 dark:text-gray-400">                           
                            <div aria-label="Tạo chat mới" className="flex">
                                <button
                                    id="new-chat-button"
                                    className="flex md:hidden cursor-pointer px-2 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition"
                                    aria-label="New Chat">
                                    <div className="m-auto self-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-5 h-5">
                                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
                                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>{' '}
                            <div
                                aria-controls="e-eKQ490oM"
                                aria-expanded="false"
                                data-state="closed"
                                id="eIq1LU2tH8"
                                tabIndex="0"
                                data-melt-dropdown-menu-trigger=""
                                data-menu-trigger=""
                                type="button">
                                <button
                                    className="select-none flex rounded-xl p-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-850 transition"
                                    aria-label="User Menu"
                                    onClick={toggleSidebarMenu}>
                                    <div className="self-center">
                                        <img src="../imgs/avt.png" alt="" className="size-6 object-cover rounded-full" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isUserMenu && (
                <UserTab ref={sidebarRef} style={customStyle} />
            )}
            {isleSelector
                && (
                    <Selector ref={selectorRef} />
                )
            }
        </>

    )
}
export default Navbar