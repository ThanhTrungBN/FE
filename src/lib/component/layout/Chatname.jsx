import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Optinal from '../icons/Optinal';
const Chatname = ({ chatinfo }) => {
    console.log(chatinfo[0].id)
    return (
        <>
            <div className="w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium pt-5 pb-1.5">
                Hôm nay
            </div>
            <div className="w-full  relative group" draggable="true">
                <a
                    className="w-full flex justify-between rounded-lg px-[11px] py-[6px]  group-hover:bg-gray-100 dark:group-hover:bg-gray-950 whitespace-nowrap text-ellipsis"
                    href="/c/a9c60412-f61b-4457-b67d-ddaea5542976"
                    draggable="false"
                >
                    <div className="flex self-center flex-1 w-full">
                        <div className="text-left self-center overflow-hidden w-full h-[20px]">
                            {chatinfo[0].id}
                        </div>
                    </div>
                </a>
                <div className="invisible group-hover:visible from-gray-100 dark:from-gray-950 absolute right-0 top-[4px] py-1 pr-0.5 mr-1.5 pl-5 bg-gradient-to-l from-80% to-transparent">
                    <div className="flex self-center space-x-1 z-10">
                        <div aria-controls="G4ewL3-Mik" aria-expanded="false" data-state="closed" id="K4vth1xxBE" tabIndex="0"
                            data-melt-dropdown-menu-trigger=""
                            data-menu-trigger=""
                            type="button">
                            <div aria-label="Thêm" className="flex">
                                <button
                                    aria-label="Chat Menu"
                                    className="self-center dark:hover:text-white transition">
                                    <Optinal />
                                </button>
                            </div>
                        </div>
                        <div slot="content"></div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Chatname