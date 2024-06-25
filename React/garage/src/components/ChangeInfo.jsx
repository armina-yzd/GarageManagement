import "./styles/changeinfo.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import { memberContext } from "../context/memberContext";
import ErrorMessage from "./ErrorMessage";
import api from './api'

export const ChangeInfo = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [token] = useContext(memberContext);

    const [memberChangeInfo, setmemberChangeInfo] = useState({
        nationalId: 'string',
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        admin: false,
        ban: false
    });


    const handleInputChangeChangeInfo = (e) => {
        setmemberChangeInfo({
            ...memberChangeInfo,
            [e.target.name]: e.target.value,
        });
    };

    const submitChangeInfo = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(memberChangeInfo),
        };

        const response = await fetch("http://127.0.0.1:8000/changeInfo/", requestOptions);

        if (!token) {
            setErrorMessage("no");
        }

        const data = await response.json();

        if (data.error) {
            setErrorMessage(data.error);
        } else {
            setErrorMessage("Info Changed");
        }

    };

    const handleSubmitChangeInfo = (e) => {
        e.preventDefault();
        submitChangeInfo();
    }

    return (
        <div>
            <div>
                <div className="row bg-black text-white">
                    <p className="mx-3 col-4">CAR REPAIR <span className="display-6 opacity-75">&#127950;</span> </p>
                    <p className="m-3 col-6">WORKING HOURS 8:00AM - 6:00PM</p>
                </div>
            </div>

            <div className="mainn row">

                <div className="container container1 col-6">

                    <div className="forms forms1 ">

                        <div className="form-content form-content1">

                            <div className="signup-form">
                                <div className="title1">CHANGE INFO</div>
                                <form onSubmit={handleSubmitChangeInfo} className="row">
                                    <div className="input-boxes1">

                                        <div className="input-box1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg>
                                            <input className="input1" type="text" placeholder="edit your first name" name="firstName"
                                                value={memberChangeInfo.firstName}
                                                onChange={handleInputChangeChangeInfo} required />
                                        </div>
                                        <div className="input-box1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg>
                                            <input className="input1" type="text" placeholder="edit your last name" name="lastName"
                                                value={memberChangeInfo.lastName}
                                                onChange={handleInputChangeChangeInfo} required />
                                        </div>
                                        <div className="input-box1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                            </svg>
                                            <input className="input1" type="text" placeholder="edit your email" name="email"
                                                value={memberChangeInfo.email}
                                                onChange={handleInputChangeChangeInfo} required />
                                        </div>
                                        <div className="input-box1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                            </svg>
                                            <input className="input1" type="password" placeholder="edit your password" name="password"
                                                value={memberChangeInfo.password}
                                                onChange={handleInputChangeChangeInfo} required />
                                        </div>
                                        <br />
                                        <ErrorMessage message={errorMessage} />
                                        <div className="button input-box1 link-offset-2 link-underline link-underline-opacity-0  justify-content-center">
                                            <button type="submit" className="btn btn-dark">
                                                submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 text-center  bg-dark-subtle">
                <h1>100% Result Guarantee</h1>
                <p>we offer full service auto repair and maintenance</p>
                <div className="d-flex text-center justify-content-center">

                    <p>if you need consultation you can contact us +98 111 111 1111 </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-telephone mt-1 ms-1" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                </div>

            </div>
        </div>

    )
}

export default ChangeInfo;