import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Context} from "../../store/context";
import Input from "../Input";
import "../../style/login_register.scss";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    //get data
    const context = useContext(Context);
    const userList = context.userList;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // const requestOptions = {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         "username": usernameInput,
        //         "password": passwordInput
        //     })
        // }

        axios.post(`http://localhost:8000/auth/login`, ({
            "username": usernameInput,
            "password": passwordInput
        }))
        .then((res) => {
            if (res.status === 200 || res.status === 204) {
                const user = res.data;
                sessionStorage.setItem('user',JSON.stringify(user));
                userContext[1](user);
                navigate('/');
            } else {
                setErrorMessage('Wrong username or password!');
            }
            return res;
        })
        .catch((error) => console.log(error));

        

        // const user = userList.find(({username,password})=>(
        //     usernameInput === username && passwordInput===password
        // ))
        // if(user){
        //     console.log('true user');
        // }else{
        //     console.log('wrong account');
        // }
        
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
