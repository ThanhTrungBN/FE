import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SettingLayout from './setting';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PencilSquare from '../icons/PencilSquare';
import MenuLines from '../icons/MenuLines';
import Plus from '../icons/Plus';
import Chatname from './Chatname';
import MagnifyingGlass from '../icons/MagnifyingGlass';
import ChevronDown from '../icons/ChevronDown';
import Optinal from '../icons/Optinal';
import UserTab from './UserTab';
import ScrollableBox from '../file/listfile';
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
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
              draggable="false">
              <div className="self-center mx-1.5">
                <img
                  crossOrigin="anonymous"
                  src="http://localhost:3000/imgs/Bricktech.png"
                  className="size-6 -translate-x-1.5 rounded-full"
                  alt="logo"/>
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
         
          <div className="relative ">        
            <div
              className="px-2 mb-1 flex justify-center space-x-2 relative z-10"
              id="search-container">
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
                          <div className="translate-y-[0.5px]">Tất cả cuộc trò chuyện</div>
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
          <ScrollableBox />
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
                      src="http://localhost:3000/imgs/Bricktech.png"
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
