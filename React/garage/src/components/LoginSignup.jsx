import "./styles/loginstyle.css";
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { memberContext } from "../context/memberContext";
import ErrorMessage from "./ErrorMessage";
import api from './api'


const LoginSignup = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(memberContext);

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


    if (!response.ok) {
      setErrorMessage(response.data['error']);

    } else {
      setToken(response.data['access_token']);
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


    const response = await fetch('/login/', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.access_token) {
      setToken(data.access_token);
    } else {
      setErrorMessage(data.error);
    }

  };

  function dispear(){
    setErrorMessage("");
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
            <div className="text">
              <span className="text-1">Garage Management <br /> does not have</span>
              <span className="text-2">another branch</span>
            </div>

          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Log In</div>
                <form onSubmit={handleSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your national ID"
                        name="nationalId"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="text"><a href="#">Forgot password?</a></div>
                    <br />
                    <ErrorMessage message={errorMessage} />
                    <div to='' className="button input-box link-offset-2 link-underline link-underline-opacity-0">
                      <button type="submit">
                        submit
                      </button>
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip" onClick={dispear}>Sign Up now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Sign Up</div>
                <form className="row" onSubmit={handleSubmitSignup}>
                  <div className="input-boxes">

                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={memberSignup.firstName}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={memberSignup.lastName}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your national ID"
                        name="nationalId"
                        value={memberSignup.nationalId}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        value={memberSignup.email}
                        onChange={handleInputChangeSignup}
                        required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
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
                    <div to='' className="button input-box link-offset-2 link-underline link-underline-opacity-0">
                      <button type="submit">
                        submit
                      </button>
                    </div>
                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip" onClick={dispear}>Log In now</label></div>
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