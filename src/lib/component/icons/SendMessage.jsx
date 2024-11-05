import React from 'react';

const SendMessageButton = () => {
    return (
        <div className="flex items-end w-10" >
            <div className="flex items-center mb-1">
                <div aria-label="Gửi yêu cầu" className="flex">
                    <button
                        id="send-message-button"
                        className="bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full p-1.5 m-0.5 self-center"
                        type="submit"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 16 16" 
                            fill="currentColor" 
                            className="size-6"
                        >
                            <path 
                                fillRule="evenodd"
                                d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendMessageButton;
