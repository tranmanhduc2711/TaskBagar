import React from "react";
import { useState, useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../store/context";
import Input from "../Input";
import "../../style/login_register.scss";

const Login = () => {
    const navigate = useNavigate();
    //get data
    const context = useContext(Context);
    const userList = context.userList;
    const userContext = context.user;

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [remember, setRemember] = useState(true);

    const handleChangeUsername = (e) => {
        setUsernameInput(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = userList.find(({username,password})=>(
            usernameInput === username && passwordInput===password
        ))
        if(user){
            console.log('true user');
            sessionStorage.setItem('user',JSON.stringify(user));
            userContext[1](user);
            navigate('/');
        }else{
            console.log('wrong account');
        }
        
    };

    return (
        <div className="login-register">
            <h2>TaskBagar Login</h2>
            <form className="d-flex-col" onSubmit={handleSubmit}>
                <Input
                    label="Username:"
                    type="text"
                    value={usernameInput}
                    onChange={handleChangeUsername}
                />
                <Input
                    label="Password:"
                    type="password"
                    value={passwordInput}
                    onChange={handleChangePassword}
                />
                <div className="group">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => setRemember(!remember)}
                            checked={remember}
                        />
                        Remeber me
                    </label>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;
