import React, { useState, useEffect, useRef } from 'react';
import './LoginPopup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isInvalidInputVisible, setInvalidInputVisible] = useState(false);
  const [message, setMessage] = useState('');
  const loginFormRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUsername(document.getElementById("username").value);
    // setPassword(document.getElementById("password").value);
    


    console.log('Đăng nhập thành công!');
    console.log('Tên đăng nhập:', username);
    console.log('Mật khẩu:', password);

    // Đóng pop-up sau khi đăng nhập thành công
    setIsOpen(false);
  };
  
  return (
    <div className={`h-screen ${isOpen ? 'bg-gray-300' : ''}`}>
      <button onClick={togglePopup}>Mở form đăng nhập</button>
      {isOpen && (
        <div className="login-rec" ref={loginFormRef}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="header-sign-to-account">
              Đăng Nhập
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  className="label-username"
                >
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="input-username"
                  placeholder="Điền tên đăng nhập của bạn"
                  onChange={handleUsernameChange}
                ></input>
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••••••••"
                  className="input-password"
                  onChange={handlePasswordChange}
                ></input>
              </div>
              {
                isErrorVisible && 
                <div className="error-message">
                  Tên đăng nhập hoặc mật khẩu không chính xác, xin vui lòng thử lại!
                </div>
              }
              {
                isInvalidInputVisible && 
                <div className="error-message">
                  Bạn cần điền cả tên đăng nhập và mật khẩu!
                </div>
              }
              <button
                type="submit"
                className="login-btn"
                onClick={handleSubmit}
              >
                Đăng nhập
              </button>
              <p className="text-sm font-light text-gray-500">
                Bạn chưa có tài khoản?{" "}
                
                {/* <button
                    className="font-medium text-primary-600 hover:underline"
                    onClick={handleRegisterSwitch}
                >
                    Sign up
                </button> */}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
