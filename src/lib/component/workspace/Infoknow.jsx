import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import File from '../file/file';
import mammoth from 'mammoth';
const Infoknow = function () {
    const fileInputRef = useRef(null);
    const [filesInfo, setFilesInfo] = useState([]);
    const [selectedFileIndex, setSelectedFileIndex] = useState(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
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
        setFilesInfo((prevFiles) => [...prevFiles, ...newFilesInfo.filter(Boolean)]);
        const updatedFilesInfo = [...filesInfo, ...newFilesInfo.filter(Boolean)];
        setFilesInfo(updatedFilesInfo);
        localStorage.setItem('uploadedFiles', JSON.stringify(updatedFilesInfo));
    };
    const handleFileClick = async (index) => {
        setSelectedFileIndex(index);
        if (!filesInfo[index].content) {
            try {
                const arrayBuffer = await filesInfo[index].file.arrayBuffer();
                const result = await mammoth.convertToHtml({ arrayBuffer });
                const updatedFilesInfo = [...filesInfo];
                updatedFilesInfo[index].content = result.value;
                setFilesInfo(updatedFilesInfo);
                console.log(arrayBuffer)
            } catch (error) {
                console.error("Lỗi khi đọc file:", error);
            }
        }
    };
    const handleFileDelete = (index) => {
        const updatedFilesInfo = filesInfo.filter((_, i) => i !== index);
        setFilesInfo(updatedFilesInfo);
        localStorage.setItem('uploadedFiles', JSON.stringify(updatedFilesInfo));
    };
    console.log("select file index:", selectedFileIndex);
    console.log("file info:", filesInfo[selectedFileIndex]);
    useEffect(() => {
        const storedFilesInfo = localStorage.getItem('uploadedFiles');
        if (storedFilesInfo) {
            setFilesInfo(JSON.parse(storedFilesInfo));
        }
        
    }, []);
    return (
        <>
            <div className="pb-1 px-[18px] flex-1 max-h-full overflow-y-auto">
                {' '}
                <input
                    id="files-input"
                    style={{ display: 'none' }}
                    type="file"
                    accept=".doc,.docx"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    multiple=""
                    hidden=""
                />
                <div
                    className="flex flex-col w-full h-full max-h-[100dvh]"
                    id="collection-container"
                >
                    <div className="flex flex-row flex-1 h-full max-h-full pb-2.5">
                        <div
                            id="NgK2K5rbhk"
                            data-pane-group=""
                            data-direction="horizontal"
                            data-pane-group-id="NgK2K5rbhk"
                            style={{
                                display: 'flex',
                                lexDirection: 'row',
                                height: '100%',
                                overflow: 'hidden',
                                width: '100%',
                            }}
                        >
                            <div
                                data-pane=""
                                data-pane-id="RYykOb2KRn"
                                data-pane-group-id="NgK2K5rbhk"
                                className="h-full"
                                style={{ flex: '25 1 0px', overflow: 'hidden' }}
                            >
                                <div className="flex-shrink-0 flex py-2 rounded-2xl border border-gray-50 h-full dark:border-gray-850">
                                    <div className="flex flex-col w-full space-x-2 rounded-lg h-full">
                                        <div className="w-full h-full flex flex-col">
                                            <div className="px-3">
                                                <div className="flex py-1">
                                                    <div className="self-center ml-1 mr-3">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </div>{' '}
                                                    <input
                                                        className="w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-transparent"
                                                        placeholder="Search Collection"
                                                    />
                                                    <div>
                                                        <button
                                                            aria-controls="G4pDQaK7gn"
                                                            aria-expanded="false"
                                                            data-state="closed"
                                                            id="rCOsvHEZFB"
                                                            tabIndex="0"
                                                            data-melt-dropdown-menu-trigger=""
                                                            data-menu-trigger=""
                                                            type="button"
                                                        >
                                                            <div aria-label="Add Content" className="flex">
                                                                <button onClick={handleButtonClick}
                                                                    className="p-1.5 rounded-xl hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition font-medium text-sm flex items-center space-x-1"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 16 16"
                                                                        fill="currentColor"
                                                                        className="w-4 h-4">
                                                                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </button>
                                                        <div slot="content"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex overflow-y-auto h-full w-full scrollbar-hidden text-xs">
                                                <div className="max-h-full flex flex-col w-full">
                                                    <div className="mt-1 px-2">
                                                        {filesInfo.map((fileInfo, index) => (
                                                            <div key={index} className="mt-2">
                                                                <File onClick={() => handleFileClick(index)} fileInfo={fileInfo} onDelete={() => handleFileDelete(index)} />                                                               {/* Truyền thông tin từng file vào component File */}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="separator" tabindex="0" data-direction="horizontal" data-pane-group-id="NgK2K5rbhk" data-enabled="true" data-pane-resizer-id="qWvkY-qsq0"
                                data-pane-resizer=""
                                className="relative flex w-2 items-center justify-center bg-background group"
                                aria-controls="RYykOb2KRn"
                                aria-valuemax="50"
                                aria-valuemin="25"
                                aria-valuenow="25"
                                style={{
                                    cursor: 'ew-resize',
                                    touchAction: 'none',
                                    userSelect: 'none',
                                }}
                            >
                                <div className="z-10 flex h-7 w-5 items-center justify-center rounded-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-4 invisible group-hover:visible"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div data-pane="" data-pane-id="7qGDdAEvuP" data-pane-group-id="NgK2K5rbhk" style={{ flex: '75 1 0px', overflow: 'hidden' }}>
                                <div className="flex-1 flex justify-start h-full max-h-full">
                                    <div className="flex flex-col w-full h-full max-h-full ml-2.5">
                                        <div className="flex-1 w-full h-full max-h-full text-sm bg-transparent outline-none overflow-y-auto scrollbar-hidden">
                                            <div className="relative w-full min-w-full h-full min-h-fit input-prose-sm">
                                                <div contentEditable="true" className="ProseMirror" id translate="no">
                                                    {selectedFileIndex !== null && filesInfo[selectedFileIndex]?.content && (
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: filesInfo[selectedFileIndex].content,
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Infoknow;
