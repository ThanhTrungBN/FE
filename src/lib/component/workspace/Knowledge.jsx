import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MagnifyingGlass from '../icons/MagnifyingGlass';
import Plus from '../icons/Plus';
import KnowledgeButton from './KnowledgeButton';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Knowledge = function () {
    const navigate = useNavigate();
    const [knowledgeData, setKnowledgeData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleOpenItem = (id) => {
        const numericId = Number(id);

        const item = knowledgeData.find(item => item.id === numericId);

        console.log("Navigating to ID:", numericId);
        if (item) {
            navigate(`/workspace/knowledge/${numericId}`);
        } else {
            console.error("Item not found!");
        }

    };
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("Knowledge")) || [];
        setKnowledgeData(storedData);
    }, []);
    return (
        <>
            <div className="pb-1 px-[18px] flex-1 max-h-full overflow-y-auto">
                <div className="flex w-full space-x-2 mb-2.5">
                    <div className="flex flex-1">
                        <div className="self-center ml-1 mr-3">
                            <MagnifyingGlass />
                        </div>{' '}
                        <input
                            className="w-full text-sm pr-4 py-1 rounded-r-xl outline-none bg-transparent"
                            placeholder="Search Knowledge"
                        />
                    </div>
                    <div>
                        <Link to="/workspace/create">
                            <button
                                className="px-2 py-2 rounded-xl border border-gray-50 dark:border-gray-800 dark:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition font-medium text-sm flex items-center space-x-1"
                                aria-label="Create Knowledge"
                            >
                                <Plus />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mb-3.5">
                    <div className="flex justify-between items-center">
                        <div className="flex md:self-center text-base font-medium px-0.5">
                            Kiến thức{' '}
                            <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"></div>{' '}
                            <span className="text-base font-medium text-gray-500 dark:text-gray-300">
                                0
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-3 mb-5 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {knowledgeData.map((item, index) => (
                        <KnowledgeButton
                            onClick={() => handleOpenItem(item.id)}
                            key={index}
                            name={item.name}
                            description={item.description}
                            date={item.date}
                        />
                    ))}

                </div>
                <div className="text-gray-500 text-xs mt-1 mb-2">
                    ⓘ Use '#' in the prompt input to load and include your knowledge.
                </div>
            </div>
        </>
    );
};
export default Knowledge;
