import "./styles/loginstyle.css";
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { memberContext } from "../context/memberContext";
import ErrorMessage from "./ErrorMessage";
import api from './api';
import { useNavigate } from "react-router-dom";



const LoginSignup = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(memberContext);
  const navigate = useNavigate()

  const [memberSignup, setmemberSignup] = useState({
    nationalId: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    admin: false,
    ban: false
  });


  const handleInputChangeSignup = (e) => {
    setmemberSignup({
      ...memberSignup,
      [e.target.name]: e.target.value,
    });
  };

  const submitSignup = async () => {

    const response = await api.post("/signUp/", memberSignup);


    if (response.data['error']) {
      setErrorMessage(response.data['error']);

    } else {
      setToken(response.data['access_token']);
      Homepage();
    }

  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    submitSignup();
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);


    const response = await api.post('/login/', formData);

    if (response.data['error']) {
      setErrorMessage(response.data['error']);

    } else {
      setToken(response.data['access_token']);
      Homepage();
    }

  };

  function dispear() {
    setErrorMessage("");
  }

  const Homepage=()=>{
    navigate("/YourReserves");
  }
  return (
    <div>

      <div className="pt-5 text-center" style={{ background: "rgb(66, 66, 66)" }}>

        <div>
          <Link to='/' className="link-offset-2 link-underline link-underline-opacity-0 p-3 text-white opacity-50">HOME</Link>
          <Link to='/aboutus' className="link-offset-2 link-underline link-underline-opacity-0 p-3 text-white opacity-50">ABOUT US</Link>
          <Link to='/feedback' className="link-offset-2 link-underline link-underline-opacity-0 p-3 text-white opacity-50">FEEDBACK</Link>
        </div>
      </div>

      <div className="bodydiv">
        <div className="container containerjr">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <img src="assets/frontImg.jpg" alt="" />
            <div className="text1">
              <span className="text-1">Garage Management <br /> does not have</span>
              <span className="text-2">another branch</span>
            </div>

          </div>
          <div className="forms2">
            <div className="form-content2">
              <div className="login-form">
                <div className="title">Log In</div>
                <form onSubmit={handleSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <input
                        type="text1"
                        placeholder="Enter your national ID"
                        name="nationalId"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                      </svg>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="text1"><a href="#">Forgot password?</a></div>
                    <br />
                    <ErrorMessage message={errorMessage} />
                    <div className="button input-box link-offset-2 link-underline link-underline-opacity-0  justify-content-center">
                      <button type="submit" className="btn btn-dark">
                        submit
                      </button>
                    </div>
                    <div className="text1 sign-up-text">Don't have an account? <label htmlFor="flip" onClick={dispear}>Sign Up now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Sign Up</div>
                <form className="row" onSubmit={handleSubmitSignup}>
                  <div className="input-boxes">

                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <input
                        type="text1"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={memberSignup.firstName}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <input
                        type="text1"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={memberSignup.lastName}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      <input
                        type="text1"
                        placeholder="Enter your national ID"
                        name="nationalId"
                        value={memberSignup.nationalId}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                      </svg>
                      <input
                        type="text1"
                        placeholder="Enter your email"
                        name="email"
                        value={memberSignup.email}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                      </svg>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={memberSignup.password}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <br />
                    <ErrorMessage message={errorMessage} />
                    <div className="button input-box link-offset-2 link-underline link-underline-opacity-0  justify-content-center">
                      <button type="submit" className="btn btn-dark">
                        submit
                      </button>
                    </div>
                    <div className="text1 sign-up-text">Already have an account? <label htmlFor="flip" onClick={dispear}>Log In now</label></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;