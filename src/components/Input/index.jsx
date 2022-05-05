import React from "react";
import { useState } from "react";

const Input = ({ 
  label, 
  type, 
  placeHolder, 
  value, 
  onChange,
  // message, 
  // onBlur, 
  // onFocus,
}) => {
  const [message, setMessage] = useState('');

  const handleBlur = e => {
    if(e.target.value===''){
      setMessage('Please enter this field')
    }
  }

  const handleFocus = e => {
    setMessage('');
  }

  return (
    <>
      <label className={message ? "form-label error" : "form-label"}>
        {label ? label : ''}
        <input
          type={type}
          placeholder={placeHolder ? placeHolder : ''}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      <span className="message">{message}</span>
      </label>
    </>
  );
};

export default Input;
