import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PencilSquare from '../icons/PencilSquare';
import MenuLines from '../icons/MenuLines';
import Plus from '../icons/Plus';
import Chatname from './Chatname';
import MagnifyingGlass from '../icons/MagnifyingGlass';
import ChevronDown from '../icons/ChevronDown';
import Optinal from '../icons/Optinal';
import UserTab from './UserTab';
const Sidebar = ({ isSidebarOpen, toggleSidebar })=> {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const userMenuRef = useRef(null)
  const { id } = useParams();
  const [chatinfo, setChatinfo] = useState([]);
  const toggleSidebarMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setUserMenuOpen(false);
    }
  };
  const chats = JSON.parse(localStorage.getItem('chats')) || [];
  const selectedChat = chats.find(chat => chat.id === parseInt(id, 10));
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    const storedChats = JSON.parse(localStorage.getItem('chats')) || [];
    setChatinfo(storedChats);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div id="sidebar"
        className={`h-screen max-h-[100dvh] min-h-screen select-none md:relative w-[260px] max-w-[260px] bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-200 text-sm transition fixed z-50 top-0 left-0 overflow-x-hidden ${isSidebarOpen ? '' : 'hidden'}`}
        data-state={isSidebarOpen}>
        <div className="py-2.5 my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] overflow-x-hidden z-50 ">
          <div className="px-2.5 flex justify-between space-x-1 text-gray-600 dark:text-gray-400">
            <a
              id="sidebar-new-chat-button"
              className="flex flex-1 justify-between rounded-lg px-2 h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              href="/"
              draggable="false"
            >
              <div className="self-center mx-1.5">
                <img
                  crossOrigin="anonymous"
                  src="../imgs/favicon.png"
                  className="size-6 -translate-x-1.5 rounded-full"
                  alt="logo"
                />
              </div>
              <div className="self-center font-medium text-sm text-gray-850 dark:text-white font-primary">
                Tạo chat mới
              </div>
              <div className="self-center ml-auto">
                <PencilSquare />
              </div>
            </a>{' '}
            <button className="cursor-pointer px-2 py-2 flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition" onClick={toggleSidebar}>
              <div className="m-auto self-center" >
                <MenuLines></MenuLines>
              </div>
            </button>
          </div>
          <div className="px-2.5 flex justify-center text-gray-800 dark:text-gray-200">
            <a
              className="flex-grow flex space-x-3 rounded-lg px-2.5 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
              href="/workspace/model"
              draggable="false"
            >
              <div className="self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-[1.1rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                  ></path>
                </svg>
              </div>
              <div className="flex self-center">
                <div className="self-center font-medium text-sm font-primary">
                  Workspace
                </div>
              </div>
            </a>
          </div>
          <div className="relative ">
            <div className="absolute z-40 right-4 top-1">
              <div aria-label="New folder" className="flex">
                <button className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 transition">
                  <Plus />
                </button>
              </div>
            </div>
            <div
              className="px-2 mb-1 flex justify-center space-x-2 relative z-10"
              id="search-container"
            >
              <div className="flex w-full rounded-xl" id="chat-search">
                <div className="self-center pl-3 py-2 rounded-l-xl bg-transparent">
                  <MagnifyingGlass />
                </div>{' '}
                <input
                  className="w-full rounded-r-xl py-1.5 pl-2.5 pr-4 text-sm bg-transparent dark:text-gray-300 outline-none"
                  placeholder="Tìm kiếm"
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col flex-1 overflow-y-auto ">
            <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hidden svelte-141e0sl">
              <div className="relative px-2" draggable="true">
                <div className="w-full">
                  <div className="w-full cursor-pointer">
                    <div>
                      <div className="w-full group">
                        <div id="folder-898563dc-f187-41c6-ac9f-409dd282a85b-button"
                          className="relative w-full py-1.5 px-2 rounded-md flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition">
                          <div className="text-gray-300 dark:text-gray-600">
                            <ChevronDown></ChevronDown>
                          </div>
                          <div className="translate-y-[0.5px] flex-1 justify-start text-start line-clamp-1">
                            Untitled
                          </div>{' '}
                          <div className="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300">
                            <div
                              aria-controls="i-px6frDDM"
                              aria-expanded="false"
                              data-state="closed"
                              id="wQIKC3wriq"
                              tabIndex="0"
                              data-melt-dropdown-menu-trigger=""
                              data-menu-trigger=""
                              type="button"
                            >
                              <div aria-label="Thêm" className="flex">
                                <button className="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto">
                                  <Optinal />
                                </button>
                              </div>
                            </div>
                            <div slot="content"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative px-2 mt-0.5">
                <div className="w-full ">
                  <div className="w-full cursor-pointer">
                    <div>
                      <div className="w-full">
                        <button className="w-full py-1.5 px-2 rounded-md flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition">
                          <div className="text-gray-300 dark:text-gray-600">
                            <ChevronDown />
                          </div>
                          <div className="translate-y-[0.5px]">All chats</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div slot="content" className="w-full">
                      <div className='pt-1.5'>
                        {chatinfo.map((message, id) => (
                          <Chatname chatinfo={chatinfo} key={id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="flex flex-col font-primary">
              <div
                onClick={toggleSidebarMenu}
                aria-controls="1eV8rSjjHx"
                aria-expanded="false"
                data-state="closed"
                id="th8f8f7qHQ"
                tabIndex="0"
                data-melt-dropdown-menu-trigger=""
                data-menu-trigger=""
                type="button">
                <button className="flex items-center rounded-xl py-2.5 px-2.5 w-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">
                  <div className="self-center mr-3">
                    <img
                      src="../imgs/avt.png"
                      className="max-w-[30px] object-cover rounded-full"
                      alt="User profile"
                    />
                  </div>
                  <div className="self-center font-medium">trung</div>
                </button>
              </div>{' '}
              {isUserMenuOpen && (
                <UserTab ref={userMenuRef} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
