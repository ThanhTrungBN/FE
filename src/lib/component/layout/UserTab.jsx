import React, { useState, useRef, useEffect } from 'react';
import ArchiveBox from '../icons/ArchiveBox';
import Cog6 from '../icons/Cog6';
import Save from '../icons/Save';
import Logout from '../icons/Logout';
import Online from '../icons/Online';
const UserTab = React.forwardRef(({ style }, ref) => {
    return (
        <div ref={ref} role="menu" id="1eV8rSjjHx"
            aria-labelledby="th8f8f7qHQ"
            data-state="open"data-portal=""tabIndex="-1"data-melt-dropdown-menu=""data-menu-content=""
            className="w-full max-w-[240px] text-sm rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg font-primary"
            data-melt-menu-id="1eV8rSjjHx" data-escapee="" data-side="top" data-align="start" style={{ position: 'absolute', bottom: '10%', left: '8px',...style }}
        >
            <button className="flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div className="self-center mr-3">
                    <Cog6 />
                </div>
                <div className="self-center">Cài đặt</div>
            </button>
            <button className="flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div className="self-center mr-3">
                    <ArchiveBox />
                </div>
                <div className="self-center">Lưu các cuộc Chat</div>
            </button>
            <button className="flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div className="self-center mr-3">
                    <Save />
                </div>
                <div className="self-center">Thử nghiệm (Playground)</div>
            </button>
            <button className="flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div className="self-center mr-3">
                    <Online />
                </div>
                <div className="self-center">Trang Quản trị</div>
            </button>
            <hr className="border-gray-50 dark:border-gray-850 my-1 p-0" />{' '}
            <button className="flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <div className="self-center mr-3">
                    <Logout />
                </div>
                <div className="self-center">Đăng xuất</div>
            </button>
            <hr className="border-gray-50 dark:border-gray-850 my-1 p-0" />
            <div aria-label="" className="flex">
                <div className="flex rounded-md py-1.5 px-3 text-xs gap-2.5 items-center">
                    <div className="flex items-center">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
                        </span>
                    </div>
                    <div className="">
                        <span className="">Người dùng đang hoạt động:</span>{' '}
                        <span className="font-semibold">1</span>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default UserTab