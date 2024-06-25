import "./styles/changeinfo.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import { memberContext } from "../context/memberContext";
import ErrorMessage from "./ErrorMessage";
import api from './api'

export const YourReserves = () => {

    const [token] = useContext(memberContext);
    const [services, setServices] = useState([])

    const reserveList = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "accept": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await api.get("/reserveMember/", requestOptions);
        setServices(response.data);
    };


    function check() {

        let service;
    }


    useEffect(() => {
        reserveList();
    }, []);






    const deleteInfo = async (service) => {

        if (service.state) {

            const requestOptions = {
                method: "DELETE",
                headers: {
                    "accept": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await fetch(`http://127.0.0.1:8000/deleteReserve/${service.serviceId}`, requestOptions);
            reserveList();
        }

    };


    return (
        <div>
            <div>
                <div className="row bg-black text-white">
                    <p className="mx-3 col-4">CAR REPAIR <span className="display-6 opacity-75">&#127950;</span> </p>
                    <p className="m-3 col-6">WORKING HOURS 8:00AM - 6:00PM</p>
                </div>
            </div>

            <div>
                <h1 className="text-center mt-5 fw-bold">YOUR RESERVES</h1>
                <div className="bg-dark mx-5 me-5">

                    <table className="table table-dark text-white mt-5 mb-5 text-center">
                        <thead>
                            <tr>
                                <th scope="col">Row</th>
                                <th scope="col">Date</th>
                                <th scope="col">Car Tag</th>
                                <th scope="col">Service</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Change</th>
                            </tr>
                        </thead>

                        <tbody>
                            {services && services.map((service, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{service.date}</td>
                                    <td>{service.carTag}</td>
                                    <td>{service.services}</td>

                                    <td className="col-1">
                                        {service.state ? (
                                            <button type="button" className="btn btn-outline-secondary">Change</button>
                                        ) : (
                                            <span>Already</span>
                                        )}
                                    </td>

                                    <td className="col-1">
                                        {service.state ? (
                                            <button type="button" onClick={() => deleteInfo(service)} className="btn btn-outline-danger">Delete</button>
                                        ) : (
                                            <span>Done</span>
                                        )}
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>




            </div>
        </div>

    )
}

export default YourReserves;