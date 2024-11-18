import React from 'react';
import Close from '../icons/Close';
import Exam from '../icons/Exam';

const Filesidebar = ({ fileInfo, onClick, onDelete }) => {

    return (
        <div
            className="relative group p-1.5 w-60 flex items-center bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-2xl text-left"
            type="button">
            <div className="p-3 bg-black/20 dark:bg-white/10 text-white rounded-xl">
                <Exam />
            </div>
            <div className="flex flex-col justify-center -space-y-0.5 ml-1 px-2.5 w-full">
                <div className="dark:text-gray-100 text-sm font-medium line-clamp-1 mb-1">
                    {fileInfo.name}
                </div>
                <div className="flex justify-between text-gray-500 text-xs line-clamp-1">
                    Tệp <span className="capitalize">{fileInfo.size}</span>
                </div>
            </div>
            <div className="absolute -top-1 -right-1">
                <button onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
                    className="bg-gray-400 text-white border border-white rounded-full group-hover:visible invisible transition"
                    type="button">
                    <Close />
                </button>
            </div>
        </div>
    );
};

export default Filesidebar;
