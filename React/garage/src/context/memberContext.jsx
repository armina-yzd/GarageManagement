import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from 'react';



export const memberContext = createContext();

export const MemberProvider = props =>{
    const [token, setToken] = useState(localStorage.getItem("memberToken"));
    useEffect(() => {
        const fetchMember = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Context_Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            };
            const response = await fetch("/api/members/me",requestOptions);
            if(!response.ok){
                setToken(null);
            }
            localStorage.setItem("memberToken",token)
        };
        fetchMember();
    },[token]);

    return(
        <memberContext.Provider value={[token,setToken]}>
            {props.children}
        </memberContext.Provider>
    )
};
