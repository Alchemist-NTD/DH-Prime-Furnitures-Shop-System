import React, { useState } from 'react';
import './PopUps.css'
import LoginPopUp from './LoginPopUp'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PopUps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isInvalidInputVisible, setInvalidInputVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function handleRegisterSwitch(event) {
    event.preventDefault();
    setIsLoginForm(false);
    setIsErrorVisible(false);
    setInvalidInputVisible(false);
  }

  function handleLoginSwitch(event) {
    event.preventDefault();
    setIsLoginForm(true);
    setIsErrorVisible(false);
    setInvalidInputVisible(false);
  }

  
  return (
    <div className={`${isOpen ? 'bg-gray-300 h-screen flex flex-col items-center justify-center' : 'flex justify-end'}`}>
      <button className={`${isOpen ? 'hidden' : 'mr-2 hover:underline'}`} onClick={togglePopup}>Đăng nhập</button>
      {isOpen && (
        <LoginPopUp setPassword={setPassword}
                    setIsOpen={setIsOpen}
                    setUsername={setUsername}
                    username={username}
                    password={password}
                    setMessage={setMessage}
                    message={message}
                    setIsErrorVisible={setIsErrorVisible}
                    setIsLoginForm={setIsLoginForm}
                    setInvalidInputVisible={setInvalidInputVisible}
                    handleRegisterSwitch={handleRegisterSwitch}
        />
      )}
    </div>
  );
};

export default PopUps;
