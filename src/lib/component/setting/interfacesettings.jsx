import React, { useState } from 'react';

const Interfacesettings = () => {
    return (
        <>
            <div className="flex-1 md:min-h-[28rem]">
                <form className="flex flex-col h-full justify-between space-y-3 text-sm"><input type="file" hidden="" accept="image/*" />
                    <div className="space-y-3 pr-1.5 overflow-y-scroll max-h-[25rem] scrollbar-hidden">
                        <div className="space-y-1 mb-3">
                            <div className="mb-2">
                                <div className="flex justify-between items-center text-xs">
                                    <div className="text-sm font-medium">Model mặc định</div>
                                </div>
                            </div>
                            <div className="flex-1 mr-2"><select
                                className="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-none"
                                placeholder="Select a model">
                                <option value="" disabled="">Chọn mô hình</option>
                                <option value="arena-model" className="bg-gray-100 dark:bg-gray-700">Arena Model</option>
                                <option value="llama3.2:latest" className="bg-gray-100 dark:bg-gray-700">llama3.2:latest</option>
                            </select></div>
                        </div>
                        <hr className="dark:border-gray-850" />
                        <div>
                            <div className="mb-1.5 text-sm font-medium">Giao diện</div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Landing Page Mode</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Mặc định</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Bảng chat</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Bật</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Hiển thị tên người sử dụng thay vì 'Bạn' trong nội dung chat
                                    </div> <button className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                        className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Chế độ màn hình rộng</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Hướng chat</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">LTR</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Toast notifications for new updates</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Bật</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Truyền tải các khối phản hồi bên ngoài lớn một cách trôi chảy
                                    </div> <button className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                        className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Cuộn xuống dưới cùng khi chuyển đổi giữa các nhánh</div>
                                    <button className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                        className="ml-2 self-center">Bật</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Rich Text Input for Chat</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Bật</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Hình nền trò chuyện</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Upload</span></button>
                                </div>
                            </div>
                            <div className="my-1.5 text-sm font-medium">Trò chuyện</div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Tự động Tạo Tiêu đề</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Bật</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Chat Tags Auto-Generation</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Bật</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Tự động Sao chép Phản hồi vào clipboard</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Cho phép sử dụng vị trí người dùng</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Phản hồi xúc giác</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div className="my-1.5 text-sm font-medium">Giọng nói</div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Cho phép gián đoạn giọng nói trong cuộc gọi</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs">Hiển thị Emoji trong cuộc gọi</div> <button
                                        className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                            className="ml-2 self-center">Tắt</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end text-sm font-medium"><button
                        className="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"
                        type="submit">Lưu</button></div>
                </form>
            </div>
        </>
    )
}
export default Interfacesettings