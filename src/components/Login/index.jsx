import React from 'react';
import { useState } from 'react';

import Input from '../Input';
import '../../style/login_register.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleChangePassword = (e) =>{
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
      remember: remember,
    });
  }

  return (
    <div className="login-register">
      <h2>TaskBagar Login</h2>
      <form className="d-flex-col" onSubmit={handleSubmit}>
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
        <div className="group">
          <label>
          <input type="checkbox" onChange={()=>setRemember(!remember)} checked={remember}/>
            Remeber me
          </label>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  )
}

export default Login