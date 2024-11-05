import React, { useState, useRef, useEffect } from 'react';
import MagnifyingGlass from '../icons/MagnifyingGlass';
import Plus from '../icons/Plus'
import PenilSolid from '../icons/PencilSolid'
import Optional from '../icons/Optinal'
import Upfile from '../icons/Upfile'
import Downfile from '../icons/Downfile'
const Model = function () {
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            console.log('Selected file:', files[0]);
        }
    };
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const fileInputRef = useRef(null);
    return (
        <>
            <div className="pb-1 px-[18px] flex-1 max-h-full overflow-y-auto">
                <div className="flex w-full space-x-2 mb-2.5">
                    <div className="flex flex-1">
                        <div className="self-center ml-1 mr-3"><MagnifyingGlass /></div> <input className="w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-transparent"
                            placeholder="Tìm model" />
                    </div>
                    <div><a className="px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:border-0 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition font-medium text-sm flex items-center space-x-1"
                        href="/workspace/models/create"><Plus /></a></div>
                </div>
                <div className="mb-3.5">
                    <div className="flex justify-between items-center">
                        <div className="flex md:self-center text-base font-medium px-0.5">Mô hình <div
                            className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div> <span
                                className="text-base font-medium text-gray-500 dark:text-gray-300">1</span></div>
                    </div>
                </div> <a className="flex space-x-4 cursor-pointer w-full mb-2 px-3 py-1" href="/workspace/models/create">
                    <div className="self-center w-8 flex-shrink-0">
                        <div
                            className="w-full h-8 flex justify-center rounded-full bg-transparent dark:bg-gray-700 border border-dashed border-gray-200">
                            <Plus classNameName='w-6 h-6' /></div>
                    </div>
                    <div className="self-center">
                        <div className="font-semibold line-clamp-1">Tạo model</div>
                        <div className="text-sm line-clamp-1 text-gray-500">Tùy chỉnh model cho những mục đích riêng</div>
                    </div>
                </a>
                <div className="my-2 mb-5" id="model-list">
                    <div className="flex space-x-4 cursor-pointer w-full px-3 py-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-xl"
                        id="model-item-llama3.2:latest"><a className="flex flex-1 space-x-3.5 cursor-pointer w-full"
                            href="/?models=llama3.2%3Alatest">
                            <div className="self-start w-8 pt-0.5">
                                <div className="rounded-full object-cover "><img src="../imgs/favicon.png" alt="modelfile profile"
                                    className="rounded-full w-full h-auto object-cover" /></div>
                            </div>
                            <div className="flex-1 self-center ">
                                <div aria-label="<p>a80c4f17acd55265feec403c7aef86be0c25983ab279d83f3bcd3abbcb5b8b72 <em>(2024-10-29T09:46:45.6981979+07:00)</em></p>
" className=" w-fit">
                                    <div className="font-semibold line-clamp-1">llama3.2:latest</div>
                                </div>
                                <div className="text-xs overflow-hidden text-ellipsis line-clamp-1 text-gray-500">llama3.2:latest
                                    (a80c4f17acd55265feec403c7aef86be0c25983ab279d83f3bcd3abbcb5b8b72)</div>
                            </div>
                        </a>
                        <div className="flex flex-row gap-0.5 self-center"><a
                            className="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"
                            type="button" href="/workspace/models/edit?id=llama3.2%3Alatest"><PenilSolid /></a> <button aria-controls="iozHgD7eEZ" aria-expanded="false" data-state="closed"
                                id="fYMDWp_iX6" tabIndex="0" data-melt-dropdown-menu-trigger="" data-menu-trigger="" type="button">
                                <div aria-label="Thêm" className="flex"><button
                                    className="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"
                                    type="button"><Optional /></button></div>
                            </button>
                            <div slot="content"></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full mb-3">
                    <div className="flex space-x-1"><input id="models-import-input" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} type="file" accept=".json" hidden="" /> <button
                        className="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition" onClick={handleButtonClick}>
                        <div className="self-center mr-2 font-medium line-clamp-1">Nạp model</div>
                        <div className="self-center"><Upfile /></div>
                    </button> <button
                        className="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition">
                            <div className="self-center mr-2 font-medium line-clamp-1">Tải Models về máy</div>
                            <div className="self-center"><Downfile /></div>
                        </button></div>
                </div>
                <div className="my-16">
                    <div className="text-lg font-semibold mb-3 line-clamp-1">Được tạo bởi Cộng đồng OpenWebUI</div> <a className="flex space-x-4 cursor-pointer w-full mb-2 px-3 py-2">
                        <div className="self-center w-10 flex-shrink-0">
                            <div
                                className="w-full h-10 flex justify-center rounded-full bg-transparent dark:bg-gray-700 border border-dashed border-gray-200">
                                <Plus classNameName='w-6 h-6' /></div>
                        </div>
                        <div className="self-center">
                            <div className="font-semibold line-clamp-1">Khám phá model</div>
                            <div className="text-sm line-clamp-1">Tìm kiếm, tải về và khám phá thêm các model presets</div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Model