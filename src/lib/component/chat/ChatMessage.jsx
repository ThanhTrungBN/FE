import React, { useState, useRef, useEffect } from 'react';
import mockData from '../../../services/chat';
import ChatInput from './ChatInput';
import '../../../assets/index.css';
import Pencil from '../icons/Pencil'
import Copy from '../icons/Copy'
import PencilSolid from '../icons/PencilSolid'
import Read from '../icons/Read'
import Like from '../icons/Like'
import Reanswer from '../icons/Reanswer'
import Dislike from '../icons/Dislike'
import Requestion from '../icons/Requestion';
import Filesidebar from '../file/filesidebar';
const ChatMessage = function () {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');
    const [messages, setMessages] = useState([]);
    const [onlineSearch, setOnlineSearch] = useState(false)
    const inputRef = useRef(null);
    const handleInputChange = (newInputValue) => {
        console.log(newInputValue);
        setInputValue(newInputValue);
    };
    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const chatId = "1";
            const mockChatData = mockData();
            const matchedData = mockChatData.messages.find(item => item.question === inputValue);
            const newResponse = matchedData ? matchedData.answer : "Xin lỗi, tôi không hiểu câu hỏi của bạn.";
            const newMessage = { question: inputValue, answer: newResponse };
            let chats = JSON.parse(localStorage.getItem('chats')) || [];
            const chatIndex = chats.findIndex(chat => chat.id === chatId);
            if (chatIndex >= 0) {
                chats[chatIndex].messages.push(newMessage);
            } else {
                chats.push({ id: chatId, messages: [newMessage] });
            }
            localStorage.setItem('chats', JSON.stringify(chats));
            setMessages(prevMessages => [...prevMessages, newMessage]);
            if (inputRef.current) {
                inputRef.current.innerText = '';
            }
            setInputValue('');
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };
    const custom = {
        position: 'absolute',
        bottom: '10%',
        left: '5%'
    }
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('chats')) || [];
        const chatId = "1";
        const chat = storedMessages.find(chat => chat.id === chatId);
        setMessages(chat ? chat.messages : []);
    }, []);
    return (
        <>
            <div id="ufvLlxERjX" data-pane-group="" data-direction="horizontal" data-pane-group-id="ufvLlxERjX"
                className="w-full h-full" style={{ display: "flex", flexDirection: "row", height: "100%", overflow: "hidden", width: "100%", }}>
                <div data-pane="" data-pane-id="6HelleE3Af" data-pane-group-id="ufvLlxERjX" className="h-full flex w-full relative"
                    style={{ flex: "100 1 0px", overflow: "hidden", }}>
                    <div className="flex flex-col flex-auto z-10 w-full">
                        <div className="pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0 max-w-full z-10 scrollbar-hidden dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-800" id="messages-container">
                            <div className="h-full w-full flex flex-col">
                                <div className="h-full flex pt-8">
                                    <div className="w-full pt-2">
                                        {messages.map((msg, index) => (
                                            <div className="w-full" key={index} >
                                                <div className="flex flex-col justify-between px-5 mb-3 w-full max-w-5xl mx-auto rounded-lg group">
                                                    <div className="flex w-full user-message"
                                                        id="message-f3df74b9-a9eb-41ea-834b-38149062beba">
                                                        <div className="flex-auto w-0 max-w-full pl-1">
                                                            <div className="chat-user w-full min-w-full markdown-prose">
                                                                {console.log(msg.fileInfo)}
                                                                {msg.fileInfo && msg.fileInfo.length > 0 && (
                                                                    msg.fileInfo.map((fileInfo, fileIndex) => (
                                                                        <div className='mt-2.5 mb-1 w-full flex flex-col justify-end gap-1 flex-wrap'>
                                                                            <div className='self-end'>
                                                                                <Filesidebar key={fileIndex} fileInfo={fileInfo} />
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                )}
                                                                <div className="w-full" >
                                                                    <div className="flex justify-end pb-1">
                                                                        <div className="rounded-3xl max-w-[90%] px-5 py-2 bg-gray-50 dark:bg-gray-850 user-message-content dark:text-white">
                                                                            <p>{msg.question}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-end text-gray-600 dark:text-gray-500">
                                                                        <div aria-label="Chỉnh sửa" className="flex">
                                                                            <button
                                                                                className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition edit-user-message-button">
                                                                                <Pencil />
                                                                            </button>
                                                                        </div>
                                                                        <div aria-label="Sao chép" className="flex">
                                                                            <button
                                                                                className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition">
                                                                                <Copy />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-between px-5 mb-3 w-full max-w-5xl mx-auto rounded-lg group">
                                                    <div className="flex w-full message-dbf59901-ee3c-4097-87f1-b66e68b900ba svelte-icqdsw"
                                                        id="message-dbf59901-ee3c-4097-87f1-b66e68b900ba">
                                                        <div className="flex-shrink-0 mr-3"><img crossOrigin="anonymous" src="../imgs/favicon.png"
                                                            className="size-8 object-cover rounded-full -translate-y-[1px]"
                                                            alt="profile" draggable="false" /></div>
                                                        <div className="flex-auto w-0 pl-1">
                                                            <div className="self-center font-semibold mb-0.5 line-clamp-1 dark:text-white contents">Arena
                                                                Model <span
                                                                    className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5">7:53
                                                                    am</span></div>
                                                            <div>
                                                                <div
                                                                    className="chat-assistant w-full min-w-full markdown-prose svelte-icqdsw">
                                                                    <div>
                                                                        <div className="w-full flex flex-col relative dark:text-white"
                                                                            id="response-content-container">
                                                                            <div>
                                                                                <p>{msg.answer}</p>
                                                                            </div>
                                                                            {/* <div className="absolute rounded-lg mt-1 text-xs z-[9999]"
                                                                                style={{ display: 'none' }}>
                                                                                <div
                                                                                    className="flex flex-row gap-0.5 shrink-0 p-1 bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-lg shadow-xl">
                                                                                    <button
                                                                                        className="px-1 hover:bg-gray-50 dark:hover:bg-gray-800 rounded flex items-center gap-1 min-w-fit"><svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            fill="none" viewBox="0 0 24 24"
                                                                                            strokeWidth="1.5" stroke="currentColor"
                                                                  
                                                                  
                                                                                            className="size-3 shrink-0">
                                                                                            <path strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z">
                                                                                            </path>
                                                                                        </svg>
                                                                                        <div className="shrink-0">Ask</div>
                                                                                    </button> 
                                                                                    <button
                                                                                        className="px-1 hover:bg-gray-50 dark:hover:bg-gray-800 rounded flex items-center gap-1 min-w-fit"><svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            fill="none" viewBox="0 0 24 24"
                                                                                            strokeWidth="1.5" stroke="currentColor"
                                                                                            className="size-3 shrink-0">
                                                                                            <path strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18">
                                                                                            </path>
                                                                                        </svg>
                                                                                        <div className="shrink-0">Explain</div>
                                                                                    </button>
                                                                                </div>
                                                                            </div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-icqdsw">
                                                                    <div aria-label="Chỉnh sửa" className="flex">
                                                                        <button
                                                                            className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition">
                                                                            <PencilSolid />
                                                                        </button></div>
                                                                    <div aria-label="Sao chép" className="flex">
                                                                        <button
                                                                            className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button">
                                                                            <Copy />
                                                                        </button></div>
                                                                    <div aria-label="Đọc ra loa" className="flex">
                                                                        <button
                                                                            id="speak-button-dbf59901-ee3c-4097-87f1-b66e68b900ba"
                                                                            className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition">
                                                                            <Read />
                                                                        </button></div>
                                                                    <div aria-label="Trả lời tốt" className="flex"><button
                                                                        className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent"><Like /></button></div>
                                                                    <div aria-label="Trả lời KHÔNG tốt" className="flex"><button
                                                                        className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent"><Dislike /></button></div>
                                                                    <div aria-label="Tiếp tục trả lời" className="flex"><button
                                                                        type="button" id="continue-response-button"
                                                                        className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"><Requestion /></button></div>
                                                                    <div aria-label="Tạo sinh lại câu trả lời" className="flex"><button
                                                                        type="button"
                                                                        className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"><Reanswer /></button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                        <div className="pb-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-[1.6rem]">
                            <div className="w-full font-primary">
                                <div className="-mb-0.5 mx-auto inset-x-0 bg-transparent flex justify-center">
                                    <div className="flex flex-col px-2.5 max-w-6xl w-full">
                                        <div className="relative"></div>
                                        <div className="w-full relative"> </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900">
                                    <div className="max-w-6xl px-4 mx-auto inset-x-0">
                                        <ChatInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={inputRef} style={custom} onInput={handleInputChange} onKeyDown={handleKeyDown} />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-1.5 text-xs text-gray-500 text-center line-clamp-1 right-0 left-0">Hệ thống
                                có thể tạo ra nội dung không chính xác hoặc sai. Hãy kiểm chứng kỹ lưỡng thông tin trước khi tiếp
                                nhận và sử dụng.</div>
                        </div>
                    </div>
                </div>
                <div data-pane="" data-pane-id="gDf1s-DSE7" data-pane-group-id="ufvLlxERjX" className="pt-8"
                    style={{ flex: "0 1 0px", overflow: "hidden", }}></div>
            </div>
        </>
    )
}
export default ChatMessage