import React, { useEffect, useState } from 'react';
const KnowledgeButton = ({ name, description, date,onClick }) => {
    return (
        <button onClick={onClick} className="flex space-x-4 cursor-pointer text-left w-full px-4 py-3 border border-gray-50 dark:border-gray-850 dark:hover:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-xl">
            <div className="w-full">
                <div className="flex items-center justify-between -mt-1">
                    <div className="font-semibold line-clamp-1 h-fit">{name}</div>
                    <div className="flex self-center">
                        <button aria-controls="7OH24GgY18"
                            aria-expanded="false"
                            data-state="closed"
                            id="bMfZqKS8k7"
                            tabIndex="0"
                            type="button">
                            <div aria-label="Thêm" className="flex">
                                <button
                                    className="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="self-center flex-1">
                    <div className="text-xs overflow-hidden text-ellipsis line-clamp-1">
                        {description}
                    </div>
                    <div className="mt-5 flex justify-between">
                        <div>
                            <div className="text-xs font-bold bg-green-500/20 text-green-700 dark:text-green-200 w-fit px-2 rounded uppercase line-clamp-1 mr-0.5">
                                Tổng hợp mọi tài liệu
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-1">
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
};
export default KnowledgeButton