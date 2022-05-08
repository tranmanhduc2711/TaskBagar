import React from "react";
import { useState, useRef } from "react";

import LabelIcon from '@mui/icons-material/Label';
import styles from "./style.module.scss";

const AddNewTask = ({}) => {
  const [taskName, setTaskName] = useState('');
  const [desc, setDesc] = useState('');
  const [employee, setEmployee] = useState('');

  const startRef = useRef();
  const endRef = useRef();

  const handleCancel = (e) => {
    e.preventDefault();
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log({
      taskName,
      desc,
      employee,
      start: startRef.current.value,
      end: endRef.current.value,
    });
  }

  return (
    <div className={styles.layer}>
      <form className={styles.AddNewTask}>
        <h3>Add new task</h3>
          <input 
            placeholder="Task name"
            value={taskName}
            onChange={(e)=>setTaskName(e.target.value)}
          />
          <textarea 
            placeholder="Description"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
          <input 
            placeholder="Employee"
            value={employee}
            onChange={(e)=>setEmployee(e.target.value)}
          />
          <input ref={startRef} type="date" placeholder="Start"/>
          <input ref={endRef} type="date" placeholder="Deadline"/>
          <div className={styles.group}>
            {/*temporary onCLick */}
            <button 
              className={`${styles.button} ${styles.labelBtn}`}
              onClick={handleCancel}
              ><LabelIcon/> Label</button>
            <div>
              <button 
                className={`${styles.button} ${styles.cancel}`}
                onClick={handleCancel}
              >Cancel</button>
              <button 
                type="submit" 
                className={[styles.button]}
                onClick={handleSubmit}
              >Submit</button>
            </div>
          </div>
        
      </form>
    </div>
  );
};

export default AddNewTask;
