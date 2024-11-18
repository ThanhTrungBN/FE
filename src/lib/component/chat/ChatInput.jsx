import React, { useState, useRef, useEffect } from 'react';
import SendMessageButton from '../icons/SendMessage';
import Plus from '../icons/Plus';
import FileIcon from '../icons/Fileicon'
import Mic from '../icons/Mic'
import HeadPhone from '../icons/Headphone';
import { useNavigate } from 'react-router-dom';
import mammoth from 'mammoth';
import Filesidebar from '../file/filesidebar';
const ChatInput = React.forwardRef(({ style, onKeyDown, onInput, onChange, value, onFileChange, fileInfo }, ref) => {
    const navigate = useNavigate();
    const [filesInfo, setFilesInfo] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const fileRef = useRef(null);
    const fileInputRef = useRef(null);
    const handleInput = (e) => {
        if (onInput) {
            onInput(e.target.innerHTML);
        }
    };
    const handleInputChange = (onInput) => {
        const value = onInput.target.value;
        console.log(value);
        setInputValue(value);
    };
    const handleFileDelete = (index) => {
        const updatedFilesInfo = filesInfo.filter((_, i) => i !== index);
        setFilesInfo(updatedFilesInfo);
        localStorage.setItem('uploadedFiles', JSON.stringify(updatedFilesInfo));
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
    const handleFileChange = async (event) => {
        const files = Array.from(event.target.files);
        const newFilesInfo = await Promise.all(
            files.map(async (file) => {
                if (file && file.name.endsWith('.docx')) {
                    const arrayBuffer = await file.arrayBuffer();
                    try {
                        const result = await mammoth.convertToHtml({ arrayBuffer });
                        return {
                            name: file.name,
                            size: `${(file.size / 1024).toFixed(2)} KB`,
                            content: result.value,
                            file,
                        };
                    } catch (err) {
                        console.error("Lỗi đọc file:", err);
                        return null;
                    }
                } else {
                    alert("Vui lòng tải tệp docx");
                    return null;
                }
            })
        );
        if (onFileChange) {
            onFileChange(event);
        }
        setFilesInfo((prevFiles) => [...prevFiles, ...newFilesInfo.filter(Boolean)]);
        const updatedFilesInfo = [...filesInfo, ...newFilesInfo.filter(Boolean)];
        setFilesInfo(updatedFilesInfo);
        // localStorage.setItem('uploadedFiles', JSON.stringify(updatedFilesInfo));
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
    }, [inputValue]);
    return (
        < >
            <div className="" >
                <input
                    type="file"
                    style={{ display: 'none' }}
                    hidden=""
                    multiple=""
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    accept=".doc,.docx"/>
                <form className="w-full flex gap-1.5">
                    <div className="flex-1 flex flex-col relative w-full rounded-3xl px-1.5 bg-gray-50 dark:bg-gray-850 dark:text-gray-100"
                        dir="LTR">
                        {filesInfo.length > 0 && (
                            <div className="mx-1 mt-2.5 mb-1 flex flex-wrap gap-2">
                                {filesInfo.map((fileInfo, index) => (
                                    <Filesidebar key={index} fileInfo={fileInfo} onDelete={() => handleFileDelete(index)} />
                                ))}
                            </div>
                        )}
                        <div className="flex">
                            <div className="ml-0.5 self-end mb-1.5 flex space-x-1">
                                <div aria-controls="OSZJCgEagy" aria-expanded="false" data-state="closed" id="mYHHe_tejC" tabIndex="0"
                                    onClick={toggleFile} data-melt-dropdown-menu-trigger="" data-menu-trigger=""
                                    type="button">
                                    <div aria-label="Thêm" className="flex">
                                        <button
                                            className="bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-2 outline-none focus:outline-none"
                                            type="button"
                                            aria-label="More">
                                            <FileIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="chat-input-container"
                                className="scrollbar-hidden text-left bg-gray-50 dark:bg-gray-850 dark:text-gray-100 outline-none w-full py-2.5 px-1 rounded-xl resize-none h-[48px] overflow-auto"
                                style={{ height: '48px', }}>
                                <div className="relative w-full min-w-full h-full min-h-fit input-prose">
                                    <div id="chat-input" translate="no"
                                        className="ProseMirror"
                                        style={{ height: '100%', maxHeight: '100%', minHeight: 'fit-content', outline: 'none', whiteSpace: 'pre-wrap', }}>
                                        <input
                                            type="text"
                                            ref={ref}
                                            onInput={(e) => onInput(e.target.innerText)}
                                            onChange={onChange}
                                            onKeyDown={onKeyDown}
                                            value={value}
                                            style={{ width: '100%' }}
                                            placeholder="Nhập tin nhắn của bạn..."
                                            className="w-full text-sm text-gray-900 bg-gray-50 dark:text-gray-100 dark:bg-gray-850 rounded-lg focus:ring-0 focus:outline-none border-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {value ? (
                        <SendMessageButton />
                    ) : (
                        <div className="flex items-end w-10">
                        </div>
                    )}
                </form>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }} />
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
                    data-align="start">
                    <div
                        role="menuitem"
                        tabIndex="-1"
                        data-orientation="vertical"
                        data-melt-dropdown-menu-item=""
                        data-menu-item=""
                        className="flex gap-2 items-center px-3 py-2 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-xl"
                        data-melt-menu-id="OSZJCgEagy">
                        <Plus />
                        <div className="line-clamp-1">Tải tệp lên máy chủ</div>
                    </div>
                </div>
            )}
        </>
    )
});
export default ChatInput