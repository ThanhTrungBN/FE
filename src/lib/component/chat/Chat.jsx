import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Thunder from '../icons/Thunder';
import ChatInput from './ChatInput';
import { useNavigate } from 'react-router-dom';
const Chat = function () {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const fileRef = useRef(null);
  const handleInputChange = (event) => {
    const value = event.target.innerText;
    setInputValue(value);
  };
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const chatId = `1`;
      const newMessage = {
        question: inputValue,
        answer: "Tôi có thể giúp gì cho bạn?",
      };
      let chats = JSON.parse(localStorage.getItem('chats')) || [];
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
      console.log(localStorage.getItem('chats'));
    }
  };

  return (
    <>
      <div id="KZvIm-6wto" data-pane-group="" data-direction="horizontal" data-pane-group-id="KZvIm-6wto" className="w-full h-full"
        style={{ display: 'flex', flexDirection: 'row', height: '100%', overflow: 'hidden', width: '100%', }}
      >
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
                                src="../imgs/favicon.png"
                                className="size-9 sm:size-10 rounded-full border-[1px] border-gray-200 dark:border-none"
                                alt="logo"
                                draggable="false" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="capitalize text-3xl sm:text-4xl line-clamp-1">
                        Arena Model
                      </div>
                    </div>
                    <div className="flex mt-1 mb-2">
                      <div>
                        <div
                          aria-label="<p>Submit your questions to anonymous AI chatbots and vote on the best response.</p>"
                          className=" w-fit">
                          <div className="mt-0.5 px-2 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 max-w-xl markdown">
                            <p>
                              Submit your questions to anonymous AI chatbots
                              and vote on the best response.
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
                            <ChatInput value={inputValue}
                              onInput={handleInputChange}
                              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-2xl font-primary">
                  <div className="mx-5">
                    <div className="mb-1 flex gap-1 text-sm font-medium items-center text-gray-400 dark:text-gray-600">
                      <Thunder />
                      Gợi ý một số mẫu prompt
                    </div>
                    <div className="h-40 max-h-full overflow-auto scrollbar-none ">
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Explain options trading
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            if I'm familiar with buying and selling stocks
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Tell me a fun fact
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            about the Roman Empire
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Help me study
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            vocabulary for a college entrance exam
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Give me ideas
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            for what to do with my kids' art
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Show me a code snippet
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            of a website's sticky header
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Grammar check
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            rewrite it for better readability
                          </div>
                        </div>
                      </button>
                      <button className="flex flex-col flex-1 shrink-0 w-full justify-between px-3 py-2 rounded-xl bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition group">
                        <div className="flex flex-col text-left">
                          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1">
                            Overcome procrastination
                          </div>
                          <div className="text-xs text-gray-500 font-normal line-clamp-1">
                            give me tips
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-pane=""
          data-pane-id="unViqOToNw"
          data-pane-group-id="KZvIm-6wto"
          className="pt-8"
          style={{ flex: '0 1 0px', overflow: 'hidden'}}
        ></div>
      </div>
    </>
  );
};
export default Chat;
