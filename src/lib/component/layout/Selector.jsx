import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SelectorData from '../../../services/selector';
import ChatBubbleOval from '../icons/ChatBubbleOval';
import MagnifyingGlass from '../icons/MagnifyingGlass'
const Selector = React.forwardRef(({ style }, ref) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = SelectorData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div ref={ref}
                role="menu"
                id="tzMi0AiYNS"
                aria-labelledby="model-selector-0-button"
                data-state="open"
                data-portal=""
                tabIndex="-1"
                data-melt-dropdown-menu=""
                data-menu-content=""
                className=" z-40 w-[32rem] max-w-[calc(100vw-1rem)] justify-start rounded-xl  bg-white dark:bg-gray-850 dark:text-white shadow-lg  outline-none"
                data-melt-menu-id="tzMi0AiYNS"
                data-escapee=""
                data-side="bottom"
                data-align="start"
                style={{ position: 'absolute', top: '45px', left: '272px' }}
            >
                <div className="flex items-center gap-2.5 px-5 mt-3.5 mb-3">
                    <MagnifyingGlass />
                    <input
                        id="model-search-input"
                        className="w-full text-sm bg-transparent outline-none"
                        placeholder="Tìm model"
                        autocomplete="off"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <hr className="border-gray-50 dark:border-gray-800" />
                <div className="px-3 my-2 max-h-64 overflow-y-auto scrollbar-hidden group svelte-141e0sl">
                    {filteredData.map((item) => (
                        <button
                            key={item.id}
                            aria-label="model-item"
                            className="flex w-full text-left font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <img src="../imgs/favicon.png"
                                    alt="Model"
                                    className="rounded-full size-5 flex items-center mr-2"/>
                                {item.name}
                            </div>
                        </button>
                    ))}
                </div>
                <hr className="border-gray-50 dark:border-gray-800" />
                <div className="flex items-center mx-2 my-2">
                    <button className="flex justify-between w-full font-medium line-clamp-1 select-none items-center rounded-button py-2 px-3 text-sm text-gray-700 dark:text-gray-100 outline-none transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-[highlighted]:bg-muted">
                        <div className="flex gap-2.5 items-center">
                            <ChatBubbleOval />
                            Chat nháp
                        </div>
                        <div>
                            <button
                                data-state="unchecked"
                                type="button"
                                role="switch"
                                aria-checked="false"
                                data-melt-switch=""
                                data-switch-root=""
                                className="flex h-5 min-h-5 w-9 shrink-0 cursor-pointer items-center rounded-full px-[3px] mx-[1px] transition  bg-gray-200 dark:bg-transparent outline outline-1 outline-gray-100 dark:outline-gray-800"
                            >
                                <span
                                    className="pointer-events-none block size-4 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "
                                    data-switch-thumb=""
                                    data-state="unchecked"
                                ></span>
                            </button>
                            <input
                                type="checkbox"
                                aria-hidden="true"
                                hidden="true"
                                tabIndex="-1"
                                name=""
                                value="on"
                                data-melt-switch-input=""
                                style={{
                                    position: 'absolute',
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    margin: '0px',
                                    transform: 'translateX(-100%)',
                                }}
                            />
                        </div>
                    </button>
                </div>
                <div className="hidden w-[42rem]"></div>
                <div className="hidden w-[32rem]"></div>
            </div>
        </>
    );
});
export default Selector;
