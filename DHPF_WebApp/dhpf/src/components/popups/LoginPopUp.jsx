import React, { useState, useEffect, useRef } from 'react';
import './LoginPopUp.css'
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const LoginPopUps = (props) => {
  console.log(process.env.REACT_APP_TEST)
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isInvalidInputVisible, setInvalidInputVisible] = useState(false);
  const loginFormRef = useRef(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
        props.setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleInputChange(event) {
    event.preventDefault();
    setIsErrorVisible(false);
    setInvalidInputVisible(false);
    props.setMessage('');
  }

  const handleUsernameChange = (e) => {
    props.setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    props.setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // process.env.REACT_APP_SERVER_URL

    if (!props.username || !props.password) {
      setInvalidInputVisible(true);
      return;
    }

    let payload = {
      username: props.username,
      password: props.password,
    };

    try {
      let response = await axios.post('/login', payload);

      if (response.status === 200) {
        setIsErrorVisible(false);
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("username", props.username);
        const access = localStorage.getItem("access");

        // let usr_info_response = await axios.get(
        //   `http://localhost:8000/user/retrieve/${username}`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${access}`,
        //     },
        //   }
        // );
        // if (usr_info_response) {
        //   localStorage.setItem("user_id", usr_info_response.data.usr_id);
        // }

        console.log(access);
        // navigate("/home");
        // window.location.reload();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data['detail']) {
        console.log(error.response.status)
        setIsErrorVisible(true)
      }
    }

    console.log('Đăng nhập thành công!');
    console.log('Tên đăng nhập:', props.username);
    console.log('Mật khẩu:', props.password);

    props.setIsOpen(false);
  };
  
  return (
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
  );
};

export default LoginPopUps;
