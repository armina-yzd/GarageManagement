import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from 'react';



export const memberContext = createContext();

export const MemberProvider = props =>{
    const [token, setToken] = useState(localStorage.getItem("memberToken"));
    useEffect(() => {
        const fetchMember = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                };
                const response = await fetch("http://127.0.0.1:8000/api/members/me", requestOptions);
        
                if (response.ok) {
                    const data = await response.json();
                    if (data.error) {
                        setToken(null);
                    }
                    
                localStorage.setItem("memberToken",token)
                } else {
                    console.error("Error fetching member data:", response.status);
                }
            } catch (error) {
                console.error("Error fetching member data:", error);
            }
        };
        
        fetchMember();
    }, [token]);

    return(
        <memberContext.Provider value={[token,setToken]}>
            {props.children}
        </memberContext.Provider>
    )
};
