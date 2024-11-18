import React, { useState } from 'react';

const Generalsettings = () => {

    return (
        <>
            <div className="flex-1 md:min-h-[28rem]">
                <div className="flex flex-col h-full justify-between text-sm">
                    <div className="pr-1.5 overflow-y-scroll max-h-[25rem]">
                        <div className="">
                            <div className="mb-1 text-sm font-medium">Cài đặt WebUI</div>
                            <div className="flex w-full justify-between">
                                <div className="self-center text-xs font-medium">Chủ đề</div>
                                <div className="flex items-center relative"><select
                                    className="dark:bg-gray-900 w-fit pr-8 rounded py-2 px-2 text-xs bg-transparent outline-none text-right"
                                    placeholder="Select a theme">
                                    <option value="system">⚙️ Hệ thống</option>
                                    <option value="dark">🌑 Tối</option>
                                    <option value="oled-dark">🌃 OLED Dark</option>
                                    <option value="light">☀️ Sáng</option>
                                    <option value="her">🌷 Her</option>
                                </select></div>
                            </div>
                            <div className="flex w-full justify-between">
                                <div className="self-center text-xs font-medium">Ngôn ngữ</div>
                                <div className="flex items-center relative"><select
                                    className="dark:bg-gray-900 w-fit pr-8 rounded py-2 px-2 text-xs bg-transparent outline-none text-right"
                                    placeholder="Select a language">
                                    <option value="en-US">English (US)</option>
                                    <option value="en-GB">English (GB)</option>
                                    <option value="ar-BH">Arabic (عربي)</option>
                                    <option value="bn-BD">Bengali (বাংলা)</option>
                                    <option value="bg-BG">Bulgarian (български)</option>
                                    <option value="ca-ES">Catalan (català)</option>
                                    <option value="ceb-PH">Cebuano (Filipino)</option>
                                    <option value="da-DK">Danish (Denmark)</option>
                                    <option value="de-DE">German (Deutsch)</option>
                                    <option value="es-ES">Spanish (Español)</option>
                                    <option value="fa-IR">Persian (فارسی)</option>
                                    <option value="fi-FI">Finnish (Suomalainen)</option>
                                    <option value="fr-CA">French (Canada)</option>
                                    <option value="fr-FR">French (France)</option>
                                    <option value="he-IL">Hebrew (עברית)</option>
                                    <option value="hi-IN">Hindi (हिंदी)</option>
                                    <option value="hr-HR">Croatian (Hrvatski)</option>
                                    <option value="hu-HU">Hungarian (Magyar)</option>
                                    <option value="id-ID">Indonesian (Bahasa Indonesia)</option>
                                    <option value="ie-GA">Irish (Gaeilge)</option>
                                    <option value="it-IT">Italian (Italiano)</option>
                                    <option value="ja-JP">Japanese (日本語)</option>
                                    <option value="ka-GE">Georgian (ქართული)</option>
                                    <option value="ko-KR">Korean (한국어)</option>
                                    <option value="lt-LT">Lithuanian (Lietuvių)</option>
                                    <option value="ms-MY">Malay (Bahasa Malaysia)</option>
                                    <option value="nb-NO">Norwegian Bokmål (Norway)</option>
                                    <option value="nl-NL">Dutch (Netherlands)</option>
                                    <option value="pa-IN">Punjabi (India)</option>
                                    <option value="pl-PL">Polish (Polski)</option>
                                    <option value="pt-BR">Portuguese (Brazil)</option>
                                    <option value="pt-PT">Portuguese (Portugal)</option>
                                    <option value="ro-RO">Romanian (Romania)</option>
                                    <option value="ru-RU">Russian (Russia)</option>
                                    <option value="sv-SE">Swedish (Svenska)</option>
                                    <option value="sr-RS">Serbian (Српски)</option>
                                    <option value="th-TH">Thailand (ไทย)</option>
                                    <option value="tr-TR">Turkish (Türkçe)</option>
                                    <option value="tk-TW">Turkmen (Türkmençe)</option>
                                    <option value="uk-UA">Ukrainian (Українська)</option>
                                    <option value="vi-VN">Vietnamese (Tiếng Việt)</option>
                                    <option value="zh-CN">Chinese (简体中文)</option>
                                    <option value="zh-TW">Chinese (繁體中文)</option>
                                    <option value="dg-DG">Doge (🐶)</option>
                                </select></div>
                            </div>
                            <div>
                                <div className="py-0.5 flex w-full justify-between">
                                    <div className="self-center text-xs font-medium">Thông báo trên máy tính (Notification)</div>
                                    <button className="p-1 px-3 text-xs flex rounded transition" type="button"><span
                                        className="ml-2 self-center">Tắt</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="dark:border-gray-850 my-3" />
                        <div>
                            <div className="my-2.5 text-sm font-medium">Prompt Hệ thống (System Prompt)</div> <textarea
                                className="w-full rounded-lg p-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-none resize-none"
                                rows="4"></textarea>
                        </div>
                        <div className="mt-2 space-y-3 pr-1.5">
                            <div className="flex justify-between items-center text-sm">
                                <div className="font-medium">Các tham số Nâng cao</div> <button
                                    className="text-xs font-medium text-gray-500" type="button">Hiển thị</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pt-3 text-sm font-medium"><button
                        className="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full">Lưu</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Generalsettings;