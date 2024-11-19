import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../icons/ArrowLeft';
const CreateKnow = function () {
    const [Knowledge, setKnowledge] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const Knowkedge = () => {
        if (name && description) {
            const lastId = Knowledge.length > 0 ? Math.max(...Knowledge.map(item => item.id ?? 0)) : 0;
            const newId = lastId + 1;
            const newProduct = {
                id: newId,
                name,
                description,
                date: new Date().toLocaleString(),
            };
            const updatedKnowledge = [...Knowledge, newProduct];    
            setKnowledge(updatedKnowledge);
            localStorage.setItem('Knowledge', JSON.stringify(updatedKnowledge));
            setName('');
            setDescription('');
            navigate('/workspace/knowledge');
        }
    };

    useEffect(() => {

    }, []);
    return (
        <>
            <div className="pb-1 px-[18px] flex-1 max-h-full overflow-y-auto">
                <div className="w-full max-h-full">
                    <button className="flex space-x-1">
                        <div className="self-center"><ArrowLeft/></div>
                        <div className="self-center font-medium text-sm">Quay lại</div>
                    </button>
                    <form className="flex flex-col max-w-lg mx-auto mt-10 mb-10">
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-2xl font-medium font-primary mb-2.5">Create a knowledge base</div>
                            <div className="w-full flex flex-col gap-2.5">
                                <div className="w-full">
                                    <div className="text-sm mb-2">What are you working on?</div>
                                    <div className="w-full mt-1"><input value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full rounded-lg py-2 px-4 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-none"
                                        type="text" placeholder="Name your knowledge base" required="" /></div>
                                </div>
                                <div>
                                    <div className="text-sm mb-2">What are you trying to achieve?</div>
                                    <div className="w-full mt-1"><textarea value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full resize-none rounded-lg py-2 px-4 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-none"
                                        rows="4" placeholder="Describe your knowledge base and objectives"
                                        required=""></textarea></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-2">
                            <div>
                                <button onClick={Knowkedge}
                                    className="text-sm px-4 py-2 transition rounded-lg  bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 flex"
                                    type="submit">
                                    <div className="self-center font-medium">Create Knowledge</div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CreateKnow