import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Thunder from '../icons/Thunder';
import ChatInput from './ChatInput';
import { useNavigate } from 'react-router-dom';
const Chat = function () {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [filesInfo, setFilesInfo] = useState([]);
  const fileRef = useRef(null);
  const handleInputChange = (event) => {
    if (event && event.target) {
      const inputValue = event.target.value;
      setInputValue(inputValue);
    }
    if (event && event.target) {
      const value = event.target.value;
      toggleAdviceList(value);
    }
    console.log(inputValue);
    if (!inputValue.trim()) {
      console.log("Running setIsAdviceVisible(false)");
      setIsAdviceVisible(false);
    }
  };
  const [isAdviceVisible, setIsAdviceVisible] = useState(false);
  const [consultations, setConsultations] = useState([
    'Tư vấn pháp lý về hợp đồng lao động',
    'Tư vấn pháp lý về thuế',
    'Tư vấn pháp lý về quyền sở hữu',
    'Tư vấn pháp lý về luật hôn nhân gia đình'
  ]);
  const toggleAdviceList = (inputValue) => {
    setInputValue(inputValue);
    setIsAdviceVisible(inputValue !== "");
  };
  // index.js hoặc App.js
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const chatId = `1`;
      const newMessage = {
        question: inputValue,
        answer: "Tôi có thể giúp gì bạn?",
        fileInfo: filesInfo.length > 0 ? filesInfo : [],
      };
      let chats;
      try {
        chats = JSON.parse(localStorage.getItem('chats')) || [];
      } catch (e) {
        console.error('Dữ liệu trong localStorage không hợp lệ:', e);
        chats = [];
      }
      const chatExists = chats.find(chat => chat.id === chatId);
      if (!chatExists) {
        chats.push({ id: chatId, messages: [] });
      }
      chats = chats.map(chat => {
        if (chat.id === chatId) {
          chat.messages.push(newMessage);
        }
        return chat;
      });
      localStorage.setItem('chats', JSON.stringify(chats));
      navigate(`/chat/${chatId}`);
      setInputValue('');
      setFilesInfo([]);

    }
  };
  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const newFilesInfo = files.map((file) => ({
      name: file.name,
      size: `${(file.size / 1024).toFixed(2)} KB`,
      file,
    }));
    setFilesInfo((prevFiles) => [...prevFiles, ...newFilesInfo]);
  };
  useEffect(() => {
    if (inputValue === "") {
      setIsAdviceVisible(false);
    }

  }, [isAdviceVisible, inputValue]);
  return (
    <>
      <div id="KZvIm-6wto" data-pane-group="" data-direction="horizontal" data-pane-group-id="KZvIm-6wto" className="w-full h-full"
        style={{ display: 'flex', flexDirection: 'row', height: '100%', overflow: 'hidden', width: '100%', }}>
        <div data-pane="" data-pane-id="bvaZjjpRCy" data-pane-group-id="KZvIm-6wto" className="h-full flex w-full relative"
          style={{ flex: '100 1 0px', overflow: 'hidden', }}>
          <div className="flex flex-col flex-auto z-10 w-full">
            <div className="overflow-auto w-full h-full flex items-center">
              <div className="m-auto w-full max-w-6xl px-2 xl:px-20 translate-y-6 py-24 text-center">
                <div className="w-full text-3xl text-gray-800 dark:text-gray-100 font-medium text-center flex items-center gap-4 font-primary">
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center gap-3 sm:gap-3.5 w-fit px-5">
                      <div className="flex flex-shrink-0 justify-center">
                        <div className="flex -space-x-4 mb-0.5">
                          <div aria-label="" className="flex">
                            <button>
                              <img
                                crossOrigin="anonymous"
                                src="../imgs/Bricktech.png"
                                className="size-9 sm:size-10 rounded-full border-[1px] border-gray-200 dark:border-none"
                                alt="logo"
                                draggable="false" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="capitalize text-2xl sm:text-3xl line-clamp-1">
                        Tôi có thể giúp gì cho bạn?
                      </div>
                    </div>
                    <div className="flex mt-1 mb-2">
                      <div>
                        <div
                          aria-label="<p>Gửi câu hỏi của bạn tới chatbot AI ẩn danh và bình chọn cho câu trả lời tốt nhất.</p>"
                          className=" w-fit">
                          <div className="mt-0.5 px-2 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 max-w-xl markdown">
                            <p>
                              Gửi câu hỏi của bạn tới chatbot AI ẩn danh và bình chọn cho câu trả lời tốt nhất.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-base font-normal xl:translate-x-6 md:max-w-3xl w-full py-3 ">
                      <div className="w-full font-primary">
                        <div className="-mb-0.5 mx-auto inset-x-0 bg-transparent flex justify-center">
                          <div className="flex flex-col px-2.5 max-w-6xl w-full">
                            <div className="relative"></div>
                            <div className="w-full relative"> </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900">
                          <div className="max-w-6xl px-4 mx-auto inset-x-0">
                            <ChatInput
                              value={inputValue}
                              onInput={handleInputChange}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') { e.preventDefault(); handleSendMessage(); }
                              }}
                              onChange={(e) => { const newValue = e.target.value; setInputValue(newValue); }}
                              filesInfo={filesInfo}
                              onFileChange={handleFileChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {!isAdviceVisible && (
                  <div className='mx-auto max-w-2xl'>
                    <div className="flex items-center justify-center gap-x-2 transition-opacity xl:gap-x-2.5 opacity-100 flex-nowrap">
                      <ul className="relative flex items-stretch gap-x-2 gap-y-4 overflow-hidden py-2 sm:gap-y-2 xl:gap-x-2.5 xl:gap-y-2.5 flex-wrap justify-center">
                        <li style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                          <button onClick={() => toggleAdviceList("Tư vấn")} className="group relative flex h-[42px] items-center gap-1.5 rounded-full border border-token-border-light px-3 py-2 text-start text-[13px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-[14px]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-md"
                              style={{ color: 'rgb(53, 174, 71)' }}>
                              <path d="M4.5 17.5L7.56881 14.3817C8.32655 13.6117 9.55878 13.5826 10.352 14.316L16.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M19 12H18.3798C17.504 12 16.672 11.6173 16.102 10.9524L11.898 6.04763C11.328 5.38269 10.496 5 9.6202 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M19 5H18.3798C17.504 5 16.672 5.38269 16.102 6.04763L14 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"></circle>
                              <path d="M18 14V10C18 9.58798 18.4704 9.35279 18.8 9.6L21.4667 11.6C21.7333 11.8 21.7333 12.2 21.4667 12.4L18.8 14.4C18.4704 14.6472 18 14.412 18 14Z" fill="currentColor"></path>
                              <path d="M18 7V3C18 2.58798 18.4704 2.35279 18.8 2.6L21.4667 4.6C21.7333 4.8 21.7333 5.2 21.4667 5.4L18.8 7.4C18.4704 7.64721 18 7.41202 18 7Z" fill="currentColor"></path>
                            </svg>
                            <span className="max-w-full select-none whitespace-nowrap text-gray-600 transition group-hover:text-token-text-primary dark:text-gray-500">
                              Tư vấn pháp lý
                            </span>
                          </button>
                        </li>
                        <li style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                          <button className="group relative flex h-[42px] items-center gap-1.5 rounded-full border border-token-border-light px-3 py-2 text-start text-[13px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-[14px]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-md"
                              style={{ color: 'rgb(226, 197, 65)' }}
                            >
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 3C8.41496 3 5.5 5.92254 5.5 9.53846C5.5 11.8211 6.662 13.8298 8.42476 15H15.5752C17.338 13.8298 18.5 11.8211 18.5 9.53846C18.5 5.92254 15.585 3 12 3ZM14.8653 17H9.13473V18H14.8653V17ZM13.7324 20H10.2676C10.6134 20.5978 11.2597 21 12 21C12.7403 21 13.3866 20.5978 13.7324 20ZM8.12601 20C8.57004 21.7252 10.1361 23 12 23C13.8639 23 15.43 21.7252 15.874 20C16.4223 19.9953 16.8653 19.5494 16.8653 19V16.5407C19.0622 14.9976 20.5 12.4362 20.5 9.53846C20.5 4.82763 16.6992 1 12 1C7.30076 1 3.5 4.82763 3.5 9.53846C3.5 12.4362 4.93784 14.9976 7.13473 16.5407V19C7.13473 19.5494 7.57774 19.9953 8.12601 20Z" fill="currentColor"></path>
                            </svg>
                            <span className="max-w-full select-none whitespace-nowrap text-gray-600 transition group-hover:text-token-text-primary dark:text-gray-500">
                              Tra cứu điều luật
                            </span>
                          </button>
                        </li>
                        <li style={{ opacity: '1', willChange: 'auto', transform: 'none' }}><button
                          className="group relative flex h-[42px] items-center gap-1.5 rounded-full border border-token-border-light px-3 py-2 text-start text-[13px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-[14px]"><svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="icon-md" style={{ color: 'rgb(118, 208, 235)' }}>
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M11.33 5C10.7777 5 10.33 5.44772 10.33 6V19H13.66V6C13.66 5.44771 13.2123 5 12.66 5H11.33ZM15.66 19H18C18.5523 19 19 18.5523 19 18V10C19 9.44772 18.5523 9 18 9H15.66V19ZM15.66 7V6C15.66 4.34315 14.3169 3 12.66 3H11.33C9.67315 3 8.33 4.34315 8.33 6V11H6C4.34314 11 3 12.3431 3 14V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H15.66ZM8.33 13H6C5.44771 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H8.33V13Z"
                              fill="currentColor"></path>
                          </svg><span
                            className="max-w-full select-none whitespace-nowrap text-gray-600 transition group-hover:text-token-text-primary dark:text-gray-500">Tạo tài liệu pháp lý</span></button></li>
                        <li style={{ opacity: 1, willChange: 'auto', transform: 'none' }}><button
                          className="group relative flex h-[42px] items-center gap-1.5 rounded-full border border-token-border-light px-3 py-2 text-start text-[13px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-[14px]"><svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="icon-md" style={{ color: 'rgb(234, 132, 68)' }}>
                            <path fillRule="evenodd" clipRule="evenodd"
                              d="M4 5C4 3.34315 5.34315 2 7 2H14.1716C14.9672 2 15.7303 2.31607 16.2929 2.87868L19.1213 5.70711C19.6839 6.26972 20 7.03278 20 7.82843V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7.82843C18 7.56321 17.8946 7.30886 17.7071 7.12132L14.8787 4.29289C14.6911 4.10536 14.4368 4 14.1716 4H7ZM8 10C8 9.44772 8.44772 9 9 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10ZM8 14C8 13.4477 8.44772 13 9 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H9C8.44772 15 8 14.5523 8 14Z"
                              fill="currentColor"></path>
                          </svg><span
                            className="max-w-full select-none whitespace-nowrap text-gray-600 transition group-hover:text-token-text-primary dark:text-gray-500">Phân tích tài liệu pháp lý</span></button></li>

                        <li style={{ opacity: 1, willChange: 'auto' }}>
                          <button
                            className="group relative flex h-[42px] items-center gap-1.5 rounded-full border border-token-border-light px-3 py-2 text-start text-[13px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-[14px]"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-md"
                              style={{ color: 'rgb(226, 197, 65)' }}>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 3C8.41496 3 5.5 5.92254 5.5 9.53846C5.5 11.8211 6.662 13.8298 8.42476 15H15.5752C17.338 13.8298 18.5 11.8211 18.5 9.53846C18.5 5.92254 15.585 3 12 3ZM14.8653 17H9.13473V18H14.8653V17ZM13.7324 20H10.2676C10.6134 20.5978 11.2597 21 12 21C12.7403 21 13.3866 20.5978 13.7324 20ZM8.12601 20C8.57004 21.7252 10.1361 23 12 23C13.8639 23 15.43 21.7252 15.874 20C16.4223 19.9953 16.8653 19.5494 16.8653 19V16.5407C19.0622 14.9976 20.5 12.4362 20.5 9.53846C20.5 4.82763 16.6992 1 12 1C7.30076 1 3.5 4.82763 3.5 9.53846C3.5 12.4362 4.93784 14.9976 7.13473 16.5407V19C7.13473 19.5494 7.57774 19.9953 8.12601 20Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <span className="max-w-full select-none whitespace-nowrap text-gray-600 transition group-hover:text-token-text-primary dark:text-gray-500">
                              Đưa ra các ví dụ pháp lý
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {isAdviceVisible && (
                  <div className="mx-auto max-w-2xl">
                    {consultations.map((item, index) => (
                      <div key={index} className="mx-5">
                        <button className="flex flex-col w-full border-b border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-4 py-3 rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 group">
                          <div className="flex flex-col text-left">
                            <div className="font-medium text-gray-900 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-all ease-in-out duration-300">
                              {item}
                            </div>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div data-pane=""
          data-pane-id="unViqOToNw"
          data-pane-group-id="KZvIm-6wto"
          className="pt-8"
          style={{ flex: '0 1 0px', overflow: 'hidden' }}
        ></div>
      </div>
    </>
  );
};
export default Chat;
