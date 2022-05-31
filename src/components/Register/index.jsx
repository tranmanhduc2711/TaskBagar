import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {Context} from "../../store/context";
import Input from "../Input";
import "../../style/login_register.scss";

const Register = () => {
  const navigate = useNavigate();
  const userContext = useContext(Context).user;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [roles,setRoles] = useState([]);
  const [role, setRole] = useState(1);
  const handleChangeUsername = e =>{
    setUsername(e.target.value);
  }

  const handleChangePassword = e =>{
    setPassword(e.target.value);
  }

  const handleChangeFullname = e =>{
    setFullname(e.target.value);
  }

  const handleChangeRole = e =>{
    setRole(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const temp = {
      username,
      password,
      fullname,
      role: Number(role),
    };

    axios.post(`http://localhost:8000/users/create`, ({
      "username": temp.username,
      "password": temp.password,
      "name": temp.fullname,
      "rold_id": temp.role
    }))
    .then((res) => {
      console.log(res.data);
      navigate('/');
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    const fetchRoles = async () =>{
      await axios.get('http://localhost:8000/roles')
        .then(res=>setRoles(res.data))
        .catch(error=>console.log(error));
    }

    if(userContext[0].username){
      if(userContext[0].role_id!==1){
        navigate('/');
      }else{
        fetchRoles();
      }
    }else{
      navigate('/');
    }
  },[userContext[0].username,roles.length]);
  
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
            <select onChange={handleChangeRole} name="role" id="role">
              {roles.map((role,index)=>
                <option key={index} value={role.id}>{role.role_name}</option>
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
