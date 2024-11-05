import React, { useState, useRef, useEffect } from 'react';
import SendMessageButton from '../icons/SendMessage';
import Plus from '../icons/Plus'
import HeadPhone from '../icons/Headphone';
import { useNavigate } from 'react-router-dom';
const ChatInput = React.forwardRef(({ style, onKeyDown, onInput, onChange, value }, ref) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const fileRef = useRef(null);
    const fileInputRef = useRef(null);
    const handleInputChange = (onInput) => {
        const value = onInput.target.innerText;
        setInputValue(value);

    };
    const [content, setContent] = useState('Tôi có thể giúp gì bạn cho hôm nay?');

    const handleInput = (e) => {
        setContent(e.target.innerText);
    };
    const [isFilerOpen, setIsFilerOpen] = useState(false);
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const toggleFile = () => {
        setIsFilerOpen(!isFilerOpen);
    };
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            console.log('Selected file:', files[0]);
        }
    };
    const handleClickOutside = (event) => {
        if (fileRef.current && !fileRef.current.contains(event.target)) {
            setIsFilerOpen(false);
        }
    };
    useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        < >
            <div className="" >
                <input
                    type="file"
                    style={{ display: 'none' }}
                    hidden=""
                    multiple=""
                />
                <form className="w-full flex gap-1.5">
                    <div
                        className="flex-1 flex flex-col relative w-full rounded-3xl px-1.5 bg-gray-50 dark:bg-gray-850 dark:text-gray-100"
                        dir="LTR"
                    >
                        <div className="flex">
                            <div className="ml-0.5 self-end mb-1.5 flex space-x-1">
                                <div aria-controls="OSZJCgEagy"aria-expanded="false"data-state="closed"id="mYHHe_tejC"tabIndex="0"
                                    onClick={toggleFile}data-melt-dropdown-menu-trigger=""data-menu-trigger=""
                                    type="button">
                                    <div aria-label="Thêm" className="flex">
                                        <button
                                            className="bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-2 outline-none focus:outline-none"
                                            type="button"
                                            aria-label="More"
                                        >
                                            <Plus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="chat-input-container"
                                className="scrollbar-hidden text-left bg-gray-50 dark:bg-gray-850 dark:text-gray-100 outline-none w-full py-2.5 px-1 rounded-xl resize-none h-[48px] overflow-auto"
                                style={{
                                    height: '48px',
                                }}>
                                <div className="relative w-full min-w-full h-full min-h-fit input-prose">
                                    <div contentEditable="true" id="chat-input" translate="no"
                                        className="ProseMirror"ref={ref} onInput={onInput} onChange={onChange} onKeyDown={onKeyDown} value={value}
                                        style={{ height: '100%',maxHeight: '100%',minHeight: 'fit-content',outline: 'none',whiteSpace: 'pre-wrap',}}>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="self-end mb-2 flex space-x-1 mr-1">
                                <div aria-label="Ghi âm" className="flex">
                                    <button
                                        id="voice-input-button"
                                        className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-1.5 mr-0.5 self-center"
                                        type="button"
                                        aria-label="Voice Input"
                                    >
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {value ? (
                        <SendMessageButton />
                    ) : (
                        <div className="flex items-end w-10">
                            <div className="flex items-center mb-1">
                                <div aria-label="Gọi" className="flex">
                                    <button
                                        className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-2 self-center"
                                        type="button"
                                        aria-label="Call"
                                    >
                                        <HeadPhone />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            {isFilerOpen && (
                <div
                    ref={fileRef}
                    role="menu"
                    id="OSZJCgEagy"
                    aria-labelledby="mYHHe_tejC"
                    data-state="open"
                    data-portal=""
                    tabIndex="0"
                    data-melt-dropdown-menu=""
                    data-menu-content=""
                    onClick={handleButtonClick}
                    className="w-full max-w-[200px] rounded-xl px-1 py-1  border-gray-300/30 dark:border-gray-700/50 z-50 bg-white dark:bg-gray-850 dark:text-white shadow"
                    style={{
                        position: 'absolute',
                        bottom: '95%',
                        left: '3%',
                        ...style
                    }}
                    data-melt-menu-id="OSZJCgEagy"
                    data-escapee=""
                    data-side="top"
                    data-align="start"
                >
                    <div
                        role="menuitem"
                        tabIndex="-1"
                        data-orientation="vertical"
                        data-melt-dropdown-menu-item=""
                        data-menu-item=""
                        className="flex gap-2 items-center px-3 py-2 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-xl"
                        data-melt-menu-id="OSZJCgEagy"
                    >
                        <Plus />
                        <div className="line-clamp-1">Tải tệp lên máy chủ</div>
                    </div>
                </div>
            )}
        </>
    )
});
export default ChatInput