import React from 'react';

const Register = function () {
  return (
    <>
      <div className="fixed m-10 z-50">
        <div className="flex space-x-2">
          <div className="self-center">
            <img
              crossOrigin="anonymous"
              src="../imgs/favicon.png"
              className="w-8 rounded-full"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 min-h-screen w-full flex justify-center font-primary">
        <div className="w-full sm:max-w-md px-10 min-h-screen flex flex-col text-center">
          <div className="my-auto pb-10 w-full dark:text-gray-100">
            <form className="flex flex-col justify-center">
              <div className="mb-1">
                <div className="text-2xl font-medium">Sign up to Open WebUI</div>
                <div className="mt-1 text-xs font-medium text-gray-500">
                  ⓘ Open WebUI không thực hiện bất kỳ kết nối ngoài nào, và dữ
                  liệu của bạn vẫn được lưu trữ an toàn trên máy chủ lưu trữ cục
                  bộ của bạn.
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <div>
                  <div className="text-sm font-medium text-left mb-1">Tên</div>{' '}
                  <input
                    type="text"
                    className="px-5 py-3 rounded-2xl w-full text-sm outline-none border dark:border-none dark:bg-gray-900"
                    autocomplete="name"
                    placeholder="Nhập Họ và Tên của bạn"
                    required=""
                  />
                </div>
                <hr className="my-3 dark:border-gray-900" />
                <div className="mb-2">
                  <div className="text-sm font-medium text-left mb-1">Email</div>{' '}
                  <input
                    type="email"
                    className="px-5 py-3 rounded-2xl w-full text-sm outline-none border dark:border-none dark:bg-gray-900"
                    autocomplete="email"
                    placeholder="Nhập Email của bạn"
                    required=""
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-left mb-1">Mật khẩu</div>{' '}
                  <input
                    type="password"
                    className="px-5 py-3 rounded-2xl w-full text-sm outline-none border dark:border-none dark:bg-gray-900"
                    placeholder="Nhập Mật khẩu của bạn"
                    autocomplete="current-password"
                    required=""
                  />
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="bg-gray-900 hover:bg-gray-800 w-full rounded-2xl text-white font-medium text-sm py-3 transition"
                  type="submit"
                >
                  Tạo Tài khoản
                </button>
                <div className="mt-4 text-sm text-center">
                  Bạn đã có tài khoản?{' '}
                  <button className="font-medium underline" type="button">
                    Đăng nhập
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
