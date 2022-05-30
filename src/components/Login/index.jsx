import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../store/context";
import Input from "../Input";
import "../../style/login_register.scss";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    //get data
    const context = useContext(Context); 
    const userContext = context.user;

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [remember, setRemember] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeUsername = (e) => {
        setUsernameInput(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPasswordInput(e.target.value);
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        
        await axios.post(`http://localhost:8000/auth/login`, ({
            "username": usernameInput,
            "password": passwordInput
        }))
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                const user = res.data;
                sessionStorage.setItem('user',JSON.stringify(user));
                userContext[1](user);
                navigate('/');
            } else {
                setErrorMessage('Wrong username or password!');
            }
            return res;
        })
        .catch((error) => {
            setErrorMessage('Wrong username or password!');
        });
        
    };

    useEffect(() => {
        sessionStorage.removeItem('user');
    },[]);

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
                <span style={{color: '#ff0000'}}>{errorMessage}</span>
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
