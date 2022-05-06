import React from "react";
import { useState, useRef } from "react";

import Input from "../Input";
import "../../style/login_register.scss";

const Register = () => {
  const roles = ['dev','admin','other'];
  const roleRef = useRef();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullname, setFullname] = useState('')

  const handleChangeUsername = e =>{
    setUsername(e.target.value);
  }

  const handleChangePassword = e =>{
    setPassword(e.target.value);
  }

  const handleChangeFullname = e =>{
    setFullname(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
      fullname: fullname,
      role: roleRef.current.value,
    });
  }
  
  return <div>
    <div className="login-register" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <form className="d-flex-col" >
        <Input 
          label="Username:" 
          type="text" 
          value={username} 
          onChange={handleChangeUsername} 
        />
        <Input 
          label="Password:" 
          type="password"
          value={password} 
          onChange={handleChangePassword} 
        />
        <Input 
          label="Name:" 
          type="text" 
          value={fullname} 
          onChange={handleChangeFullname} 
        />
        <div className="group register">
          <label className="role form-label">
            Role:
            <select ref={roleRef} name="role" id="role">
              {roles.map((role,index)=>
                <option key={index} value={role}>{role}</option>
              )}
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  </div>;
};

export default Register;
