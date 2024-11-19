import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import fakeUserData from '../../../services/auth'
const Auth = function () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const user = fakeUserData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert('Đăng nhập thành công!');
      navigate('/');
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };
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
            <form className="flex flex-col justify-center" onSubmit={handleLogin}>
              <div className="mb-1">
                <div className="text-2xl font-medium">Sign in to Open WebUI</div>
              </div>
              <div className="flex flex-col mt-4">
                <div className="mb-2">
                  <div className="text-sm font-medium text-left mb-1">Email</div>
                  <input
                    type="email"
                    className="px-5 py-3 rounded-2xl w-full text-sm outline-none border dark:border-none dark:bg-gray-900"
                    autoComplete="email"
                    placeholder="Nhập Email của bạn"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    required=""
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-left mb-1">Mật khẩu</div>
                  <input
                    type="password"
                    className="px-5 py-3 rounded-2xl w-full text-sm outline-none border dark:border-none dark:bg-gray-900"
                    placeholder="Nhập Mật khẩu của bạn"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required=""
                  />
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="bg-gray-900 hover:bg-gray-800 w-full rounded-2xl text-white font-medium text-sm py-3 transition"
                  type="submit">
                  Đăng nhập
                </button>
                <div className="mt-4 text-sm text-center">
                  Không có tài khoản?
                  <Link to="/register" className="font-medium underline">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
