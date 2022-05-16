import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../store/context";

import ListProject from "./ListProject";
import "./Homepage.scss";

export default function Homepage() {
    const userContext = useContext(Context).user;
    const navigate = useNavigate();
    const [listProject, setListProject] = useState([]);
    useEffect(()=>{
        const user = sessionStorage.user ? JSON.parse(sessionStorage.user) : undefined;
        if(user){
            userContext[1](user);
        }else{
            navigate('/login');
        }
    },[])
    return (
        <>
            <div className="homepage-container p-1 d-flex-col">
                <ListProject></ListProject>
            </div>
        </>
    );
}
